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


const {scene, camera} = createSceneAndCamera();

const renderer = createRenderer(chatContainer);

handleResize(camera, renderer);


// set up controller once and use a dynamic select handler that checks current sprites
const controllerRef = renderer.xr.getController(0);
const onSelect = createSelectHandler(controllerRef, () => currentCharacterSprites, (hitSprite) => {
	// Open chat for the selected sprite. If you want to pass data, store it on sprite.userData
	openChat();
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
			// optionally clear src so it stops network usage
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

//AISubmitBtn.addEventListener('click', sendPrompt);

/* new functions */
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
	// stop and cleanup any created video elements
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
	// include characters with photo or video media types
	const mediaChars = chars.filter(c => c.typeOfMedia && typeof c.typeOfMedia === 'string' && (c.typeOfMedia.toLowerCase().includes('photo') || c.typeOfMedia.toLowerCase().includes('video')));
	if (mediaChars.length === 0) return data;

	const spacing = 0.8;
	const center = (mediaChars.length - 1) / 2;

    mediaChars.forEach((ch, idx) => {
		const mediaPath = ch.media;
		if (!mediaPath) return;

		try {
			let material;
			// if video, create video texture (do not autoplay here)
			if (ch.typeOfMedia && ch.typeOfMedia.toLowerCase().includes('video')) {
				const {video, material: vidMat} = createVideoTexture(mediaPath);
				material = vidMat;
				// keep reference to video so we can play it on sessionstart and cleanup later
				if (video) currentCharacterVideos.push(video);
				// if XR session already running, start playback immediately
				if (renderer.xr && renderer.xr.getSession && renderer.xr.getSession()) {
					video.play().catch(err => console.warn('Video play failed (immediate)', err));
				}
			} else {
				material = createImageTexture(mediaPath);
			}
			const spr = createSprite(material);
			const x = (idx - center) * spacing;
			spr.position.set(x, 1.5, -2);
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

/* end new functions */

function render() {
	for (const spr of currentCharacterSprites) {
		spr.lookAt(camera.position);
	}
	renderer.render(scene, camera);
}

renderer.setAnimationLoop(render);
