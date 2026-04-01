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
        const res = await fetch(`/api/get_scenario_details.php?id=${encodeURIComponent(id)}`);
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return await res.json();
    } catch (err) {
        console.error('Failed to fetch scenario details', err);
        return null;
    }
}

export async function sendPrompt(prompt, systemPrompt, sessionId = null) {
    const response = await fetch("/api/chat.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            message: prompt,
            systemPrompt: systemPrompt,
            sessionId: sessionId
        })
    });

    const data = await response.json();

    if (!response.ok || data.error) {
        throw new Error(data.error || `HTTP chyba: ${response.status}`);
    }
    
    let answer = "[žádná odpověď]";
    if (data.output && data.output.length > 0) {
        const firstOutput = data.output[0];
        if (firstOutput.content && firstOutput.content.length > 0) {
            answer = firstOutput.content[0].text || "[žádná odpověď]";
        }
    } else if (data.choices && data.choices.length > 0) {
        answer = data.choices[0].message?.content || "[žádná odpověď]";
    }

    return {
        text: answer,
        sessionId: data.id || sessionId
    };
}