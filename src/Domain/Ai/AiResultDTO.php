<?php

namespace App\Domain\Ai;

/**
 * Data Transfer Object for responses from the external AI API.
 */
class AiResultDTO
{
    /**
     * @param int $statusCode HTTP status code from the external API (e.g., 200, 400)
     * @param mixed $content The raw content returned by the API (JSON string or binary audio data)
     */
    public function __construct(
        public int $statusCode,
        public mixed $content
    ) {
    }
}
