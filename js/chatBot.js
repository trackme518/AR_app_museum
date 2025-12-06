export function openChat(data) {
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

export async function sendPrompt() {
    try {
        const prompt = document.getElementById("AI_chat_input").value.trim();
        if (!prompt) return;

        const responseBox = document.getElementById("AI_response");

        const response = await fetch("/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"            
            },
            body: JSON.stringify({
                model: "local-model",
                max_tokens: 150,
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
    }
}


/*export async function sendPrompt() {
    try {
        const baseUrl = 'https://192.168.20.51/api/mockApi.php';

        const context = (typeof window !== 'undefined') ? window.selectedSpriteContext : undefined;
        const url = context ? `${baseUrl}?context=${encodeURIComponent(JSON.stringify(context))}` : baseUrl;

        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Data z mock API:', data.text, 'context:', context);

        const output = document.getElementById('AI_response');
        if (output) {
            const text = typeof data.text === 'string' ? data.text : String(data.text ?? '');
            typewriterEffect(output, text, 25);
        }

    } catch (error) {
        console.error('Chyba při načítání dat z mock API:', error);
    }
}*/