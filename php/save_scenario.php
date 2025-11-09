<?php

require __DIR__ . '/db.php';
header('Content-Type: application/json');

$action = $_GET['action'] ?? '';

switch ($action){
    case 'addScenario':
        $data = json_decode(file_get_contents("php://input"), true);
        if (!$data) {
            echo json_encode(['error' => 'Neplatná data']);
            die;
        }

        try {
            $db->beginTransaction();

            if (!isset($data['name']) || trim($data['name']) === '') {
                echo json_encode(['error' => 'Neplatný název scénáře']);
                $db->rollBack();
                die;
            }

            $query = $db->prepare("INSERT INTO scenarios (name) VALUES (:name)");
            $query->execute([
                ':name' => $data['name'],
            ]);
            $scenarioId = $db->lastInsertId();

            $characters = isset($data['characters']) && is_array($data['characters']) ? $data['characters'] : [];

            $query = $db->prepare("INSERT INTO scenario_character (scenario_id, character_id) VALUES (:scenario_id, :character_id)");
            foreach ($characters as $characterId){
                $query->execute([
                    ':scenario_id' => $scenarioId,
                    ':character_id' => $characterId,
                ]);
            }

            $db->commit();
            echo json_encode(['status' => 'ok']);
        } catch (PDOException $e) {
            $db->rollBack();
            echo json_encode(['error' => 'Chyba při ukládání dat: ' . $e->getMessage()]);
            die;
        }

        break;

    case 'updateScenario':
        $data = json_decode(file_get_contents("php://input"), true);
        if (!$data || !isset($data['id'])) {
            echo json_encode(['error' => 'Neplatná data']);
            die;
        }

        try {
            $db->beginTransaction();

            $query = $db->prepare("UPDATE scenarios SET name = :name WHERE id = :id");
            $query->execute([
                ':id' => $data['id'],
                ':name' => $data['name'],
            ]);

            $query = $db->prepare("DELETE FROM scenario_character WHERE scenario_id = :scenario_id");
            $query->execute([':scenario_id' => $data['id']]);

            $characters = isset($data['characters']) && is_array($data['characters']) ? $data['characters'] : [];

            $query = $db->prepare("INSERT INTO scenario_character (scenario_id, character_id) VALUES (:scenario_id, :character_id)");
            foreach ($characters as $characterId){
                $query->execute([
                    ':scenario_id' => $data['id'],
                    ':character_id' => $characterId,
                ]);
            }

            $db->commit();
            echo json_encode(['status' => 'ok']);
        } catch (PDOException $e) {
            $db->rollBack();
            echo json_encode(['error' => 'Chyba při ukládání dat: ' . $e->getMessage()]);
            die;
        }

        break;
        break;

    case 'getScenario':
        $id = intval($_GET['id'] ?? 0);
        if ($id <= 0) {
            echo json_encode(['error' => 'Neplatné ID']);
            die;
        }

        $query = $db->prepare("SELECT * FROM scenarios WHERE id = :id");
        $query->execute([':id' => $id]);
        $scenario = $query->fetch(PDO::FETCH_ASSOC);
        if ($scenario) {
            $query = $db->prepare("SELECT character_id FROM scenario_character WHERE scenario_id = :scenario_id");
            $query->execute([':scenario_id' => $id]);
            $characters = $query->fetchAll(PDO::FETCH_COLUMN);

            $scenario['characters'] = $characters;

            echo json_encode($scenario);
        } else {
            echo json_encode(['error' => 'Scénář nenalezen']);
        }
        break;

    default:
        echo json_encode(['error' => 'Neznámá akce']);
        break;
}

?>