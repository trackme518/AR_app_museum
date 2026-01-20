let _currentTypewriterToken = null;

export function typewriterEffect(element, text, speed = 25) {
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

export async function fetchScenarioDetails(id) {
    try {
        const res = await fetch(`/scenario-details?id=${encodeURIComponent(id)}`);
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return await res.json();
    } catch (err) {
        console.error('Failed to fetch scenario details', err);
        return null;
    }
}

export async function sendPrompt(prompt, systemPrompt) {
    const response = await fetch("/api/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            model: "local-model",
            messages: [
                { role: "system", content: systemPrompt || "" },
                { role: "user", content: prompt }
            ]
        })
    });

    if (!response.ok) throw new Error(`LLM error: ${response.status}`);
    const data = await response.json();
    return data.choices?.[0]?.message?.content || "[žádná odpověď]";
}