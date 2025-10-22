import * as THREE from 'https://unpkg.com/three/build/three.module.js';

export function createSceneAndCamera() {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    scene.add(camera);

    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    return {scene, camera};
}