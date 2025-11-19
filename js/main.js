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


//const onSelect = createSelectHandler(renderer.xr.getController(0), sprite, openChat);
//const controller = setupController(renderer, scene, onSelect);

renderer.xr.addEventListener('sessionstart', () => {
	//video.play();
	scenarioSelect.classList.add('hide');
	headerNavBar.classList.add('hide');
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
	currentCharacterSprites = [];
}

// rozšířená verze fetch: načte metadata a pro každou postavu s typeOfMedia 'photo' vytvoří sprite
async function fetchScenarioAndSpawnPhotos(id) {
	const data = await fetchScenarioDetails(id);
	if (!data) return null;

	// odstraníme staré sprity
	await clearCurrentCharacterSprites();

	const chars = Array.isArray(data.characters) ? data.characters : [];
	const photoChars = chars.filter(c => c.typeOfMedia && typeof c.typeOfMedia === 'string' && c.typeOfMedia.toLowerCase().includes('photo'));
	if (photoChars.length === 0) return data;

	const spacing = 0.8;
	const center = (photoChars.length - 1) / 2;

	photoChars.forEach((ch, idx) => {
		const mediaPath = ch.media;
		if (!mediaPath) return;

		try {
			const material = createImageTexture(mediaPath);
			const spr = createSprite(material);
			// position them in a row in front of the camera
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

	// prefetchnout + spawn aktuální výběr při načtení stránky (volitelné)
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
