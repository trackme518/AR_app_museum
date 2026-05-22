import { THREE, ARButton } from './three-bundle.js';

export class ARSceneManager {
    constructor(containerElement, onSelectCallback) {
        this.container = containerElement;
        this.onSelectCallback = onSelectCallback;
        
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.controller = null;

        this.anchorGroups = [];
        this.videos = [];
        this.mixers = []; 
        this.clock = new THREE.Clock();

        this.isSelectionEnabled = true;
        
        this.init();
    }

    init() {
        // Setup base ThreeJS scene and camera
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
        
        // Add illumination
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 5, 0);
        this.scene.add(light);
        this.scene.add(new THREE.AmbientLight(0xffffff, 0.5));

        // Configure WebGL renderer for AR compatibility
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.xr.enabled = true;
        document.body.appendChild(this.renderer.domElement);

        // Initialize XR controller for interaction
        this.controller = this.renderer.xr.getController(0);
        this.controller.addEventListener('select', () => this.handleSelect());
        this.scene.add(this.controller);

        // Handle viewport changes
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Start render loop
        this.renderer.setAnimationLoop((timestamp, frame) => this.render(timestamp, frame));
        
        // Bind session events
        this.renderer.xr.addEventListener('sessionstart', () => this.onSessionStart());
        this.renderer.xr.addEventListener('sessionend', () => this.onSessionEnd());
    }

    setupARButton(trackedImages) {
        // Remove existing button if present to prevent duplicates
        const oldBtn = document.getElementById('ARButton'); 
        if (oldBtn) oldBtn.remove();

        // Create new DOM overlay button with image tracking configuration
        const arBtn = ARButton.createButton(this.renderer, {
            requiredFeatures: ['image-tracking'],
            optionalFeatures: ['dom-overlay'],
            domOverlay: { root: document.body },
            trackedImages: trackedImages
        });
        document.body.appendChild(arBtn);
    }

    onSessionStart() {
        // Resume all background media when entering AR
        this.videos.forEach(v => v.play().catch(e => console.warn(e)));
    }

    onSessionEnd() {
        // Pause media and hide elements when exiting AR
        this.videos.forEach(v => v.pause());
        this.anchorGroups.forEach(g => g.visible = false);
    }

    handleSelect() {
        // Abort selection if UI is locked
        if (!this.isSelectionEnabled) return;

        const validCharacterObject = this.performRaycast();
        
        if (validCharacterObject) {
            this.onSelectCallback(validCharacterObject);
        } else {
            console.warn("Clicked on object but no character data found");
        }
    }

    performRaycast() {
        // Calculate raycast direction based on controller orientation
        const tempMatrix = new THREE.Matrix4();
        tempMatrix.identity().extractRotation(this.controller.matrixWorld);
        
        const raycaster = new THREE.Raycaster();
        raycaster.ray.origin.setFromMatrixPosition(this.controller.matrixWorld);
        raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);

        // Intersect only with currently visible tracking groups
        const visibleGroups = this.anchorGroups.filter(g => g.visible);
        const intersects = raycaster.intersectObjects(visibleGroups, true);
        
        if (intersects.length === 0) return null;

        let hitObject = intersects[0].object;

        // Traverse hierarchy upwards to locate the parent mesh holding character metadata
        while (hitObject) {
            if (hitObject.userData && (hitObject.userData.playAnimation || hitObject.userData.media)) {
                return hitObject;
            }
            hitObject = hitObject.parent;
        }

        return null;
    }

    addObjectToScene(anchorGroup, markerIndex, isVideo = false, videoElement = null) {
        // Register object invisibly and map it to specific image marker
        anchorGroup.visible = false;
        anchorGroup.userData.markerIndex = markerIndex;
        this.scene.add(anchorGroup);
        this.anchorGroups.push(anchorGroup);
        
        if (isVideo && videoElement) {
            this.videos.push(videoElement);
        }
    }

    render(timestamp, frame) {
        // Update all animation layers
        const delta = this.clock.getDelta();
        for (const mixer of this.mixers) {
            mixer.update(delta);
        }

        // Process AR tracking data if available
        if (frame) {
            this.updateImageTracking(frame);
        }

        this.renderer.render(this.scene, this.camera);
    }

    updateImageTracking(frame) {
        const results = frame.getImageTrackingResults();
        const referenceSpace = this.renderer.xr.getReferenceSpace();
        const viewerPose = frame.getViewerPose(referenceSpace);

        for (const result of results) {
            const anchorGroup = this.anchorGroups.find(g => g.userData.markerIndex === result.index);
            
            if (anchorGroup && result.trackingState === 'tracked') {
                const pose = frame.getPose(result.imageSpace, referenceSpace);
                
                if (pose) {
                    // Update object transform based on marker physical position
                    anchorGroup.visible = true;
                    anchorGroup.position.copy(pose.transform.position);
                    anchorGroup.quaternion.copy(pose.transform.orientation);

                    // Orient character to always face the user horizontally
                    if (viewerPose && anchorGroup.children.length > 0) {
                        const characterModel = anchorGroup.children[0]; 
                        const viewPos = viewerPose.transform.position;
                        let cameraWorldPos = new THREE.Vector3(viewPos.x, viewPos.y, viewPos.z);

                        anchorGroup.worldToLocal(cameraWorldPos);
                        let angle = Math.atan2(cameraWorldPos.x, cameraWorldPos.z);
                        characterModel.rotation.y = angle; 
                    }
                }
            }
        }
    }

    clearScene() {
        // Safely dispose all materials and geometries to prevent memory leaks
        this.anchorGroups.forEach(group => {
            this.scene.remove(group);
            group.traverse(child => {
                if (child.geometry) child.geometry.dispose();
                if (child.material) child.material.dispose();
            });
        });
        this.anchorGroups = [];
        this.videos = [];
        this.mixers = [];
    }

    exitAR() {
        if (this.renderer.xr.getSession()) {
            this.renderer.xr.getSession().end();
        }
    }
}