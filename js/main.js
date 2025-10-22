import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { createSceneAndCamera } from './sceneSetup.js';
import { createSprite, createImageTexture } from './spriteCreation.js';
import { createRenderer, handleResize } from './renderer.js';
import { setupController, createSelectHandler } from './controller.js';
import { openChat, sendPrompt } from './chatBot.js';

const chatContainer = document.getElementById("AI_container");

const {scene, camera} = createSceneAndCamera();

const material = createImageTexture();

const sprite = createSprite(material);
scene.add(sprite);

const renderer = createRenderer(chatContainer);

handleResize(camera, renderer);


const onSelect = createSelectHandler(renderer.xr.getController(0), sprite, openChat);
const controller = setupController(renderer, scene, onSelect);

// uncomment when using video texture
/*renderer.xr.addEventListener('sessionstart', () => {
	video.play();
});*/

document.getElementById('AI_submit_btn').addEventListener('click', sendPrompt);

function render() {
	sprite.lookAt(camera.position);
	renderer.render(scene, camera);
}

renderer.setAnimationLoop(render);
