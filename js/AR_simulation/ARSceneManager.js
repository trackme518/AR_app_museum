import { THREE, ARButton } from './three-bundle.js';
import { t } from '../localization.js';

export class ARSceneManager {
    constructor(containerElement, onSelectCallback) {
        this.container = containerElement;
        this.onSelectCallback = onSelectCallback;
        
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.controller = null;
        this.hitTestSource = null;
        this.hitTestPose = null;
        this.referenceSpace = null;
        this.sessionSelectHandler = null;

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

        // Android Chrome and compatible iOS WebXR viewers expose the same API.
        const sessionOptions = {
            // Marker-based placement requires image tracking to be enabled.
            requiredFeatures: ['image-tracking'],
            optionalFeatures: ['dom-overlay', 'hit-test', 'anchors'],
            domOverlay: { root: document.body },
        };
        if (trackedImages.length > 0) sessionOptions.trackedImages = trackedImages;
        const arBtn = ARButton.createButton(this.renderer, sessionOptions);
        this.hookSessionFailures();

        // Three.js sets inline positioning (absolute, bottom-centered on the
        // whole page) and its own English label updates. Drop the inline
        // styles so the CSS controls placement, and mount the button inside
        // the selection card, centered below the version selector.
        arBtn.style.cssText = '';
        arBtn.dataset.i18n = 'ar.start';

        // The bundled ARButton rewrites its textContent (hardcoded English)
        // whenever the session state changes. Re-apply the translation after
        // every such mutation.
        const applyLabel = () => {
            const label = t(arBtn.dataset.i18n || 'ar.start');
            if (arBtn.textContent !== label) arBtn.textContent = label;
        };
        new MutationObserver(applyLabel).observe(arBtn, {
            childList: true,
            characterData: true,
            subtree: true,
        });

        const wrapper = document.getElementById('scenario-select-wrapper');
        (wrapper ?? document.body).appendChild(arBtn);
        arBtn.addEventListener('click', () => this.clearSessionError());
        applyLabel();
    }

    // The bundled ARButton reports failed requestSession() calls through a
    // raw English window.alert. While a session request is in flight the
    // alert is swapped for a localized message. Denied permissions also get
    // a reload action, because browsers will not prompt again until the
    // page is reloaded (there is no API to re-request a denied permission).
    hookSessionFailures() {
        if (ARSceneManager.sessionFailureHooked || !navigator.xr) return;
        ARSceneManager.sessionFailureHooked = true;
        const requestSession = navigator.xr.requestSession.bind(navigator.xr);
        const nativeAlert = window.alert.bind(window);
        const notify = (message) => this.showSessionError(message);
        navigator.xr.requestSession = (mode, options) => {
            let active = true;
            window.alert = (message) => {
                if (active) notify(message);
                else nativeAlert(message);
            };
            return requestSession(mode, options).finally(() => {
                active = false;
                window.alert = nativeAlert;
            });
        };
    }

    clearSessionError() {
        document.getElementById('ar-session-error')?.remove();
    }

    showSessionError(message) {
        const wrapper = document.getElementById('scenario-select-wrapper');
        if (!wrapper) return;
        this.clearSessionError();
        const box = document.createElement('div');
        box.id = 'ar-session-error';
        box.setAttribute('role', 'alert');
        const text = document.createElement('p');
        text.textContent = /not allowed|denied/i.test(message)
            ? t('ar.permissionDenied')
            : message;
        const retry = document.createElement('button');
        retry.dataset.i18n = 'ar.start';
        retry.textContent = t('ar.start');
        retry.addEventListener('click', () => window.location.reload());
        box.append(text, retry);
        wrapper.appendChild(box);
    }

    async onSessionStart() {
        queueMicrotask(() => {
            const button = document.getElementById('ARButton');
            if (button) {
                button.dataset.i18n = 'ar.stop';
                button.textContent = t('ar.stop');
            }
        });
        const session = this.renderer.xr.getSession();
        this.sessionSelectHandler = (event) => this.handleSelect(event.frame);
        session.addEventListener('select', this.sessionSelectHandler);
        this.referenceSpace = this.renderer.xr.getReferenceSpace();
        this.referenceSpace?.addEventListener('reset', () => this.resetPlacements(), { once: true });
        try {
            const viewerSpace = await session.requestReferenceSpace('viewer');
            this.hitTestSource = await session.requestHitTestSource({ space: viewerSpace });
        } catch (error) {
            // Marker placement can still work when this runtime lacks hit testing.
            console.warn('Surface hit testing is unavailable:', error);
        }

        // Resume all background media when entering AR
        this.videos.forEach((video) => {
            if (video.dataset.videoState === 'idle') {
                video.play().catch(e => console.warn(e));
            } else {
                video.pause();
            }
        });

    }

    onSessionEnd() {
        queueMicrotask(() => {
            const button = document.getElementById('ARButton');
            if (button) {
                button.dataset.i18n = 'ar.start';
                button.textContent = t('ar.start');
            }
        });
        // Ending/resetting the session means its world coordinate system is lost.
        this.videos.forEach(v => v.pause());
        this.hitTestSource?.cancel();
        this.hitTestSource = null;
        this.hitTestPose = null;
        this.sessionSelectHandler = null;
        this.referenceSpace = null;
        this.resetPlacements();
    }

    handleSelect(frame) {
        // Abort selection if UI is locked
        if (!this.isSelectionEnabled) return;

        const validCharacterObject = this.performRaycast();
        
        if (validCharacterObject) {
            this.onSelectCallback(validCharacterObject);
        } else if (this.hitTestPose) {
            const markerlessGroup = this.anchorGroups.find((group) =>
                group.userData.markerIndex === null && !group.userData.placed
            );
            if (markerlessGroup) {
                let hitResult = null;
                if (frame && this.hitTestSource) {
                    hitResult = frame.getHitTestResults(this.hitTestSource)[0] ?? null;
                }
                const currentPose = hitResult?.getPose(this.renderer.xr.getReferenceSpace());
                const pose = (currentPose ?? this.hitTestPose).transform;
                markerlessGroup.position.copy(pose.position);
                markerlessGroup.quaternion.copy(pose.orientation);
                markerlessGroup.visible = true;
                markerlessGroup.userData.placed = true;

                // A hit-test anchor remains attached to the detected physical
                // surface as ARCore refines its world map.
                if (hitResult && typeof hitResult.createAnchor === 'function') {
                    this.createSpatialAnchor(markerlessGroup, () => hitResult.createAnchor());
                }
            }
        }
    }

    performRaycast() {
        // Selection can arrive between frames, after a pose or animation update.
        this.controller.updateWorldMatrix(true, false);
        // Calculate raycast direction based on controller orientation
        const tempMatrix = new THREE.Matrix4();
        tempMatrix.identity().extractRotation(this.controller.matrixWorld);
        
        const raycaster = new THREE.Raycaster();
        raycaster.ray.origin.setFromMatrixPosition(this.controller.matrixWorld);
        raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);

        // Intersect only with currently visible tracking groups
        const visibleGroups = this.anchorGroups.filter(g => g.visible);
        visibleGroups.forEach((group) => {
            group.updateMatrixWorld(true);
            group.traverse((object) => {
                if (!object.isSkinnedMesh) return;
                // Both bounds are cached by this Three.js version. Placement
                // measures them before animation, so refresh before testing taps.
                object.computeBoundingBox();
                object.computeBoundingSphere();
            });
        });
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

    addObjectToScene(anchorGroup, markerIndex, isVideo = false, videoElements = []) {
        // Register object invisibly and map it to specific image marker
        anchorGroup.visible = false;
        anchorGroup.userData.markerIndex = markerIndex;
        anchorGroup.userData.isBillboard = isVideo;
        anchorGroup.userData.placed = false;
        anchorGroup.userData.anchor = null;
        anchorGroup.userData.anchorPending = false;
        anchorGroup.userData.anchorFailed = false;
        anchorGroup.userData.anchorGeneration = 0;
        this.scene.add(anchorGroup);
        this.anchorGroups.push(anchorGroup);
        
        if (isVideo) {
            this.videos.push(...(Array.isArray(videoElements) ? videoElements : [videoElements]).filter(Boolean));
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
            this.updateHitTest(frame);
            this.updateAnchors(frame);
            if (typeof frame.getImageTrackingResults === 'function') {
                this.updateImageTracking(frame);
            }
            this.updateBillboards(frame);
        }

        this.renderer.render(this.scene, this.camera);
    }

    updateImageTracking(frame) {
        const results = frame.getImageTrackingResults();
        const referenceSpace = this.renderer.xr.getReferenceSpace();

        for (const result of results) {
            const anchorGroup = this.anchorGroups.find(g => g.userData.markerIndex === result.index);
            if (!anchorGroup) continue;

            // Once created, the spatial anchor owns the character transform.
            if (anchorGroup.userData.anchor) continue;

            const isTracked = result.trackingState === 'tracked';
            const isEmulated = result.trackingState === 'emulated';

            // Never reveal a character from an estimated pose before its marker
            // has actually been recognized. Once recognized, WebXR can keep the
            // imageSpace pose in the world reference space while the marker is
            // outside the camera view. Some runtimes report that as `emulated`;
            // others temporarily omit the result, in which case the last pose
            // already stored on the Three.js group remains valid and visible.
            if (!isTracked && !(isEmulated && anchorGroup.userData.placed)) continue;

            const pose = frame.getPose(result.imageSpace, referenceSpace);
            if (!pose) continue;

            anchorGroup.position.copy(pose.transform.position);
            anchorGroup.quaternion.copy(pose.transform.orientation);
            anchorGroup.visible = true;
            anchorGroup.userData.placed = true;
            anchorGroup.userData.trackingState = result.trackingState;

            // Create the anchor only from a real marker observation, never from
            // an emulated pose. Continue displaying the image pose while the
            // asynchronous anchor request is pending or unsupported.
            if (isTracked
                && !anchorGroup.userData.anchorPending
                && !anchorGroup.userData.anchorFailed
                && typeof frame.createAnchor === 'function') {
                this.createSpatialAnchor(
                    anchorGroup,
                    () => frame.createAnchor(pose.transform, referenceSpace)
                );
            }
        }
    }

    createSpatialAnchor(group, createAnchor) {
        group.userData.anchorPending = true;
        const generation = group.userData.anchorGeneration;
        let anchorPromise;
        try {
            anchorPromise = createAnchor();
        } catch (error) {
            group.userData.anchorPending = false;
            group.userData.anchorFailed = true;
            console.warn('Spatial anchor creation is unavailable; retaining reference-space placement:', error);
            return;
        }
        Promise.resolve(anchorPromise).then((anchor) => {
            if (group.userData.anchorGeneration !== generation) {
                anchor.delete?.();
                return;
            }
            group.userData.anchorPending = false;
            group.userData.anchor = anchor;
        }).catch((error) => {
            if (group.userData.anchorGeneration !== generation) return;
            group.userData.anchorPending = false;
            group.userData.anchorFailed = true;
            console.warn('Spatial anchor creation failed; retaining reference-space placement:', error);
        });
    }

    updateAnchors(frame) {
        const referenceSpace = this.renderer.xr.getReferenceSpace();
        this.anchorGroups.forEach((group) => {
            const anchor = group.userData.anchor;
            if (!anchor) return;
            const pose = frame.getPose(anchor.anchorSpace, referenceSpace);
            if (!pose) return;
            group.position.copy(pose.transform.position);
            group.quaternion.copy(pose.transform.orientation);
            group.visible = true;
        });
    }

    updateHitTest(frame) {
        if (!this.hitTestSource) return;
        const results = frame.getHitTestResults(this.hitTestSource);
        this.hitTestPose = results.length > 0
            ? results[0].getPose(this.renderer.xr.getReferenceSpace())
            : null;
    }

    resetPlacements() {
        this.anchorGroups.forEach((group) => {
            group.userData.anchorGeneration++;
            group.userData.anchor?.delete?.();
            group.userData.anchor = null;
            group.userData.anchorPending = false;
            group.userData.anchorFailed = false;
            group.visible = false;
            group.userData.placed = false;
        });
    }

    updateBillboards(frame) {
        const referenceSpace = this.renderer.xr.getReferenceSpace();
        const viewerPose = frame.getViewerPose(referenceSpace);
        if (!viewerPose) return;

        const cameraPosition = new THREE.Vector3(
            viewerPose.transform.position.x,
            viewerPose.transform.position.y,
            viewerPose.transform.position.z
        );
        this.anchorGroups.forEach((group) => {
            if (!group.visible || !group.userData.isBillboard || group.children.length === 0) return;
            const character = group.children[0];
            if (group.userData.billboardMode !== 'local-yaw') return;

            // Work in the marker's coordinates so the billboard inherits exactly
            // the same tracked pose as a model. Its only difference is a local-Y
            // yaw toward the viewer (classic Doom-style cylindrical billboard).
            group.updateWorldMatrix(true, false);
            const localCamera = group.worldToLocal(cameraPosition.clone());
            const baseRotation = group.userData.billboardBaseRotation;
            localCamera.applyQuaternion(baseRotation.clone().invert());
            const yaw = Math.atan2(localCamera.x, localCamera.z);
            character.quaternion.copy(baseRotation);
            character.rotateY(yaw);
        });
    }

    clearScene() {
        // Safely dispose all materials and geometries to prevent memory leaks
        this.anchorGroups.forEach(group => {
            group.userData.anchorGeneration++;
            group.userData.anchor?.delete?.();
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
