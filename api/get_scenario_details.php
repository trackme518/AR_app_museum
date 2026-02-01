<?php
require_once __DIR__ . '/../backend/init.php';
require_once __DIR__ . '/../backend/scenarios_db.php';

header('Content-Type: application/json; charset=utf-8');

$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

if ($id > 0) {
    try {
        $data = get_scenario_full_details($db, $id);
        
        if ($data) {
            echo json_encode($data);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Scénář nenalezen']);
        }
    } catch (Exception $e) {
        error_log("API Error get_scenario: " . $e->getMessage());
        http_response_code(500);
        echo json_encode(['error' => 'Chyba serveru při načítání dat.']);
    }
} else {
    http_response_code(400);
    echo json_encode(['error' => 'Chybějící ID']);
}
exit;
?>