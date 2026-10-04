import { ARSceneManager } from './ARSceneManager.js';
import {
    createVideoTexture,
    createImageTexture,
    createCharacterMesh,
    loadGLTFModel,
} from './spriteUtils.js';
import { THREE } from './three-bundle.js';

export class ARSpawner {
    constructor(chatContainer, onCharacterClickCallback) {
        this.arManager = new ARSceneManager(
            chatContainer,
            onCharacterClickCallback
        );
        this.targetScale = 0.3;
        this.activeIntervals = [];

        this.setupXREvents();
    }

    setupXREvents() {
        // Toggle UI elements when AR session state changes
        this.arManager.renderer.xr.addEventListener('sessionstart', () => {
            document.getElementById('scenario-select-wrapper')?.classList.add('hidden');
            document.querySelector('header')?.classList.add('hidden'); 
            document.getElementById('exit-ar-btn')?.classList.remove('hidden');
            document.getElementById('ARButton')?.classList.add('hidden');
        });

        this.arManager.renderer.xr.addEventListener('sessionend', () => {
            document.getElementById('scenario-select-wrapper')?.classList.remove('hidden');
            document.querySelector('header')?.classList.remove('hidden');
            document.getElementById('exit-ar-btn')?.classList.add('hidden');
            document.getElementById('ARButton')?.classList.remove('hidden');
            
            this.clearAllIntervals();
            window.location.reload(); 
        });
    }

    async loadCharacters(characters, isGround = true) {
        // Prepare scene by removing old characters and intervals
        this.arManager.clearScene();
        this.clearAllIntervals();

        const validCharacters = characters.filter((c) => c.media);
        const markerCharacters = validCharacters.filter((c) => c.marker);

        // Preload marker images required by WebXR image tracking
        const trackedImages = await Promise.all(
            markerCharacters.map(async (char) => {
                const img = new Image();
                img.src = char.marker;
                img.crossOrigin = 'anonymous';
                await img.decode();
                const bitmap = await createImageBitmap(img);
                return {
                    image: bitmap,
                    widthInMeters: 0.25,
                };
            })
        );

        this.arManager.setupARButton(trackedImages);

        // Iterate and spawn all validated characters
        let markerIndex = 0;
        for (const character of validCharacters) {
            const characterMarkerIndex = character.marker ? markerIndex++ : null;
            await this.spawnCharacter(character, characterMarkerIndex, isGround);
        }
    }

    async spawnCharacter(charData, index, isGround) {
        // Determine media format for appropriate renderer pipeline
        const isModel = charData.typeOfMedia?.toLowerCase() === 'model' || charData.media.endsWith('.glb');
        const isVideo = charData.typeOfMedia?.toLowerCase() === 'video';
        
        let mesh;
        let videoElements = [];

        if (isModel) {
            mesh = await this.setup3DModel(charData);
            if (!mesh) return; 
        } else {
            const mediaObj = this.setup2DMedia(charData, isVideo, charData.greenscreen);
            mesh = mediaObj.mesh;
            videoElements = mediaObj.videos || [];
        }

        // Models and billboards share the same marker-local placement. A billboard
        // gets only an additional camera-facing yaw in the scene manager.
        this.positionMesh(mesh, isGround, isModel, charData.markerOrientation);

        // Attach metadata for raycaster hit detection
        mesh.userData = charData;

        // Group mesh to separate marker rotation logic from object rotation logic.
        const anchorGroup = new THREE.Group();
        anchorGroup.userData.billboardMode = isVideo ? 'local-yaw' : null;
        anchorGroup.userData.billboardBaseRotation = mesh.quaternion.clone();
        anchorGroup.add(mesh);

        this.arManager.addObjectToScene(anchorGroup, index, isVideo, videoElements);
    }

    async setup3DModel(charData) {
        try {
            // Load geometry and scale it down to appropriate AR height
            const gltf = await loadGLTFModel(charData.media);
            const mesh = gltf.scene;
            mesh.scale.set(0.1, 0.1, 0.1);

            // Initialize animation pipeline if clips exist
            if (gltf.animations && gltf.animations.length > 0) {
                this.setupAnimations(mesh, gltf.animations, charData);
            } else {
                console.warn('Loaded 3D model does not contain any animations');
            }
            
            return mesh;
        } catch (err) {
            console.error('Error loading 3D model:', err);
            return null;
        }
    }

    setup2DMedia(charData, isVideo, greenscreen = false) {
        // Map texture sources based on specified media type
        let material;
        let video = null;

        if (isVideo) {
            const statePaths = {
                idle: charData.media,
                talk: charData.videoTalk || null,
                special: charData.videoSpecial || null,
            };
            const states = {};
            Object.entries(statePaths).forEach(([name, path]) => {
                if (!path) return;
                const state = createVideoTexture(path, name !== 'special', greenscreen);
                state.video.dataset.videoState = name;
                states[name] = state;
            });
            material = states.idle.material;
            video = states.idle.video;

            charData.arAnimNames = { idle: 'idle', talk: 'talk', special: 'special' };
            charData.currentVideoState = null;
            charData.playAnimation = (stateName) => {
                const selectedName = states[stateName] ? stateName : 'idle';
                if (charData.currentVideoState === selectedName) return;
                Object.values(states).forEach((state) => {
                    state.video.pause();
                    state.video.currentTime = 0;
                });
                const selected = states[selectedName];
                if (material.userData.setVideoTexture) {
                    material.userData.setVideoTexture(selected.texture);
                } else {
                    material.map = selected.texture;
                    material.needsUpdate = true;
                }
                selected.video.loop = selectedName !== 'special';
                selected.video.play().catch(() => {});
                charData.currentVideoState = selectedName;
            };
            if (states.special) {
                states.special.video.addEventListener('ended', () => charData.playAnimation('idle'));
                this.scheduleVideoSpecial(charData);
            }
            charData.playAnimation('idle');

            // Scale the billboard mesh to match the marker size (0.25m aspect-corrected)
            const aspect = 1; // Default square
            if (video.videoWidth && video.videoHeight) {
                aspect = video.videoWidth / video.videoHeight;
            }
            const width = 0.25 * Math.max(1, aspect);
            const height = 0.25 * Math.max(1, 1 / aspect);
            const mesh = createCharacterMesh(material, width, height);
            mesh.scale.set(1, 1, 1); // Reset scale, use geometry dimensions
            return { mesh, video, videos: Object.values(states).map((state) => state.video) };
        } else {
            material = createImageTexture(charData.media);
        }

        const mesh = createCharacterMesh(material, 0.25, 0.25);
        mesh.scale.set(1, 1, 1);

        return { mesh, video, videos: video ? [video] : [] };
    }

    scheduleVideoSpecial(charData) {
        const schedule = () => {
            const delay = Math.floor(Math.random() * 25001) + 5000;
            const timeoutId = setTimeout(() => {
                if (charData.currentVideoState === 'idle') charData.playAnimation('special');
                this.activeIntervals = this.activeIntervals.filter((id) => id !== timeoutId);
                schedule();
            }, delay);
            this.activeIntervals.push(timeoutId);
        };
        schedule();
    }

    positionMesh(mesh, isGround, isModel, markerOrientation = 'stand') {
        // Compute bounding box to center the model on the marker surface.
        const box = new THREE.Box3().setFromObject(mesh);
        const size = new THREE.Vector3();
        box.getSize(size);
        const centerY = size.y / 2;

        // Vertical offset:
        // - 'stand': Model stands upright; lower it by half its height so feet touch the marker.
        // - 'flat': Model lies flush; center it on the marker plane (y=0).
        const yOffset = markerOrientation === 'flat' ? 0 : -centerY;
        mesh.position.set(0, yOffset, 0);

        // markerOrientation: 'stand' = upright perpendicular to the marker,
        // 'flat' = flush lying on the marker surface.
        mesh.rotation.set(0, 0, 0);
        if (markerOrientation === 'flat') mesh.rotation.x = -Math.PI / 2;
    }

    setupAnimations(mesh, animations, charData) {
        // Setup animation mixer and bind it to global manager loop
        const mixer = new THREE.AnimationMixer(mesh);
        this.arManager.mixers.push(mixer);

        const actions = {};
        const availableAnimNames = animations.map(a => a.name);

        animations.forEach(clip => {
            actions[clip.name] = mixer.clipAction(clip);
        });

        // Ensure requested animations fall back to default clip if missing
        const getValidAnimName = (targetName) => {
            return actions[targetName] ? targetName : availableAnimNames[0];
        };

        const idleName = getValidAnimName(charData.anim_idle || charData.animIdle || 'Idle');
        const talkName = getValidAnimName(charData.anim_talk || charData.animTalk || 'Talk');
        const specialName = getValidAnimName(charData.anim_special || charData.animSpecial || 'Special');

        charData.arAnimNames = {
            idle: idleName,
            talk: talkName,
            special: specialName,
        };

        charData.currentAction = null;

        // Expose animation controller directly on character data object
        charData.playAnimation = (animName, loopOnce = false) => {
            const newAction = actions[animName];

            if (!newAction || charData.currentAction === newAction) return;

            newAction.reset();

            // Configure playback behavior
            if (loopOnce) {
                newAction.setLoop(THREE.LoopOnce, 1);
                newAction.clampWhenFinished = true;
            } else {
                newAction.setLoop(THREE.LoopRepeat, Infinity);
            }

            newAction.play();

            // Blend transitions smoothly
            if (charData.currentAction) {
                charData.currentAction.crossFadeTo(newAction, 0.3, true);
            }

            charData.currentAction = newAction;
        };

        charData.playAnimation(idleName);

        // Restore idle state automatically after singular animations finish
        mixer.addEventListener('finished', (e) => {
            if (e.action === actions[specialName] || e.action === actions[talkName]) {
                charData.playAnimation(idleName);
            }
        });

        // Schedule periodic special animation (5 - 30 seconds)
        const scheduleNextSpecial = () => {
            const randomDelay = Math.floor(Math.random() * (30000 - 5000 + 1)) + 5000;
            
            const timeoutId = setTimeout(() => {
                if (charData.currentAction === actions[idleName] && specialName !== idleName) {
                    charData.playAnimation(specialName, true);
                }
                
                this.activeIntervals = this.activeIntervals.filter(id => id !== timeoutId);
                
                scheduleNextSpecial();
            }, randomDelay);

            this.activeIntervals.push(timeoutId);
        };

        scheduleNextSpecial();
    }

    clearAllIntervals() {
        // Destroy all registered timers to free background threads
        this.activeIntervals.forEach(id => clearInterval(id));
        this.activeIntervals = [];
    }

    disableSelection() {
        this.arManager.isSelectionEnabled = false;
    }

    enableSelection() {
        this.arManager.isSelectionEnabled = true;
    }

    exit() {
        this.arManager.exitAR();
    }
}
