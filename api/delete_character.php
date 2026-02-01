<?php
require_once __DIR__ . '/../backend/init.php';
require_once __DIR__ . '/../backend/auth.php';
require_once __DIR__ . '/../backend/character_db.php';

require_admin_api();

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Použijte metodu POST']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (empty($input['csrf_token']) || empty($_SESSION['csrf_token']) || !hash_equals($_SESSION['csrf_token'], $input['csrf_token'])) {
    http_response_code(403);
    echo json_encode(['error' => 'Neplatný bezpečnostní token (CSRF)']);
    exit;
}

$id = isset($input['id']) ? (int)$input['id'] : 0;

if ($id > 0) {
    try {
        $result = delete_character($id, $db);
        
        if ($result === true) {
            echo json_encode(['success' => true, 'id' => $id]);
        } else {
            http_response_code(400);
            echo json_encode(['error' => $result]);
        }
    } catch (Exception $e) {
        error_log("API Error: " . $e->getMessage());
        http_response_code(500);
        echo json_encode(['error' => 'Interní chyba serveru.']);
    }
} else {
    http_response_code(400);
    echo json_encode(['error' => 'Neplatné ID postavy']);
}
exit;
?>