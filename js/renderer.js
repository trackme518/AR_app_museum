import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { ARButton } from 'https://unpkg.com/three/examples/jsm/webxr/ARButton.js';

export function createRenderer(chatContainer) {
	const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.xr.enabled = true;
	document.body.appendChild(renderer.domElement);

	const arButton = ARButton.createButton(renderer, {
		requiredFeatures: ['hit-test', 'dom-overlay'],
		domOverlay: { root: chatContainer.parentElement },
	});
	document.body.appendChild(arButton);

	return renderer;
}

export function handleResize(camera, renderer) {
	window.addEventListener('resize', () => {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}, false);
}
