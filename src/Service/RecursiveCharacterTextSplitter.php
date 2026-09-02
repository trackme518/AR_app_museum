<?php

namespace App\Service;

use InvalidArgumentException;

final class RecursiveCharacterTextSplitter
{
    private const SEPARATORS = ["\n\n", "\n", '. ', ' ', ''];

    public function __construct(
        private int $chunkSize = 1000,
        private int $chunkOverlap = 50
    ) {
        if ($this->chunkSize < 1) {
            throw new InvalidArgumentException('Velikost bloku musí být kladná.');
        }
        if ($this->chunkOverlap < 0 || $this->chunkOverlap >= $this->chunkSize) {
            throw new InvalidArgumentException('Překryv musí být nezáporný a menší než velikost bloku.');
        }
    }

    /** @return string[] */
    public function split(string $text): array
    {
        $text = trim(str_replace(["\r\n", "\r"], "\n", $text));
        if ($text === '') {
            return [];
        }

        $pieces = $this->splitRecursively($text, 0);
        $chunks = [];
        $current = '';

        foreach ($pieces as $piece) {
            if ($piece === '') {
                continue;
            }

            if ($current === '') {
                $current = $piece;
                continue;
            }

            if (mb_strlen($current . $piece) <= $this->chunkSize) {
                $current .= $piece;
                continue;
            }

            $chunks[] = trim($current);
            $roomForOverlap = max(0, $this->chunkSize - mb_strlen($piece));
            $overlapLength = min($this->chunkOverlap, $roomForOverlap, mb_strlen($current));
            $overlap = $overlapLength > 0 ? mb_substr($current, -$overlapLength) : '';
            $current = $overlap . $piece;
        }

        if (trim($current) !== '') {
            $chunks[] = trim($current);
        }

        return array_values(array_filter($chunks, static fn(string $chunk): bool => $chunk !== ''));
    }

    /** @return string[] */
    private function splitRecursively(string $text, int $separatorIndex): array
    {
        if (mb_strlen($text) <= $this->chunkSize) {
            return [$text];
        }

        $separator = self::SEPARATORS[$separatorIndex] ?? '';
        if ($separator === '') {
            $pieces = [];
            $step = max(1, $this->chunkSize - $this->chunkOverlap);
            for ($offset = 0, $length = mb_strlen($text); $offset < $length; $offset += $step) {
                $pieces[] = mb_substr($text, $offset, $this->chunkSize);
            }
            return $pieces;
        }

        if (!str_contains($text, $separator)) {
            return $this->splitRecursively($text, $separatorIndex + 1);
        }

        $parts = explode($separator, $text);
        $result = [];
        $lastIndex = count($parts) - 1;
        foreach ($parts as $index => $part) {
            $piece = $part . ($index < $lastIndex ? $separator : '');
            if ($piece === '') {
                continue;
            }
            array_push($result, ...$this->splitRecursively($piece, $separatorIndex + 1));
        }

        return $result;
    }
}
