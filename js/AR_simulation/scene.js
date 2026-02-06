import { THREE, ARButton } from './three-bundle.js';

export class ARSceneManager {
    constructor(containerElement, onSelectCallback) {
        this.container = containerElement;
        this.onSelectCallback = onSelectCallback;
        
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.contentGroup = null;
        this.controller = null;
        
        this.hitTestSource = null;
        this.hitTestSourceRequested = false;
        this.isSpawned = false;

        this.sprites = [];
        this.videos = [];

        this.init();
    }

    init() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
        this.scene.add(this.camera);

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 5, 0);
        this.scene.add(light);
        this.scene.add(new THREE.AmbientLight(0xffffff, 0.5));

        this.contentGroup = new THREE.Group();
        this.contentGroup.visible = false;
        this.scene.add(this.contentGroup);

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.xr.enabled = true;
        document.body.appendChild(this.renderer.domElement);

        const arBtn = ARButton.createButton(this.renderer, {
            requiredFeatures: ['hit-test'],
            optionalFeatures: ['dom-overlay'],
            domOverlay: { root: document.body },
        });
        document.body.appendChild(arBtn);

        this.controller = this.renderer.xr.getController(0);
        this.controller.addEventListener('select', () => this.handleSelect());
        this.scene.add(this.controller);

        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });

        this.renderer.setAnimationLoop((timestamp, frame) => this.render(timestamp, frame));
        
        this.renderer.xr.addEventListener('sessionstart', () => this.onSessionStart());
        this.renderer.xr.addEventListener('sessionend', () => this.onSessionEnd());
    }

    onSessionStart() {
        this.isSpawned = false;
        this.hitTestSourceRequested = false;
        this.hitTestSource = null;
        this.contentGroup.visible = false;
        
        this.videos.forEach(v => v.play().catch(e => console.warn(e)));
    }

    onSessionEnd() {
        this.hitTestSource = null;
        this.hitTestSourceRequested = false;
        
        this.videos.forEach(v => v.pause());

        if (this.contentGroup) {
            this.contentGroup.visible = false;
        }
        
        this.isSpawned = false; 
    }

    handleSelect() {
        if (this.container && !this.container.classList.contains('hide')) {
            return;
        }

        const tempMatrix = new THREE.Matrix4();
        tempMatrix.identity().extractRotation(this.controller.matrixWorld);

        const raycaster = new THREE.Raycaster();
        raycaster.ray.origin.setFromMatrixPosition(this.controller.matrixWorld);
        raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);

        const intersects = raycaster.intersectObjects(this.sprites, true);

        if (intersects.length > 0) {
            this.onSelectCallback(intersects[0].object);
        }
    }

    addObjectToScene(object, isVideo = false, videoElement = null) {
        this.contentGroup.add(object);
        this.sprites.push(object);
        if (isVideo && videoElement) {
            this.videos.push(videoElement);
            if (this.renderer.xr.isPresenting) {
                videoElement.play().catch(e => console.warn(e));
            }
        }
    }

    clearScene() {
        while (this.contentGroup.children.length > 0) {
            const child = this.contentGroup.children[0];
            this.contentGroup.remove(child);
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
                if (child.material.map) child.material.map.dispose();
                child.material.dispose();
            }
        }
        this.videos.forEach(v => {
            v.pause();
            v.src = "";
            v.load();
        });
        this.sprites = [];
        this.videos = [];
    }

    render(timestamp, frame) {
        if (frame) {
            const session = this.renderer.xr.getSession();

            if (!this.hitTestSourceRequested) {
                session.requestReferenceSpace('viewer').then((refSpace) => {
                    session.requestHitTestSource({ space: refSpace }).then((source) => {
                        this.hitTestSource = source;
                    });
                });
                this.hitTestSourceRequested = true;
            }

            if (this.hitTestSource && !this.isSpawned) {
                const hitTestResults = frame.getHitTestResults(this.hitTestSource);
                if (hitTestResults.length > 0) {
                    const hit = hitTestResults[0];
                    const referenceSpace = this.renderer.xr.getReferenceSpace();
                    const hitPose = hit.getPose(referenceSpace);

                    this.contentGroup.position.copy(hitPose.transform.position);
                    
                    const cameraPos = new THREE.Vector3();
                    this.camera.getWorldPosition(cameraPos);
                    this.contentGroup.lookAt(cameraPos.x, this.contentGroup.position.y, cameraPos.z);

                    this.contentGroup.visible = true;
                    this.isSpawned = true;
                    
                    // this.hitTestSource.cancel(); 
                    // this.hitTestSource = null;
                }
            }
        }

        if (this.sprites.length > 0) {
            const cameraPos = new THREE.Vector3();
            this.camera.getWorldPosition(cameraPos);
            this.sprites.forEach(sprite => {
                sprite.lookAt(cameraPos.x, sprite.position.y, cameraPos.z);
            });
        }

        this.renderer.render(this.scene, this.camera);
    }
    
    exitAR() {
        const session = this.renderer.xr.getSession();
        if (session) session.end();
    }
}