export function openChat() {
    document.getElementById('AI_container').classList.remove('hide');
}

export async function sendPrompt() {
    const prompt = document.getElementById("AI_chat_input").value;
    const responseBox = document.getElementById("AI_response");

    try {
    const res = await fetch("http://192.168.20.51:1234/v1/chat/completions", {
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
}
