export function openChat() {
    document.getElementById("AI_container").classList.remove('hide');
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
            try {
                if (window._chatTypewriterAbort) window._chatTypewriterAbort.v = true;
            } catch (e) {}

            const token = { v: false };
            window._chatTypewriterAbort = token;

            const text = typeof data.text === 'string' ? data.text : String(data.text ?? '');
            (async () => {
                output.textContent = '';
                const delay = 25; // ms per character, adjust for speed
                for (let i = 0; i < text.length; i++) {
                    if (token.v) break;
                    output.textContent += text.charAt(i);
                    await new Promise(r => setTimeout(r, delay));
                }
                // clean up token when done
                if (window._chatTypewriterAbort === token) window._chatTypewriterAbort = null;
            })();
        }

    } catch (error) {
        console.error('Chyba při načítání dat z mock API:', error);
    }
}