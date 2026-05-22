let currentTypewriterToken = null;

export function typewriterEffect(element, text, speed = 25, activeCharacter = null) {
    if (!element) return null;
    
    // Cancel any ongoing typewriter effect to prevent overlapping text
    if (currentTypewriterToken) {
        currentTypewriterToken.abort = true;
    }

    const token = { abort: false };
    currentTypewriterToken = token;
    
    // Trigger talking animation if character data is provided
    if (activeCharacter?.playAnimation && activeCharacter?.arAnimNames?.talk) {
        activeCharacter.playAnimation(activeCharacter.arAnimNames.talk);
    }

    // Async IIFE to handle the typing delay without blocking the main thread
    (async () => {
        element.textContent = '';
        
        for (let i = 0; i < text.length; i++) {
            if (token.abort) break;
            element.textContent += text.charAt(i);
            await new Promise(resolve => setTimeout(resolve, speed));
        }
        
        // Clear token if this specific instance finished successfully
        if (currentTypewriterToken === token) {
            currentTypewriterToken = null;
        }

        // Revert to idle animation upon completion
        if (!token.abort && activeCharacter?.playAnimation && activeCharacter?.arAnimNames?.idle) {
            activeCharacter.playAnimation(activeCharacter.arAnimNames.idle);
        }
    })();

    return token;
}