<?php
ini_set('display_errors', 0);
error_reporting(E_ALL);

$allowedOrigins = [
    'https://ar.museumofpragueai.com'
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

header("Content-Type: application/json; charset=utf-8");

$iniPath = __DIR__ . '/../../arapp_config.ini';

if (!file_exists($iniPath)) {
    http_response_code(500);
    header("Content-Type: application/json");
    echo json_encode(['error' => 'Konfiguracni soubor nebyl nalezen. Zkontroluj cestu: ' . $iniPath]);
    exit;
}

$config = @parse_ini_file($iniPath);

if (!$config || !isset($config['openai_key'])) {
    $phpError = error_get_last();
    http_response_code(500);
    echo json_encode([
        'error' => 'Chyba pri cteni INI souboru. Zkontroluj, zda v nem nejsou chybne znaky.',
        'php_detail' => $phpError['message'] ?? 'Neznama chyba'
    ]);
    exit;
}

$apiKey = $config['openai_key'];

$inputData = json_decode(file_get_contents("php://input"), true);

if (!isset($inputData['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Chybi povinny parametr: message']);
    exit;
}

$model = $inputData['model'] ?? 'gpt-4o-mini';

$postData = [
    "model" => $model,
    "input" => [
        [
            "role" => "user", 
            "content" => $inputData['message']
        ]
    ]
];

if (!empty($inputData['systemPrompt'])) {
    $postData['instructions'] = $inputData['systemPrompt'];
}

if (!empty($inputData['sessionId'])) {
    $postData['previous_response_id'] = $inputData['sessionId'];
}

$ch = curl_init("https://api.openai.com/v1/responses");
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer " . $apiKey
]);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    http_response_code(500);
    echo json_encode(['error' => 'Chyba cURL: ' . curl_error($ch)]);
} else {
    http_response_code($httpCode);
    echo $response;
}

curl_close($ch);
?>