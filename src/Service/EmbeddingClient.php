<?php

namespace App\Service;

use RuntimeException;

final class EmbeddingClient
{
    private string $url;
    private string $token;
    private string $model;
    private int $dimension;

    public function __construct(array $config)
    {
        $rag = $config['rag'] ?? [];
        $this->url = rtrim((string)($rag['embedding_url'] ?? ''), '/');
        $this->token = (string)($rag['embedding_token'] ?? '');
        $this->model = (string)($rag['embedding_model'] ?? 'embeddinggemma-300m');
        $this->dimension = (int)($rag['embedding_dimension'] ?? 768);
    }

    /** @return float[] */
    public function embed(string $text): array
    {
        return $this->embedBatch([$text])[0];
    }

    /** @param string[] $texts @return array<int, array<int, float>> */
    public function embedBatch(array $texts): array
    {
        if ($texts === []) {
            return [];
        }
        if ($this->url === '') {
            throw new RuntimeException('V konfiguraci chybí embedding_url.', 500);
        }

        $all = [];
        foreach (array_chunk(array_values($texts), 32) as $batch) {
            array_push($all, ...$this->requestBatch($batch));
        }
        return $all;
    }

    /** @param string[] $texts @return array<int, array<int, float>> */
    private function requestBatch(array $texts): array
    {
        $payload = json_encode(['model' => $this->model, 'input' => $texts], JSON_THROW_ON_ERROR);
        $headers = ['Content-Type: application/json'];
        if ($this->token !== '') {
            $headers[] = 'Authorization: Bearer ' . $this->token;
        }

        $ch = curl_init($this->url);
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $payload,
            CURLOPT_HTTPHEADER => $headers,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CONNECTTIMEOUT => 10,
            CURLOPT_TIMEOUT => 60,
        ]);
        $response = curl_exec($ch);
        if ($response === false) {
            $message = curl_error($ch);
            curl_close($ch);
            throw new RuntimeException('Embedding služba není dostupná: ' . $message, 503);
        }
        $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        if ($status < 200 || $status >= 300) {
            throw new RuntimeException("Embedding služba vrátila HTTP {$status}.", 502);
        }

        try {
            $decoded = json_decode($response, true, 512, JSON_THROW_ON_ERROR);
        } catch (\JsonException $e) {
            throw new RuntimeException('Embedding služba vrátila neplatný JSON.', 502, $e);
        }
        $rows = $decoded['data'] ?? $decoded['embeddings'] ?? null;
        if (!is_array($rows)) {
            throw new RuntimeException('Embedding služba vrátila neplatnou odpověď.', 502);
        }

        if (isset($rows[0]['embedding'])) {
            usort($rows, static fn(array $a, array $b): int => ($a['index'] ?? 0) <=> ($b['index'] ?? 0));
            $rows = array_column($rows, 'embedding');
        }
        if (count($rows) !== count($texts)) {
            throw new RuntimeException('Počet embeddingů neodpovídá počtu vstupů.', 502);
        }

        return array_map(function (mixed $vector): array {
            if (!is_array($vector) || count($vector) !== $this->dimension) {
                throw new RuntimeException("Embedding musí mít {$this->dimension} rozměrů.", 502);
            }
            return array_map('floatval', $vector);
        }, $rows);
    }
}
