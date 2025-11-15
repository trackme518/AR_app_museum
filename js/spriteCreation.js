import * as THREE from 'https://unpkg.com/three/build/three.module.js';

export function createSprite(material, width = 1, height = 1) {
	const geometry = new THREE.PlaneGeometry(width, height);
	const sprite = new THREE.Mesh(geometry, material);
	sprite.position.set(0, 0, -2);
	return sprite;
}

export function createVideoTexture(mediaPath) {
	const video = document.createElement('video');
	video.src = mediaPath;
	video.crossOrigin = 'anonymous';
	video.loop = true;
	video.muted = true;
	video.play();

	const videoTexture = new THREE.VideoTexture(video);
	videoTexture.minFilter = THREE.LinearFilter;
	videoTexture.magFilter = THREE.LinearFilter;
	videoTexture.format = THREE.RGBAFormat;

	const material = new THREE.MeshBasicMaterial({
		map: videoTexture,
		transparent: true,
		side: THREE.DoubleSide,
	});

	return {video, material};
}

export function createImageTexture(mediaPath) {
	const textureLoader = new THREE.TextureLoader();
	const texture = textureLoader.load(mediaPath);

	const material = new THREE.MeshBasicMaterial({
		map: texture,
		transparent: true,
		side: THREE.DoubleSide
	});

	return material;
}