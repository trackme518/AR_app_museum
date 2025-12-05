import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { createSceneAndCamera } from './sceneSetup.js';
import { createSprite, createImageTexture, createVideoTexture } from './spriteCreation.js';
import { createRenderer, handleResize } from './renderer.js';
import { setupController, createSelectHandler } from './controller.js';
import { openChat, sendPrompt } from './chatBot.js';

const scenarioSelect = document.getElementById("scenario_select");
const selectedScenario = document.getElementById("scenario");
const chatContainer = document.getElementById("AI_container");
const AISubmitBtn = document.getElementById("AI_submit_btn");
const headerNavBar = document.getElementById("header_nav_bar");
const closeAIDiv = document.getElementById("hide_AI_btn");

function closeAIDivFnc(){
	chatContainer.classList.add('hide');
}

closeAIDiv.addEventListener('click', closeAIDivFnc);

const {scene, camera} = createSceneAndCamera();

const renderer = createRenderer(chatContainer);

handleResize(camera, renderer);


// set up controller once and use a dynamic select handler that checks current sprites
const controllerRef = renderer.xr.getController(0);
const onSelect = createSelectHandler(controllerRef, () => currentCharacterSprites, (hitSprite) => {
	if (!hitSprite) return;

	const data = hitSprite.userData;
	openChat(data);
	try {
		window.selectedSpriteContext = hitSprite && hitSprite.userData ? hitSprite.userData : undefined;
	} catch (e) {
		console.error('setting selectedSpriteContext error', e);
	}
});
const controller = setupController(renderer, scene, onSelect);

renderer.xr.addEventListener('sessionstart', () => {
	for (const v of currentCharacterVideos) {
		if (v && typeof v.play === 'function') {
			v.play().catch(err => console.warn('Video play failed on sessionstart', err));
		}
	}
	scenarioSelect.classList.add('hide');
	headerNavBar.classList.add('hide');
});

renderer.xr.addEventListener('sessionend', () => {
	// pause any playing character videos when session ends
	for (const v of currentCharacterVideos) {
		try {
			if (v && typeof v.pause === 'function') v.pause();
			if (v && v.tagName === 'VIDEO') {
				v.removeAttribute('src');
				try { v.load(); } catch (e) {}
			}
		} catch (e) {
			console.warn('Error stopping video on sessionend', e);
		}
	}
	scenarioSelect.classList.remove('hide');
	headerNavBar.classList.remove('hide');
});

async function fetchScenarioDetails(id) {
	try {
		const res = await fetch(`/php/save_scenario.php?action=getScenarioDetails&id=${encodeURIComponent(id)}`);
		if (!res.ok) throw new Error('Network response was not ok: ' + res.status);
		const data = await res.json();
		console.log('Scenario details loaded for id=' + id + ':', data);
		return data;
	} catch (err) {
		console.error('Failed to fetch scenario details for id=' + id + ':', err);
		return null;
	}
}

let currentCharacterSprites = [];
let currentCharacterVideos = [];

async function clearCurrentCharacterSprites() {
	for (const s of currentCharacterSprites) {
		try {
			scene.remove(s);
			if (s.material) {
				if (s.material.map) s.material.map.dispose();
				s.material.dispose();
			}
			if (s.geometry) s.geometry.dispose();
		} catch (e) {
			console.warn('Error disposing sprite', e);
		}
	}
	for (const v of currentCharacterVideos) {
		try {
			if (v && typeof v.pause === 'function') v.pause();
			if (v && v.tagName === 'VIDEO') {
				v.removeAttribute('src');
				try { v.load(); } catch (e) {}
			}
		} catch (e) {
			console.warn('Error disposing video element', e);
		}
	}

	currentCharacterSprites = [];
	currentCharacterVideos = [];
}

async function fetchScenarioAndSpawnPhotos(id) {
	const data = await fetchScenarioDetails(id);
	if (!data) return null;

	await clearCurrentCharacterSprites();

	const chars = Array.isArray(data.characters) ? data.characters : [];
	const mediaChars = chars.filter(c => c.typeOfMedia && typeof c.typeOfMedia === 'string' && (c.typeOfMedia.toLowerCase().includes('photo') || c.typeOfMedia.toLowerCase().includes('video')));
	if (mediaChars.length === 0) return data;

	const spacing = 2.2;
	const center = (mediaChars.length - 1) / 2;

    mediaChars.forEach((ch, idx) => {
		const mediaPath = ch.media;
		if (!mediaPath) return;

		try {
			let material;
			if (ch.typeOfMedia && ch.typeOfMedia.toLowerCase().includes('video')) {
				const {video, material: vidMat} = createVideoTexture(mediaPath);
				material = vidMat;
				if (video) currentCharacterVideos.push(video);
				if (renderer.xr && renderer.xr.getSession && renderer.xr.getSession()) {
					video.play().catch(err => console.warn('Video play failed (immediate)', err));
				}
			} else {
				material = createImageTexture(mediaPath);
			}
			const spr = createSprite(material);
			const x = (idx - center) * spacing;
			spr.position.set(x, 0.9, -1.8);

			spr.userData = {
				id: ch.id,
				name: ch.name,
				description: ch.description,
				introduction: ch.intro
			}

			scene.add(spr);
			currentCharacterSprites.push(spr);
		} catch (e) {
			console.error('Failed to create sprite for character', ch, e);
		}
	});

	return data;
}

if (scenarioSelect) {
	scenarioSelect.addEventListener('change', () => {
		const id = scenarioSelect.value || selectedScenario?.value;
		if (!id) {
			console.warn('No scenario id selected');
			return;
		}
		fetchScenarioAndSpawnPhotos(id).catch(err => console.error(err));
	});

	const initialId = scenarioSelect.value || selectedScenario?.value;
	if (initialId) fetchScenarioAndSpawnPhotos(initialId).catch(() => {});
}

if (AISubmitBtn) {

	AISubmitBtn.addEventListener('click', () => {
		try {
			sendPrompt();
		} catch (e) {
			console.error('Error calling sendPrompt from AISubmitBtn', e);
		}
	});
}

function render() {
	for (const spr of currentCharacterSprites) {
		spr.lookAt(camera.position);
	}
	renderer.render(scene, camera);
}

renderer.setAnimationLoop(render);
