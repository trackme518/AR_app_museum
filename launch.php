<?php

declare(strict_types=1);

$target = filter_input(INPUT_GET, 'target', FILTER_VALIDATE_URL);
$targetParts = is_string($target) ? parse_url($target) : false;
$requestHost = strtolower((string)($_SERVER['HTTP_HOST'] ?? ''));
$targetHost = '';

if (is_array($targetParts) && isset($targetParts['host'])) {
    $targetHost = strtolower($targetParts['host']);
    if (isset($targetParts['port'])) {
        $targetHost .= ':' . $targetParts['port'];
    }
}

$validScheme = is_array($targetParts) && in_array($targetParts['scheme'] ?? '', ['http', 'https'], true);
$validTarget = $validScheme
    && $targetHost !== ''
    && hash_equals($requestHost, $targetHost)
    && !isset($targetParts['user'])
    && !isset($targetParts['pass']);

if (!$validTarget) {
    http_response_code(400);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'Invalid AR experience URL.';
    exit;
}

header('Location: ' . $target, true, 302);
