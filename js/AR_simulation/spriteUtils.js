import { THREE } from './three-bundle.js';

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
        side: THREE.DoubleSide,
    });

    return { video, material };
}

export function createImageTexture(mediaPath) {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(mediaPath);
    texture.colorSpace = THREE.SRGBColorSpace; 

    return new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide
    });
}

export function createSprite(material, width = 1, height = 1) {
    const geometry = new THREE.PlaneGeometry(width, height);
    const sprite = new THREE.Mesh(geometry, material);
    sprite.position.set(0, 0, -2);
    return sprite;
}