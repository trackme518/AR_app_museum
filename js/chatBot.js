export function openChat(data) {
    const container = document.getElementById("AI_container");
    if (!container) return;

    container.classList.remove('hide');
    const output = document.getElementById('AI_response');
    if (!output) return;

    if (data && data.introduction) {
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
}

/*export async function sendPrompt() {
    const prompt = document.getElementById("AI_chat_input").value;
    const responseBox = document.getElementById("AI_response");

    try {
    const res = await fetch("https://localhost/v1/chat/completions", {
        method: "POST",
        mode: "cors",
        headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer no-key-needed"
        },
        body: JSON.stringify({
        model: "local-model",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7
        })
    });

    const data = await res.json();
    responseBox.innerText = data.choices[0].message.content;
    } catch (err) {
    console.error("Chyba při odesílání požadavku:", err);
    responseBox.innerText = "Nastala chyba při komunikaci s LLM.\n" +
                            "Typ chyby: " + err.name + "\n" +
                            "Zpráva: " + err.message;
    }
}*/