import { THREE, GLTFLoader } from './three-bundle.js?v=20260821-ar-session-fix';

const GS_LOG = 'greenscreen';

// Creates an invisible HTML video element and binds it to a WebGL texture.
// When greenscreen is true the green background is chroma-keyed to transparent
// in an explicit shader. Avoid onBeforeCompile here: its shader-chunk replacement
// is Three.js-version-dependent and was not reliable in Android WebXR.
export function createVideoTexture(mediaPath, loop = true, greenscreen = false) {
    const video = document.createElement('video');
    video.src = mediaPath;
    video.crossOrigin = 'anonymous';
    video.loop = loop;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('webkit-playsinline', 'webkit-playsinline');

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isWebM = mediaPath.toLowerCase().includes('.webm');
    const supportsAlpha = !isIOS || !isWebM;

    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBAFormat;

    let material;

    if (greenscreen) {
        console.log(`[${GS_LOG}] Creating greenscreen material for ${mediaPath}`);
        material = new THREE.ShaderMaterial({
            uniforms: {
                videoMap: { value: videoTexture },
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform sampler2D videoMap;
                varying vec2 vUv;

                void main() {
                    vec4 pixel = texture2D(videoMap, vUv);
                    vec3 fg = pixel.rgb;

                    float maxrb = max(fg.r, fg.b);
                    float k = clamp((fg.g - maxrb) * 5.0, 0.0, 1.0);

                    // Method 2: remove green spill while retaining brightness.
                    float dg = fg.g;
                    fg.g = min(fg.g, maxrb * 0.8);
                    fg += vec3(dg - fg.g);

                    // Shadertoy mixes with a background texture. In WebXR the
                    // compositor supplies that background, so alpha=1-k produces
                    // the equivalent composition through normal alpha blending.
                    float alpha = pixel.a * (1.0 - k);
                    if (alpha < 0.01) discard;
                    gl_FragColor = vec4(fg, alpha);
                }
            `,
            transparent: true,
            side: THREE.DoubleSide,
            depthWrite: false,
        });
        material.userData.setVideoTexture = (texture) => {
            material.uniforms.videoMap.value = texture;
        };
    } else {
        material = new THREE.MeshBasicMaterial({
            map: videoTexture,
            transparent: supportsAlpha,
            side: THREE.DoubleSide,
            color: supportsAlpha ? 0xffffff : 0x333333
        });
    }

    video.addEventListener('loadedmetadata', () => { console.log(`[${GS_LOG}] loadedmetadata w=${video.videoWidth} h=${video.videoHeight}`); videoTexture.needsUpdate = true; });
    video.addEventListener('loadeddata', () => { console.log(`[${GS_LOG}] loadeddata`); videoTexture.needsUpdate = true; });
    video.addEventListener('playing', () => { console.log(`[${GS_LOG}] playing`); videoTexture.needsUpdate = true; });
    video.addEventListener('play', () => { console.log(`[${GS_LOG}] play event`); });
    video.addEventListener('pause', () => { console.log(`[${GS_LOG}] pause`); });
    video.addEventListener('error', (e) => { console.error(`[${GS_LOG}] video error`, e.target.error); });

    videoTexture.needsUpdate = true;

    if (isIOS && isWebM && !greenscreen) {
        console.warn('iOS Safari does not support WebM with alpha. Video may appear opaque.');
    }

    return { video, texture: videoTexture, material };
}

// Loads a static image and returns a transparent material
export function createImageTexture(mediaPath) {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(
        mediaPath,
        undefined, 
        undefined, 
        (err) => console.error(`Failed to load texture: ${mediaPath}`, err)
    );
    texture.colorSpace = THREE.SRGBColorSpace; 

    return new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide
    });
}

// Generates a simple 2D plane geometry to apply image/video textures onto
export function createCharacterMesh(material, width = 1, height = 1) {
    const geometry = new THREE.PlaneGeometry(width, height);
    return new THREE.Mesh(geometry, material);
}

// Wrapper for GLTFLoader to enable modern async/await syntax usage
export function loadGLTFModel(mediaPath) {
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();
        loader.load(
            mediaPath,
            (gltf) => resolve(gltf),
            undefined,
            (error) => reject(error)
        );
    });
}
