import { typewriterEffect } from './chatUtils.js';
import { getCurrentLocale } from './languageConfig.js';
import { t } from '../localization.js';

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
        this.microphoneReady = false;
        this.microphoneChecked = false;

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
        this.setupNativeInput();
        window.addEventListener('ar-museum-locale-change', () => {
            this.input.lang = getCurrentLocale();
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
        this.input.blur();
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

    }

    setupNativeInput() {
        this.input.lang = getCurrentLocale();
        this.isComposing = false;
        this.input.addEventListener('compositionstart', () => { this.isComposing = true; });
        this.input.addEventListener('compositionend', () => { this.isComposing = false; });
        this.input.addEventListener('keydown', (event) => {
            // Enter confirms IME candidates before it can send a message.
            if (event.key === 'Enter' && !event.shiftKey && !event.isComposing
                && !this.isComposing && event.keyCode !== 229) {
                event.preventDefault();
                this.handleTextSubmit();
            }
        });

        // Batch viewport events into the HTML rendering loop. Text editing can
        // produce repeated events without changing the usable viewport.
        let viewportUpdatePending = false;
        let lastBottom = null;
        let lastMaxHeight = null;
        const updateViewport = () => {
            viewportUpdatePending = false;
            const viewport = window.visualViewport;
            const height = viewport?.height ?? window.innerHeight;
            const top = viewport?.offsetTop ?? 0;
            // The fixed HUD is the containing block, including in XR overlay
            // mode. Anchor to its bottom instead of translating by panel height.
            const hudHeight = this.container.parentElement.clientHeight;
            const bottom = Math.round(Math.max(0, hudHeight - top - height) + 12);
            const maxHeight = Math.round(Math.max(0, height - 24));
            if (bottom !== lastBottom) {
                this.container.style.bottom = `${bottom}px`;
                lastBottom = bottom;
            }
            if (maxHeight !== lastMaxHeight) {
                this.container.style.maxHeight = `${maxHeight}px`;
                lastMaxHeight = maxHeight;
            }
        };
        const scheduleViewportUpdate = () => {
            if (viewportUpdatePending) return;
            viewportUpdatePending = true;
            window.requestAnimationFrame(updateViewport);
        };
        window.visualViewport?.addEventListener('resize', scheduleViewportUpdate);
        window.visualViewport?.addEventListener('scroll', scheduleViewportUpdate);
        window.addEventListener('resize', scheduleViewportUpdate);
        this.input.addEventListener('focus', scheduleViewportUpdate);
        // Entering XR can resize the HUD independently of the browser viewport.
        if (typeof ResizeObserver !== 'undefined') {
            this.hudResizeObserver = new ResizeObserver(scheduleViewportUpdate);
            this.hudResizeObserver.observe(this.container.parentElement);
        }
        scheduleViewportUpdate();
    }

    async handleTextSubmit() {
        const prompt = this.input.value.trim();
        
        if (!prompt || !this.activeCharacter || this.isSubmitting || this.isComposing) return;
        this.input.blur();
        
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

    async prepareMicrophone() {
        if (!this.recognition || this.microphoneChecked) {
            return this.microphoneReady;
        }
        this.microphoneChecked = true;
        if (!navigator.mediaDevices?.getUserMedia) {
            return false;
        }
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            stream.getTracks().forEach((track) => track.stop());
            this.microphoneReady = true;
        } catch (error) {
            console.warn('Microphone permission unavailable:', error);
            this.microphoneReady = false;
        }
        return this.microphoneReady;
    }

    handleVoiceSubmit() {
        if (!this.recognition) return;
        if (this.isListening) {
            this.recognition.stop();
            return;
        }
        if (!this.microphoneReady) {
            typewriterEffect(this.output, t('chat.microphoneUnavailable'), 25);
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
        this.input.value = transcript;
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
        this.input.value = '';
    }

    setLoadingState(isLoading, btnText, isVoice = false) {
        this.isSubmitting = isLoading;
        this.input.readOnly = isLoading;
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
