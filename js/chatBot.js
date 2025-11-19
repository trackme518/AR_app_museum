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
        // URL tvého mock API
        const url = 'https://192.168.20.51/api/mockApi.php';
        
        // Posíláme GET request
        const response = await fetch(url);
        
        // Kontrola, jestli je response OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parsujeme JSON
        const data = await response.json();
        
        // Ukážeme výsledek v konzoli
        console.log('Data z mock API:', data.text);
        
        // Pokud chceš, můžeš je zobrazit v HTML
        const output = document.getElementById('AI_response');
        if (output) {
            output.textContent = data.text;
        }

    } catch (error) {
        console.error('Chyba při načítání dat z mock API:', error);
    }
}