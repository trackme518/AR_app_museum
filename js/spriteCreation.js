import * as THREE from 'https://unpkg.com/three/build/three.module.js';

export function createSprite(material) {
	const geometry = new THREE.PlaneGeometry(1, 1);
	const sprite = new THREE.Mesh(geometry, material);
	sprite.position.set(0, 0, -2);
	return sprite;
}

export function createVideoTexture() {
	const video = document.createElement('video');
	video.src = '../resources/output.webm';
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

export function createImageTexture() {
	const textureLoader = new THREE.TextureLoader();
	const texture = textureLoader.load('../resources/billboard.jpeg');

	const material = new THREE.MeshBasicMaterial({
		map: texture,
		transparent: true,
		side: THREE.DoubleSide
	});

	return material;
}