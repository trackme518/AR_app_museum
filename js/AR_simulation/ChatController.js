import { typewriterEffect } from './chatUtils.js';

export class ChatController {
    constructor(apiService, onCloseCallback) {
        this.apiService = apiService;
        this.onCloseCallback = onCloseCallback;
        
        // DOM Elements
        this.container = document.getElementById("ai-container");
        this.output = document.getElementById("ai-response");
        this.input = document.getElementById("ai-chat-input");
        this.submitBtn = document.getElementById("ai-submit-btn");
        this.sttBtn = document.getElementById("stt-btn");
        this.hideBtn = document.getElementById("hide-ai-btn");

        this.activeCharacter = null;
        this.mediaRecorder = null;
        this.audioChunks = [];

        // iOS Detection
        this.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        
        // Hide STT button on iOS
        if (this.isIOS && this.sttBtn) {
            this.sttBtn.style.display = 'none';
        }

        this.setupListeners();
        this.setupKeyboard();
    }

    open(characterData) {
        this.container.classList.remove('hidden');
        this.activeCharacter = characterData;

        if (!this.activeCharacter.sessionId) {
            this.activeCharacter.sessionId = this.activeCharacter.id 
                ? `char_${this.activeCharacter.id}` 
                : `char_${Math.random().toString(36).substr(2, 9)}`;
        }

        const text = characterData.intro || "Ahoj!";
        typewriterEffect(this.output, text, 25, this.activeCharacter);
    }

    close() {
        this.container.classList.add('hidden');
        if (this.onCloseCallback) this.onCloseCallback();
    }

    setupListeners() {
        this.hideBtn.addEventListener('click', () => this.close());
        this.submitBtn.addEventListener('click', () => this.handleTextSubmit());

        if (!this.isIOS && this.sttBtn) {
            this.sttBtn.addEventListener('click', () => this.handleVoiceSubmit());
        }

        document.addEventListener('pointerdown', (event) => {
            const keyboardWrapper = document.getElementById("keyboard-wrapper");
            
            if (keyboardWrapper && keyboardWrapper.style.display === "block") {
                const path = event.composedPath();
                
                const isClickInsideKeyboard = path.includes(keyboardWrapper);
                const isClickOnInput = path.includes(this.input);
                
                if (!isClickInsideKeyboard && !isClickOnInput) {
                    this.hideKeyboard(keyboardWrapper);
                }
            }
        });
    }

    setupKeyboard() {
        const Keyboard = window.SimpleKeyboard.default;
        const keyboardWrapper = document.getElementById("keyboard-wrapper");
        
        this.keyboard = new Keyboard({
            onChange: input => {
                this.input.innerText = input === "" ? "Napište zprávu..." : input;
            },
            onKeyPress: button => this.handleKeyPress(button, keyboardWrapper),
            layout: {
                'default': [
                    'q w e r t z u i o p',
                    'a s d f g h j k l {acute}',
                    '{shift} y x c v b n m {wedge} {bksp}',
                    '{numbers} {space} {enter}'
                ],
                'shift': [
                    'Q W E R T Z U I O P',
                    'A S D F G H J K L {acute}',
                    '{shift} Y X C V B N M {wedge} {bksp}',
                    '{numbers} {space} {enter}'
                ],
                'numbers': [
                    '1 2 3 4 5 6 7 8 9 0',
                    '- + / * : ( ) & @ =',
                    '. , ? ! {bksp}',
                    '{abc} {space} {enter}'
                ]
            },
            display: {
                '{bksp}': '⌫',
                '{enter}': 'Odeslat',
                '{shift}': '⇧',
                '{space}': ' ',
                '{numbers}': '?123',
                '{abc}': 'ABC',
                '{wedge}': 'ˇ',
                '{acute}': '´'
            }
        });

        this.input.addEventListener("click", (e) => {
            e.preventDefault();
            keyboardWrapper.style.display = "block";
            this.input.disabled = true;
            this.container.classList.add("keyboard-open");
            
            if (this.input.innerText === "Napište zprávu...") {
                this.input.innerText = "";
            }
        });
    }

    handleKeyPress(button, keyboardWrapper) {
        const diacriticMap = {
            '{wedge}': { 
                map: { 'c': 'č', 'd': 'ď', 'e': 'ě', 'n': 'ň', 'r': 'ř', 's': 'š', 't': 'ť', 'z': 'ž', 'C': 'Č', 'D': 'Ď', 'E': 'Ě', 'N': 'Ň', 'R': 'Ř', 'S': 'Š', 'T': 'Ť', 'Z': 'Ž' }, 
                symbol: 'ˇ' 
            },
            '{acute}': { 
                map: { 'a': 'á', 'e': 'é', 'i': 'í', 'o': 'ó', 'u': 'ú', 'y': 'ý', 'A': 'Á', 'E': 'É', 'I': 'Í', 'O': 'Ó', 'U': 'Ú', 'Y': 'Ý' }, 
                symbol: '´' 
            }
        };

        if (button === "{wedge}" || button === "{acute}") {
            let currentInput = this.keyboard.getInput();
            let lastChar = currentInput.slice(-1);
            let baseString = currentInput.slice(0, -1);
            
            const diacriticInfo = diacriticMap[button];
            
            if (lastChar && diacriticInfo.map[lastChar]) {
                let newInput = baseString + diacriticInfo.map[lastChar];
                this.keyboard.setInput(newInput);
                this.keyboard.options.onChange(newInput);
            } else {
                let newInput = currentInput + diacriticInfo.symbol;
                this.keyboard.setInput(newInput);
                this.keyboard.options.onChange(newInput);
            }
            return;
        }

        if (button === "{close}") {
            this.hideKeyboard(keyboardWrapper);
            return;
        }
        if (button === "{enter}") {
            this.handleTextSubmit();
            this.hideKeyboard(keyboardWrapper);
            return;
        }
        if (button === "{shift}") {
            const currentLayout = this.keyboard.options.layoutName;
            const shiftToggle = currentLayout === "default" ? "shift" : "default";
            this.keyboard.setOptions({ layoutName: shiftToggle });
            return;
        }
        if (button === "{numbers}") {
            this.keyboard.setOptions({ layoutName: "numbers" });
            return;
        }
        if (button === "{abc}") {
            this.keyboard.setOptions({ layoutName: "default" });
            return;
        }
    }

    hideKeyboard(keyboardWrapper) {
        keyboardWrapper.style.display = "none";
        this.input.disabled = false;
        this.container.classList.remove("keyboard-open");
        
        if (this.input.innerText.trim() === "") {
            this.input.innerText = "Napište zprávu...";
        }
    }

    async handleTextSubmit() {
        const prompt = this.input.innerText.trim(); 
        
        if (!prompt || prompt === "Napište zprávu..." || !this.activeCharacter) return;
        
        const originalText = this.submitBtn.innerText;
        this.setLoadingState(true, "...", false);

        try {
            const result = await this.apiService.sendChatPrompt(
                prompt, 
                this.activeCharacter.description || "", 
                this.activeCharacter.sessionId
            );
            
            if (result.sessionId) {
                this.activeCharacter.sessionId = result.sessionId;
            }
            
            typewriterEffect(this.output, result.text, 25, this.activeCharacter);
            this.resetInput();
        } catch (err) {
            console.error("AI Text Error:", err);
            typewriterEffect(this.output, "Omlouvám se, ale momentálně mi vypadla paměť. Zkuste to za chvíli.", 25);
        } finally {
            this.setLoadingState(false, originalText, false);
        }
    }

    // VRÁCENO: Voice handling method
    async handleVoiceSubmit() {
        if (this.mediaRecorder && this.mediaRecorder.state === "recording") {
            this.mediaRecorder.stop();
            return;
        }

        try {
            const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.audioChunks = [];
            this.mediaRecorder = new MediaRecorder(audioStream);

            this.mediaRecorder.ondataavailable = (e) => { 
                if (e.data.size > 0) this.audioChunks.push(e.data); 
            };
            
            this.mediaRecorder.onstop = async () => {
                audioStream.getTracks().forEach(track => track.stop());
                this.processAudio();
            };

            this.mediaRecorder.start();
            this.sttBtn.innerText = "Nahrávám... (Stop)";
        } catch (err) {
            console.error("Microphone access denied:", err);
            typewriterEffect(this.output, "Chyba: Mikrofon není dostupný.", 25);
        }
    }

    // VRÁCENO: Audio processing logic
    async processAudio() {
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
        this.setLoadingState(true, "Zpracovávám...", true);

        try {
            const result = await this.apiService.sendSpeechPrompt(
                audioBlob, 
                this.activeCharacter.description || "", 
                this.activeCharacter.sessionId
            );
            
            if (result.sessionId) {
                this.activeCharacter.sessionId = result.sessionId;
            }

            // Update UI with recognized text
            this.input.innerText = result.userText;
            this.keyboard.setInput(result.userText);

            // Play response audio
            const audioUrl = URL.createObjectURL(result.audioBlob);
            new Audio(audioUrl).play();

            typewriterEffect(this.output, result.botText, 25, this.activeCharacter);
        } catch (err) {
            console.error("AI Voice Error:", err);
            typewriterEffect(this.output, "Omlouvám se, vznikla chyba v komunikaci. Zkuste to prosím později.", 25);
        } finally {
            this.setLoadingState(false, "Mluvte", true);
            setTimeout(() => {
                this.input.innerText = "Napište zprávu...";
                this.keyboard.clearInput();
            }, 3000);
        }
    }

    resetInput() {
        this.input.innerText = "Napište zprávu...";
        this.keyboard.clearInput();
        
        const keyboardWrapper = document.getElementById("keyboard-wrapper");
        this.hideKeyboard(keyboardWrapper);
    }

    setLoadingState(isLoading, btnText, isVoice = false) {
        this.input.style.pointerEvents = isLoading ? "none" : "auto";
        this.input.style.opacity = isLoading ? "0.6" : "1"; 
        
        this.submitBtn.disabled = isLoading;
        if (isVoice && this.sttBtn) {
            this.sttBtn.disabled = isLoading;
            this.sttBtn.innerText = btnText;
        } else {
            this.submitBtn.innerText = btnText;
        }
    }
}