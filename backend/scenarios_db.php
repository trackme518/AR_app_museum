<?php

require_once __DIR__ . '/validations/validate_scenario.php';

function get_all_scenarios($db) {
    $query = $db->query("SELECT id, name FROM scenarios ORDER BY name ASC");
    return $query->fetchAll(PDO::FETCH_ASSOC);
}

function get_scenario_by_id(PDO $db, int $id) {
    $stmt = $db->prepare("SELECT * FROM scenarios WHERE id = :id");
    $stmt->execute([':id' => $id]);
    $scenario = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$scenario) return null;

    $stmtChars = $db->prepare("SELECT character_id FROM scenario_character WHERE scenario_id = :id");
    $stmtChars->execute([':id' => $id]);
    
    $scenario['character_ids'] = $stmtChars->fetchAll(PDO::FETCH_COLUMN);

    return $scenario;
}

function delete_scenario($id, $db) {
    try {
        $db->beginTransaction();
        
        $stmt = $db->prepare("DELETE FROM scenario_character WHERE scenario_id = :id");
        $stmt->execute([':id' => $id]);

        $stmt = $db->prepare("DELETE FROM scenarios WHERE id = :id");
        $stmt->execute([':id' => $id]);

        $db->commit();
        return true;
    } catch (PDOException $e) {
        $db->rollBack();
        error_log("Chyba při mazání scénáře: " . $e->getMessage());
        return "Chyba databáze: Nepodařilo se smazat scénář.";
    }
}

function save_scenario($data, $db) {
    $validationErrors = validate_scenario_data($data);
    
    if (!empty($validationErrors)) {
        return $validationErrors[0];
    }

    $id = (int)($data['id'] ?? 0);
    $name = trim($data['name'] ?? '');
    
    $characterIds = isset($data['characters']) && is_array($data['characters']) 
        ? array_unique(array_filter($data['characters'])) 
        : [];

    try {
        $db->beginTransaction();

        if ($id > 0) {
            // UPDATE
            $stmt = $db->prepare("UPDATE scenarios SET name = :name WHERE id = :id");
            $stmt->execute([':name' => $name, ':id' => $id]);

            $stmt = $db->prepare("DELETE FROM scenario_character WHERE scenario_id = :id");
            $stmt->execute([':id' => $id]);

        } else {
            // INSERT
            $stmt = $db->prepare("INSERT INTO scenarios (name) VALUES (:name)");
            $stmt->execute([':name' => $name]);
            $id = $db->lastInsertId();
        }

        // new connections to character
        if (!empty($characterIds)) {
            $sql = "INSERT INTO scenario_character (scenario_id, character_id) VALUES (:scenario_id, :character_id)";
            $stmt = $db->prepare($sql);

            foreach ($characterIds as $charId) {
                if (empty($charId)) continue;
                
                $stmt->execute([
                    ':scenario_id' => $id,
                    ':character_id' => $charId
                ]);
            }
        }

        $db->commit();
        return true;

    } catch (PDOException $e) {
        $db->rollBack();
        error_log("Chyba při ukládání scénáře: " . $e->getMessage());
        return "Chyba databáze: Nepodařilo se uložit scénář.";
    }
}
?>