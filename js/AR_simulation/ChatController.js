import { typewriterEffect } from './chatUtils.js';
import { getCurrentLocale } from './languageConfig.js';
import { t } from '../localization.js';

const KEYBOARD_LAYOUTS = {
    'en-US': ['q w e r t y u i o p', 'a s d f g h j k l', '{shift} z x c v b n m {bksp}', '{numbers} {space} {enter}'],
    'de-DE': ['q w e r t z u i o p ü', 'a s d f g h j k l ö ä', '{shift} y x c v b n m ß {bksp}', '{numbers} {space} {enter}'],
    'fr-FR': ['a z e r t y u i o p', 'q s d f g h j k l m', '{shift} w x c v b n é è ç à {bksp}', '{numbers} {space} {enter}'],
    'cs-CZ': ['q w e r t z u i o p ú', 'a s d f g h j k l ů', '{shift} y x c v b n m č š ř ž ý á í é {bksp}', '{numbers} {space} {enter}'],
    'es-ES': ['q w e r t y u i o p', 'a s d f g h j k l ñ', '{shift} z x c v b n m á é í ó ú ü {bksp}', '{numbers} {space} {enter}'],
    'pl-PL': ['q w e r t y u i o p', 'a s d f g h j k l ł', '{shift} z x c v b n m ą ć ę ń ó ś ź ż {bksp}', '{numbers} {space} {enter}'],
    'sk-SK': ['q w e r t z u i o p ú', 'a s d f g h j k l ô ä', '{shift} y x c v b n m č ď ľ ĺ ň š ť ž ý á í é {bksp}', '{numbers} {space} {enter}'],
    'it-IT': ['q w e r t y u i o p', 'a s d f g h j k l', '{shift} z x c v b n m à è é ì ò ù {bksp}', '{numbers} {space} {enter}'],
    'ja-JP': ['あ い う え お か き く け こ', 'さ し す せ そ た ち つ て と', 'な に ぬ ね の は ひ ふ へ ほ {bksp}', 'ま み む め も や ゆ よ ら り る れ ろ', 'わ を ん ゛ ゜ {numbers} {space} {enter}'],
    'ko-KR': ['ㅂ ㅈ ㄷ ㄱ ㅅ ㅛ ㅕ ㅑ ㅐ ㅔ', 'ㅁ ㄴ ㅇ ㄹ ㅎ ㅗ ㅓ ㅏ ㅣ', '{shift} ㅋ ㅌ ㅊ ㅍ ㅠ ㅜ ㅡ {bksp}', '{numbers} {space} {enter}'],
};

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
        this.ttsToggleBtn = document.getElementById("tts-toggle-btn");
        this.hideBtn = document.getElementById("hide-ai-btn");
        this.isTtsEnabled = false;

        this.activeCharacter = null;
        // CSRF token (meta tag, issued with the page's session) required by
        // the /ai/chat gate.
        const csrfMeta = document.querySelector('meta[name="csrf-token"]');
        this.csrfToken = csrfMeta ? csrfMeta.getAttribute('content') : '';
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = SpeechRecognition ? new SpeechRecognition() : null;
        this.isListening = false;

        if (!this.recognition && this.sttBtn) {
            this.sttBtn.style.display = 'none';
        } else if (this.recognition) {
            this.recognition.interimResults = false;
            this.recognition.maxAlternatives = 1;
            this.recognition.onresult = (event) => this.handleSpeechResult(event);
            this.recognition.onerror = (event) => this.handleSpeechError(event);
            this.recognition.onend = () => this.finishListening();
        }

        if (!('speechSynthesis' in window) && this.ttsToggleBtn) {
            this.ttsToggleBtn.style.display = 'none';
        }

        this.setupListeners();
        this.updateTtsButton();
        this.setupKeyboard();
        window.addEventListener('ar-museum-locale-change', () => {
            this.applyKeyboardLocale();
            this.updateTtsButton();
        });
    }

    open(characterData) {
        this.container.classList.remove('hidden');
        this.activeCharacter = characterData;

        if (!this.activeCharacter.sessionId) {
            this.activeCharacter.sessionId = this.activeCharacter.id 
                ? `char_${this.activeCharacter.id}` 
                : `char_${Math.random().toString(36).substr(2, 9)}`;
        }

        const text = this.getGreeting();
        typewriterEffect(this.output, text, 25, this.activeCharacter);
        this.speak(text);
    }

    close() {
        this.container.classList.add('hidden');
        window.speechSynthesis?.cancel();
        if (this.isListening) this.recognition.stop();
        if (this.onCloseCallback) this.onCloseCallback();
    }

    setupListeners() {
        this.hideBtn.addEventListener('click', () => this.close());
        this.submitBtn.addEventListener('click', () => this.handleTextSubmit());

        if (this.recognition && this.sttBtn) {
            this.sttBtn.addEventListener('click', () => this.handleVoiceSubmit());
        }
        this.ttsToggleBtn?.addEventListener('click', () => this.toggleTts());

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
                this.input.innerText = input === "" ? t('chat.placeholder') : input;
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
                '{enter}': t('chat.send'),
                '{shift}': '⇧',
                '{space}': ' ',
                '{numbers}': '?123',
                '{abc}': 'ABC',
                '{wedge}': 'ˇ',
                '{acute}': '´'
            }
        });
        this.applyKeyboardLocale();

        this.input.addEventListener("click", (e) => {
            e.preventDefault();
            keyboardWrapper.style.display = "block";
            this.input.disabled = true;
            this.container.classList.add("keyboard-open");
            
            if (this.input.innerText === t('chat.placeholder')) {
                this.input.innerText = "";
            }
        });
    }

    applyKeyboardLocale() {
        if (!this.keyboard) return;
        const layout = KEYBOARD_LAYOUTS[getCurrentLocale()] || KEYBOARD_LAYOUTS['en-US'];
        this.keyboard.setOptions({
            layoutName: 'default',
            layout: {
                default: layout,
                shift: layout.map((row) => row.toLocaleUpperCase(getCurrentLocale())),
                numbers: [
                    '1 2 3 4 5 6 7 8 9 0',
                    '- + / * : ( ) & @ =',
                    '. , ? ! {bksp}',
                    '{abc} {space} {enter}'
                ],
            },
            display: { ...this.keyboard.options.display, '{enter}': t('chat.send') },
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
            this.input.innerText = t('chat.placeholder');
        }
    }

    async handleTextSubmit() {
        const prompt = this.input.innerText.trim(); 
        
        if (!prompt || prompt === t('chat.placeholder') || !this.activeCharacter) return;
        
        const originalText = this.submitBtn.innerText;
        this.setLoadingState(true, "...", false);

        try {
            const result = await this.apiService.sendChatPrompt(
                prompt,
                this.activeCharacter.description || "",
                this.activeCharacter.sessionId,
                getCurrentLocale(),
                this.activeCharacter.exhibitionId || null,
                this.csrfToken
            );
            
            if (result.sessionId) {
                this.activeCharacter.sessionId = result.sessionId;
            }
            
            typewriterEffect(this.output, result.text, 25, this.activeCharacter);
            this.speak(result.text);
            this.resetInput();
        } catch (err) {
            console.error("AI Text Error:", err);
            typewriterEffect(this.output, t('chat.aiUnavailable'), 25);
        } finally {
            this.setLoadingState(false, originalText, false);
        }
    }

    handleVoiceSubmit() {
        if (!this.recognition) return;
        if (this.isListening) {
            this.recognition.stop();
            return;
        }

        try {
            window.speechSynthesis?.cancel();
            this.recognition.lang = getCurrentLocale();
            this.recognition.start();
            this.isListening = true;
            this.sttBtn.innerText = t('chat.listening');
        } catch (err) {
            console.error("Speech recognition error:", err);
            typewriterEffect(this.output, t('chat.microphoneUnavailable'), 25);
        }
    }

    handleSpeechResult(event) {
        const transcript = event.results[0][0].transcript.trim();
        if (!transcript) return;
        this.input.innerText = transcript;
        this.keyboard.setInput(transcript);
        this.handleTextSubmit();
    }

    handleSpeechError(event) {
        console.error('Speech recognition error:', event.error);
        typewriterEffect(this.output, t('chat.recognitionFailed'), 25);
    }

    finishListening() {
        this.isListening = false;
        if (this.sttBtn) this.sttBtn.innerText = t('chat.speak');
    }

    speak(text) {
        if (!this.isTtsEnabled || !('speechSynthesis' in window) || !text) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = getCurrentLocale();
        const locale = utterance.lang.toLowerCase();
        const voice = window.speechSynthesis.getVoices().find((item) => item.lang.toLowerCase() === locale)
            || window.speechSynthesis.getVoices().find((item) => item.lang.toLowerCase().startsWith(locale.split('-')[0]));
        if (voice) utterance.voice = voice;
        window.speechSynthesis.speak(utterance);
    }

    toggleTts() {
        this.isTtsEnabled = !this.isTtsEnabled;
        if (!this.isTtsEnabled) window.speechSynthesis?.cancel();
        this.updateTtsButton();
    }

    updateTtsButton() {
        if (!this.ttsToggleBtn) return;
        this.ttsToggleBtn.textContent = this.isTtsEnabled ? '🔊' : '🔇';
        this.ttsToggleBtn.setAttribute('aria-pressed', String(this.isTtsEnabled));
        this.ttsToggleBtn.setAttribute(
            'aria-label',
            t(this.isTtsEnabled ? 'chat.disableSpeech' : 'chat.enableSpeech')
        );
        this.ttsToggleBtn.title = t(this.isTtsEnabled
            ? 'chat.speechOn'
            : 'chat.speechOff');
    }

    getGreeting() {
        if (!this.activeCharacter) return t('chat.defaultGreeting');
        return this.activeCharacter.introTranslations?.[getCurrentLocale()]
            || this.activeCharacter.intro
            || t('chat.defaultGreeting');
    }

    handleLocaleChange() {
        if (!this.activeCharacter || this.container.classList.contains('hidden')) return;
        const greeting = this.getGreeting();
        typewriterEffect(this.output, greeting, 25, this.activeCharacter);
        this.speak(greeting);
    }

    resetInput() {
        this.input.innerText = t('chat.placeholder');
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
