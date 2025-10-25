<?php
require 'db.php';
header('Content-Type: application/json');

$action = $_GET['action'] ?? '';

switch ($action) {
    case 'addCharacter':
        $data = json_decode(file_get_contents("php://input"), true);
        if (!$data) {
            echo json_encode(['error' => 'Neplatná data']);
            die;
        }

        $query = $db->prepare("INSERT INTO characters (name, media, typeOfMedia, description, intro)
                              VALUES (:name, :media, :typeOfMedia, :description, :intro)");
        $query->execute([
            ':name' => $data['name'],
            ':media' => $data['media'],
            ':typeOfMedia' => $data['typeOfMedia'],
            ':description' => $data['description'],
            ':intro' => $data['intro']
        ]);
        echo json_encode(['status' => 'ok']);
        break;

    default:
        echo json_encode(['error' => 'Neznámá akce']);
        break;
}
?>
