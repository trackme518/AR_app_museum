import * as THREE from 'https://unpkg.com/three/build/three.module.js';

export function setupController(renderer, scene, onSelect) {
	const controller = renderer.xr.getController(0);
	scene.add(controller);

	controller.addEventListener('select', onSelect);

	return controller;
}

export function createSelectHandler(controller, sprite, openChat) {
	const raycaster = new THREE.Raycaster();
	const tempMatrix = new THREE.Matrix4();

	return function onSelect() {
		tempMatrix.identity().extractRotation(controller.matrixWorld);

		raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
		raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);

		const intersects = raycaster.intersectObject(sprite);

		if (intersects.length > 0) {
		openChat();
		}
	};
}
