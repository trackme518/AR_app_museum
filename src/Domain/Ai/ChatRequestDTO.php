<?php

namespace App\Domain\Ai;

/**
 * Data Transfer Object for chat requests to the AI system.
 */
class ChatRequestDTO
{
    /**
     * @param string $message User message
     * @param string $systemPrompt System prompt for the AI
     * @param string $sessionId Session identifier
     * @param string $locale BCP 47 language code
     */
    public function __construct(
        public string $message,
        public string $systemPrompt,
        public string $sessionId,
        public string $locale,
        public ?int $exhibitionId
    ) {
    }
}
