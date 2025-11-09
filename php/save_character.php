<?php

require __DIR__ . '/db.php';
header('Content-Type: application/json');

$action = $_GET['action'] ?? '';

switch ($action) {
    case 'addCharacter':
        $data = json_decode(file_get_contents("php://input"), true);
        if (!$data) {
            echo json_encode(['error' => 'Neplatná data']);
            die;
        }

        if (!isset($data['name']) || trim($data['name']) === '') {
            echo json_encode(['error' => 'Neplatné jméno postavy']);
            die;
        }
        if (!isset($data['media']) || trim($data['media']) === '') {
            echo json_encode(['error' => 'Chybí media pro postavu']);
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

    case 'updateCharacter':
        $data = json_decode(file_get_contents("php://input"), true);
        if (!$data || !isset($data['id'])) {
            echo json_encode(['error' => 'Neplatná data']);
            die;
        }

        if (!isset($data['name']) || trim($data['name']) === '') {
            echo json_encode(['error' => 'Neplatné jméno postavy']);
            die;
        }

        $query = $db->prepare("UPDATE characters SET name = :name, media = :media, typeOfMedia = :typeOfMedia,
                              description = :description, intro = :intro WHERE id = :id");
        $query->execute([
            ':id' => $data['id'],
            ':name' => $data['name'],
            ':media' => $data['media'],
            ':typeOfMedia' => $data['typeOfMedia'],
            ':description' => $data['description'],
            ':intro' => $data['intro']
        ]);
        echo json_encode(['status' => 'ok']);
        break;

    case 'getCharacter':
        $id = intval($_GET['id'] ?? 0);
        if ($id <= 0) {
            echo json_encode(['error' => 'Neplatné ID']);
            die;
        }

        $query = $db->prepare("SELECT * FROM characters WHERE id = :id");
        $query->execute([':id' => $id]);
        $character = $query->fetch(PDO::FETCH_ASSOC);

        if ($character) {
            echo json_encode($character);
        } else {
            echo json_encode(['error' => 'Postava nenalezena']);
        }
        break;

    default:
        echo json_encode(['error' => 'Neznámá akce']);
        break;
}

?>