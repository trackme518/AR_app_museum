import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { ARButton } from 'https://unpkg.com/three/examples/jsm/webxr/ARButton.js';

const scenarioSelect = document.getElementById("scenario_select");
const selectedScenario = document.getElementById("scenario");
const chatContainer = document.getElementById("AI_container");
const AISubmitBtn = document.getElementById("AI_submit_btn");
const headerNavBar = document.getElementById("header_nav_bar");
const closeAIDiv = document.getElementById("hide_AI_btn");
const exitARBtn = document.getElementById("exit_AR_btn");
const ARDiv = document.getElementById("AR_container")

// scene setup
const {scene, camera} = createSceneAndCamera();
const renderer = createRenderer(chatContainer);
handleResize(camera, renderer);

let currentCharacterSprites = [];
let currentCharacterVideos = [];
let timeout = 5000;
const targetScale = 0.6;
const minSpacing = 0.8;

let scenarioCharactersData = []; 
let nextCharacterIndex = 0;      
let spawnTimer = null;           

let contentGroup = new THREE.Group();
scene.add(contentGroup);
contentGroup.visible = false; 

let hasSpawned = false; 
let hitTestSource = null;
let hitTestSourceRequested = false;

/* IMPORTED FUNCTIONS TO REFACTOR */

function setupController(renderer, scene, onSelect) {
	const controller = renderer.xr.getController(0);
	scene.add(controller);

	controller.addEventListener('select', onSelect);

	return controller;
}

function createSelectHandler(controller, getSprites, onSelect) {
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

function createSceneAndCamera() {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    scene.add(camera);

    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    return {scene, camera};
}

function createSprite(material, width = 1, height = 1) {
	const geometry = new THREE.PlaneGeometry(width, height);
	const sprite = new THREE.Mesh(geometry, material);
	sprite.position.set(0, 0, -2);
	return sprite;
}

function createVideoTexture(mediaPath) {
	const video = document.createElement('video');
	video.src = mediaPath;
	video.crossOrigin = 'anonymous';
	video.loop = true;
	video.muted = true;

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

function createImageTexture(mediaPath) {
	const textureLoader = new THREE.TextureLoader();
	const texture = textureLoader.load(mediaPath);

	const material = new THREE.MeshBasicMaterial({
		map: texture,
		transparent: true,
		side: THREE.DoubleSide
	});

	return material;
}

function createRenderer(chatContainer) {
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

function handleResize(camera, renderer) {
	window.addEventListener('resize', () => {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}, false);
}

function openChat(data) {
    const container = document.getElementById("AI_container");
    const output = document.getElementById('AI_response');
    if (!container || !output) return;

    container.classList.remove('hide');

    if (data && data.introduction) {
        window.systemPrompt = data.description;
        const text = typeof data.introduction === 'string' ? data.introduction : String(data.introduction ?? '');
        typewriterEffect(output, text, 25);
    }
}

let _currentTypewriterToken = null;

function typewriterEffect(element, text, speed = 25) {
    if (!element) return null;

    if (_currentTypewriterToken) _currentTypewriterToken.abort = true;

    const token = { abort: false };
    _currentTypewriterToken = token;

    (async () => {
        element.textContent = '';
        for (let i = 0; i < text.length; i++) {
            if (token.abort) break;
            element.textContent += text.charAt(i);
            await new Promise(r => setTimeout(r, speed));
        }
        if (_currentTypewriterToken === token) _currentTypewriterToken = null;
    })();

    return token;
}

async function sendPrompt() {
    const inputField = document.getElementById("AI_chat_input");
    const submitBtn = document.getElementById("AI_submit_btn");
    const responseBox = document.getElementById("AI_response");
    const originalBtnText = submitBtn.innerText;
    try {
        const prompt = inputField.value.trim();
        if (!prompt) return;
        
        inputField.value = "";
        inputField.disabled = true;
        submitBtn.disabled = true;
        submitBtn.innerText = "Čekejte...";
        submitBtn.classList.add("loading");

        const response = await fetch("/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"            
            },
            body: JSON.stringify({
                model: "local-model",
                messages: [
                    { role: "system", content: window.systemPrompt || "" },
                    { role: "user", content: prompt }
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`LLM error: ${response.status}`);
        }

        const data = await response.json();
        const text = data.choices?.[0]?.message?.content || "[žádná odpověď]";

        typewriterEffect(responseBox, text, 25);
    } catch (err) {
        console.error("Chyba při odesílání požadavku:", err);
        responseBox.innerText = "Nastala chyba při komunikaci s LLM.\n" +
                            "Typ chyby: " + err.name + "\n" +
                            "Zpráva: " + err.message;
    } finally {
        inputField.disabled = false;
        submitBtn.disabled = false;
        submitBtn.innerText = originalBtnText;
        submitBtn.classList.remove("loading");
    }
}


/* END OF IMPORT */


// logic
function exitAR(){
    const session = renderer.xr.getSession();
    if (session){
        session.end();
    }
}

exitARBtn.addEventListener('click', exitAR);

function closeAIDivFnc(){
    chatContainer.classList.add('hide');
    
    if (scenarioCharactersData.length > 0 && nextCharacterIndex < scenarioCharactersData.length) {        
        if (spawnTimer) clearTimeout(spawnTimer);

        spawnTimer = setTimeout(() => {
            spawnNextCharacter();
        }, timeout);
    }
}

if (closeAIDiv) closeAIDiv.addEventListener('click', closeAIDivFnc);


const controllerRef = renderer.xr.getController(0);
const onSelect = createSelectHandler(controllerRef, () => currentCharacterSprites, (hitSprite) => {
    if (!hitSprite) return;

    const data = hitSprite.userData;
    openChat(data);
    
    if (spawnTimer) {
        clearTimeout(spawnTimer);
        spawnTimer = null;
    }

    try {
        window.selectedSpriteContext = hitSprite && hitSprite.userData ? hitSprite.userData : undefined;
    } catch (e) {
        console.error('setting selectedSpriteContext error', e);
    }
});
const controller = setupController(renderer, scene, onSelect);


renderer.xr.addEventListener('sessionstart', () => {
    hasSpawned = false;
    hitTestSourceRequested = false;
    hitTestSource = null;
    contentGroup.visible = false;

    for (const v of currentCharacterVideos) {
        if (v && typeof v.play === 'function') {
            v.play().catch(err => console.warn('Video play failed on sessionstart', err));
        }
    }
    if (scenarioSelect) scenarioSelect.classList.add('hide');
    if (headerNavBar) headerNavBar.classList.add('hide');
    if (exitARBtn) exitARBtn.classList.remove('hide');
});

renderer.xr.addEventListener('sessionend', () => {
    for (const v of currentCharacterVideos) {
        try {
            if (v && typeof v.pause === 'function') v.pause();
            if (v && v.tagName === 'VIDEO') {
                v.removeAttribute('src');
                try { v.load(); } catch (e) {}
            }
        } catch (e) { console.warn(e); }
    }
    
    if (spawnTimer) clearTimeout(spawnTimer);

    hitTestSource = null;
    hitTestSourceRequested = false;

    if (scenarioSelect) scenarioSelect.classList.remove('hide');
    if (headerNavBar) headerNavBar.classList.remove('hide');
    if (exitARBtn) exitARBtn.classList.add('hide');
});


async function fetchScenarioDetails(id) {
    try {
        const res = await fetch(`/php/save_scenario.php?action=getScenarioDetails&id=${encodeURIComponent(id)}`);
        if (!res.ok) throw new Error('Network response was not ok: ' + res.status);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error('Failed to fetch scenario details', err);
        return null;
    }
}


async function clearCurrentCharacterSprites() {
    if (spawnTimer) clearTimeout(spawnTimer);
    
    while (contentGroup.children.length > 0) {
        const child = contentGroup.children[0];
        contentGroup.remove(child);
        if (child.material) {
             if (child.material.map) child.material.map.dispose();
             child.material.dispose();
        }
        if (child.geometry) child.geometry.dispose();
    }

    for (const v of currentCharacterVideos) {
        try { if (v && typeof v.pause === 'function') v.pause(); } catch(e){}
    }

    currentCharacterSprites = [];
    currentCharacterVideos = [];
    scenarioCharactersData = []; 
    nextCharacterIndex = 0;
}

function spawnNextCharacter() {
    if (nextCharacterIndex >= scenarioCharactersData.length) {
        return;
    }

    const ch = scenarioCharactersData[nextCharacterIndex];
    const totalChars = scenarioCharactersData.length;
    
    const center = (totalChars - 1) / 2; 

    const mediaPath = ch.media;
    if (!mediaPath) {
        nextCharacterIndex++;
        spawnNextCharacter(); 
        return;
    }

    try {
        let material;
        if (ch.typeOfMedia && ch.typeOfMedia.toLowerCase().includes('video')) {
            const {video, material: vidMat} = createVideoTexture(mediaPath);
            material = vidMat;
            if (video) currentCharacterVideos.push(video);
            if (renderer.xr.isPresenting) {
                video.play().catch(err => console.warn('Video play failed', err));
            }
        } else {
            material = createImageTexture(mediaPath);
        }
        
        const spr = createSprite(material);
        
        const x = (nextCharacterIndex - center) * minSpacing;

        const yPos = (1.0 * targetScale) / 2;
        
        spr.position.set(x, yPos, 0);

        spr.scale.set(0, 0, 0); 

        spr.userData = {
            id: ch.id,
            name: ch.name,
            description: ch.description,
            introduction: ch.intro
        }

        contentGroup.add(spr);
        currentCharacterSprites.push(spr);
                
        let currentScale = 0;
        function animatePopup() {
            currentScale += 0.05;
            
            if (currentScale > targetScale) currentScale = targetScale;
            
            spr.scale.set(currentScale, currentScale, currentScale);
            
            if (currentScale < targetScale) {
                requestAnimationFrame(animatePopup);
            }
        }
        animatePopup();

        nextCharacterIndex++;

    } catch (e) {
        console.error('Failed to create sprite', e);
    }
}


async function fetchScenarioAndSpawnPhotos(id) {
    const data = await fetchScenarioDetails(id);
    if (!data) return null;

    await clearCurrentCharacterSprites();

    const chars = Array.isArray(data.characters) ? data.characters : [];
    scenarioCharactersData = chars.filter(c => c.typeOfMedia && (c.typeOfMedia.toLowerCase().includes('photo') || c.typeOfMedia.toLowerCase().includes('video')));
    
    if (scenarioCharactersData.length === 0) return data;

    nextCharacterIndex = 0;

    spawnNextCharacter();

    return data;
}


if (scenarioSelect) {
    scenarioSelect.addEventListener('change', () => {
        const id = scenarioSelect.value || selectedScenario?.value;
        if (id) fetchScenarioAndSpawnPhotos(id).catch(err => console.error(err));
    });
    const initialId = scenarioSelect.value || selectedScenario?.value;
    if (initialId) fetchScenarioAndSpawnPhotos(initialId).catch(() => {});
}

if (AISubmitBtn) {
    AISubmitBtn.addEventListener('click', () => {
        try { sendPrompt(); } catch (e) { console.error(e); }
    });
}


function render(timestamp, frame) {
    const session = renderer.xr.getSession();

    if (session && frame) {
        const referenceSpace = renderer.xr.getReferenceSpace();

        if (hitTestSourceRequested === false) {
            session.requestReferenceSpace('viewer').then((refSpace) => {
                session.requestHitTestSource({ space: refSpace }).then((source) => {
                    hitTestSource = source;
                });
            });
            session.addEventListener('end', () => {
                hitTestSourceRequested = false;
                hitTestSource = null;
                hasSpawned = false;
            });
            hitTestSourceRequested = true;
        }

        if (hitTestSource && !hasSpawned) {
            const hitTestResults = frame.getHitTestResults(hitTestSource);

            if (hitTestResults.length > 0) {
                const hit = hitTestResults[0];
                const hitPose = hit.getPose(referenceSpace);

                contentGroup.position.copy(hitPose.transform.position);

                const cameraPos = new THREE.Vector3();
                camera.getWorldPosition(cameraPos);
                contentGroup.lookAt(cameraPos.x, contentGroup.position.y, cameraPos.z);

                contentGroup.visible = true;
                hasSpawned = true; 
                
                hitTestSource.cancel(); 
                hitTestSource = null;
            }
        }
    }

    if (currentCharacterSprites.length > 0) {
        const cameraPos = new THREE.Vector3();
        camera.getWorldPosition(cameraPos);

        currentCharacterSprites.forEach(sprite => {
            const spriteWorldPos = new THREE.Vector3();
            sprite.getWorldPosition(spriteWorldPos);

            sprite.lookAt(cameraPos.x, spriteWorldPos.y, cameraPos.z);
        });
    }

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(render);