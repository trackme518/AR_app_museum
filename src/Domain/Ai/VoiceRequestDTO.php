<?php

namespace App\Domain\Ai;

/**
 * Data Transfer Object for voice requests to the AI system.
 */
class VoiceRequestDTO
{
    /**
     * @param string $systemPrompt System prompt for the AI
     * @param string $sessionId Session identifier
     * @param string $model Model name
     * @param string $voice Voice identifier
     */
    public function __construct(
        public string $systemPrompt,
        public string $sessionId,
        public string $model,
        public string $voice
    ) {
    }
}
