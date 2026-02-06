import { ARSceneManager } from './scene.js';
import { typewriterEffect, fetchScenarioDetails, sendPrompt } from './chatBot.js';
import { createVideoTexture, createImageTexture, createSprite } from './spriteUtils.js';
import { QRCode } from './three-bundle.js'; 

const scenarioSelect = document.getElementById("scenario_select");
const chatContainer = document.getElementById("AI_container");
const chatOutput = document.getElementById("AI_response");
const chatInput = document.getElementById("AI_chat_input");
const submitBtn = document.getElementById("AI_submit_btn");
const hideAiBtn = document.getElementById("hide_AI_btn");
const exitArBtn = document.getElementById("exit_AR_btn");
const navBar = document.getElementById("header_nav_bar");
const arNotSupportedMsg = document.getElementById("ar-not-supported");
const qrCodeImg = document.getElementById("qr-code");

const state = {
    scenarioData: [],
    characterIndex: 0,
    spawnTimer: null,
    timeout: 5000,
    targetScale: 0.6,
    minSpacing: 0.8,
    systemPrompt: ""
};

/* LOGIC */

async function generateQRCode(text) {
    if (!qrCodeImg) return;
    
    qrCodeImg.src = await QRCode.toDataURL(text, {
        margin: 2,
        color: {
            dark: "#fe007d",
            light: "#FFFFFF",
        },
    });
}

async function generateLaunchCode() {
    if (typeof VLaunch !== 'undefined') {
        try {
            let url = await VLaunch.getLaunchUrl(window.location.href);
            generateQRCode(url);
            console.log("Variant Launch Code Generated:", url);
        } catch (e) {
            console.error("Chyba při získávání Launch URL:", e);
            generateQRCode(window.location.href);
        }
    }
}

window.addEventListener("vlaunch-initialized", (e) => {
    generateLaunchCode();
});

if (typeof VLaunch !== 'undefined' && VLaunch.initialized) {
    generateLaunchCode();
} else {
    generateQRCode(window.location.href);
}

const onCharacterSelect = (sprite) => {
    const data = sprite.userData;
    openChat(data);
    
    if (state.spawnTimer) {
        clearTimeout(state.spawnTimer);
        state.spawnTimer = null;
    }
};

const arManager = new ARSceneManager(chatContainer, onCharacterSelect);

arManager.renderer.xr.addEventListener('sessionstart', () => {
    scenarioSelect.classList.add('hide');
    navBar.classList.add('hide');
    exitArBtn.classList.remove('hide');
});

arManager.renderer.xr.addEventListener('sessionend', () => {
    scenarioSelect.classList.remove('hide');
    navBar.classList.remove('hide');
    exitArBtn.classList.add('hide');
    if (state.spawnTimer) clearTimeout(state.spawnTimer);
});


/* SPAWN LOGIC */
function spawnNextCharacter() {
    if (state.characterIndex >= state.scenarioData.length) return;

    const charData = state.scenarioData[state.characterIndex];
    if (!charData.media) {
        state.characterIndex++;
        spawnNextCharacter();
        return;
    }

    let material, videoElement = null;
    const isVideo = charData.typeOfMedia && charData.typeOfMedia.toLowerCase().includes('video');

    if (isVideo) {
        const res = createVideoTexture(charData.media);
        material = res.material;
        videoElement = res.video;
    } else {
        material = createImageTexture(charData.media);
    }

    const center = (state.scenarioData.length - 1) / 2;
    const x = (state.characterIndex - center) * state.minSpacing;
    const y = (1.0 * state.targetScale) / 2;

    const sprite = createSprite(material);
    sprite.position.set(x, y, 0);
    sprite.scale.set(0, 0, 0);
    
    sprite.userData = {
        id: charData.id,
        name: charData.name,
        description: charData.description,
        introduction: charData.intro
    };

    arManager.addObjectToScene(sprite, isVideo, videoElement);

    let currentScale = 0;
    const animatePopup = () => {
        currentScale += 0.05;
        if (currentScale > state.targetScale) currentScale = state.targetScale;
        sprite.scale.set(currentScale, currentScale, currentScale);
        if (currentScale < state.targetScale) requestAnimationFrame(animatePopup);
    };
    animatePopup();

    state.characterIndex++;
}

async function loadScenario(id) {
    const data = await fetchScenarioDetails(id);
    if (!data) return;

    arManager.clearScene();
    
    const chars = Array.isArray(data.characters) ? data.characters : [];
    state.scenarioData = chars.filter(c => c.media);
    state.characterIndex = 0;

    if (state.scenarioData.length > 0) {
        spawnNextCharacter();
    }
}

function openChat(data) {
    chatContainer.classList.remove('hide');
    state.systemPrompt = data.description || "";
    
    const text = data.introduction || "Ahoj!";
    typewriterEffect(chatOutput, text, 25);
}

function closeChat() {
    chatContainer.classList.add('hide');
    
    if (state.scenarioData.length > 0 && state.characterIndex < state.scenarioData.length) {
        if (state.spawnTimer) clearTimeout(state.spawnTimer);
        state.spawnTimer = setTimeout(() => {
            spawnNextCharacter();
        }, state.timeout);
    }
}

hideAiBtn.addEventListener('click', closeChat);
exitArBtn.addEventListener('click', () => arManager.exitAR());

scenarioSelect.addEventListener('change', (e) => {
    if (e.target.value) loadScenario(e.target.value);
});

submitBtn.addEventListener('click', async () => {
    const prompt = chatInput.value.trim();
    if (!prompt) return;

    const originalText = submitBtn.innerText;
    chatInput.value = "";
    chatInput.disabled = true;
    submitBtn.disabled = true;
    submitBtn.innerText = "...";

    try {
        const response = await sendPrompt(prompt, state.systemPrompt);
        typewriterEffect(chatOutput, response, 25);
    } catch (err) {
        chatOutput.innerText = "Chyba: " + err.message;
    } finally {
        chatInput.disabled = false;
        submitBtn.disabled = false;
        submitBtn.innerText = originalText;
    }
});

function startApp() {
    if (arNotSupportedMsg) arNotSupportedMsg.style.display = "none";
    
    if (scenarioSelect.value) {
        loadScenario(scenarioSelect.value);
    }
}

function showQRCodeMode() {
    if (arNotSupportedMsg) arNotSupportedMsg.style.display = "block";

    if (scenarioSelect) scenarioSelect.style.display = 'none';
    if (navBar) navBar.style.display = 'none';
    if (chatContainer) chatContainer.classList.add('hide');
}

if ("xr" in navigator) {
    navigator.xr.isSessionSupported("immersive-ar").then((supported) => {
        if (supported) {
            startApp();
        } else {
            showQRCodeMode();
        }
    });
} else {
    showQRCodeMode();
}