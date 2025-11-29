import * as THREE from 'https://unpkg.com/three/build/three.module.js';

export function setupController(renderer, scene, onSelect) {
	const controller = renderer.xr.getController(0);
	scene.add(controller);

	controller.addEventListener('select', onSelect);

	return controller;
}

export function createSelectHandler(controller, getSprites, onSelect) {
	const raycaster = new THREE.Raycaster();
	const tempMatrix = new THREE.Matrix4();

	return function onSelectEvent() {
		const sprites = typeof getSprites === 'function' ? getSprites() : [];
		if (!sprites || sprites.length === 0) return;

		tempMatrix.identity().extractRotation(controller.matrixWorld);

		raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
		raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);

		const intersects = raycaster.intersectObjects(sprites, true);

		if (intersects.length > 0) {
			const hit = intersects[0].object;
			try {
				if (typeof onSelect === 'function') onSelect(hit);
			} catch (e) {
				console.error('onSelect callback error', e);
			}
		}
	};
}
