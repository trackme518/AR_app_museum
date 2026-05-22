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
            document.getElementById('header-nav-bar')?.classList.add('hidden'); 
            document.getElementById('exit-ar-btn')?.classList.remove('hidden');
            document.getElementById('ARButton')?.classList.add('hidden');
        });

        this.arManager.renderer.xr.addEventListener('sessionend', () => {
            document.getElementById('scenario-select-wrapper')?.classList.remove('hidden');
            document.getElementById('header-nav-bar')?.classList.remove('hidden');
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

        const validCharacters = characters.filter((c) => c.media && c.marker);

        // Preload marker images required by WebXR image tracking
        const trackedImages = await Promise.all(
            validCharacters.map(async (char) => {
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
        for (let i = 0; i < validCharacters.length; i++) {
            await this.spawnCharacter(validCharacters[i], i, isGround);
        }
    }

    async spawnCharacter(charData, index, isGround) {
        // Determine media format for appropriate renderer pipeline
        const isModel = charData.typeOfMedia?.toLowerCase() === 'model' || charData.media.endsWith('.glb');
        const isVideo = charData.typeOfMedia?.toLowerCase() === 'video';
        
        let mesh;
        let videoElement = null;

        if (isModel) {
            mesh = await this.setup3DModel(charData);
            if (!mesh) return; 
        } else {
            const mediaObj = this.setup2DMedia(charData, isVideo);
            mesh = mediaObj.mesh;
            videoElement = mediaObj.video;
        }

        this.positionMesh(mesh, isGround, isModel);
        
        // Attach metadata for raycaster hit detection
        mesh.userData = charData;

        // Group mesh to separate marker rotation logic from object rotation logic
        const anchorGroup = new THREE.Group();
        anchorGroup.add(mesh);

        this.arManager.addObjectToScene(anchorGroup, index, isVideo, videoElement);
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

    setup2DMedia(charData, isVideo) {
        // Map texture sources based on specified media type
        let material;
        let video = null;

        if (isVideo) {
            const res = createVideoTexture(charData.media);
            material = res.material;
            video = res.video;
        } else {
            material = createImageTexture(charData.media);
        }

        const mesh = createCharacterMesh(material);
        mesh.scale.set(this.targetScale, this.targetScale, 1);

        return { mesh, video };
    }

    positionMesh(mesh, isGround, isModel) {
        // Adjust local orientation based on physical marker placement
        if (isGround) {
            mesh.rotation.set(0, 0, 0);
            mesh.position.set(0, isModel ? 0 : this.targetScale / 2, 0);
        } else {
            mesh.rotation.x = Math.PI / 2;
            mesh.position.set(0, 0, 0);
        }
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