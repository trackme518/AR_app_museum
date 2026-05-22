import { THREE, GLTFLoader } from './three-bundle.js';

// Creates an invisible HTML video element and binds it to a WebGL texture
export function createVideoTexture(mediaPath) {
    const video = document.createElement('video');
    video.src = mediaPath;
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('webkit-playsinline', 'webkit-playsinline');

    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBAFormat;

    const material = new THREE.MeshBasicMaterial({
        map: videoTexture,
        transparent: true,
        side: THREE.DoubleSide
    });

    return { video, material };
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