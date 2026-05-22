<?php

namespace App\Repository;

use PDO;
use App\Domain\Scenario\Scenario;
use App\Domain\Character\Character;

/**
 * Handles database operations related to the Scenario entity.
 */
class ScenarioRepository
{
    /**
     * @param PDO $db The active database connection
     */
    public function __construct(private PDO $db)
    {
    }

    /**
     * Retrieves all scenarios from the database.
     *
     * @return Scenario[] Array of Scenario entities
     */
    public function getAll(): array
    {
        $stmt = $this->db->query("SELECT * FROM scenarios ORDER BY name ASC");
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $scenarios = [];
        foreach ($rows as $row) {
            $scenarios[] = new Scenario(
                $row['id'],
                $row['name'],
                (int)$row['createdBy']
            );
        }

        return $scenarios;
    }

    /**
     * Finds a scenario by its unique identifier.
     *
     * @param int $id The scenario ID
     * @return Scenario|null The Scenario entity or null if not found
     */
    public function getById(int $id): ?Scenario
    {
        $stmt = $this->db->prepare("SELECT * FROM scenarios WHERE id = :id");
        $stmt->execute([':id' => $id]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$row) {
            return null;
        }

        return new Scenario(
            $row['id'],
            $row['name'],
            (int)$row['createdBy']
        );
    }

    /**
     * Finds a scenario by its name.
     *
     * @param string $name The scenario name
     * @return Scenario|null The Scenario entity or null if not found
     */
    public function getByName(string $name): ?Scenario
    {
        $stmt = $this->db->prepare("SELECT * FROM scenarios WHERE name = :name");
        $stmt->execute([':name' => $name]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$row) {
            return null;
        }

        return new Scenario(
            $row['id'],
            $row['name'],
            (int)$row['createdBy']
        );
    }

    /**
     * Retrieves all characters linked to a specific scenario.
     *
     * @param int $scenarioId The scenario ID
     * @return Character[] Array of Character entities
     */
    public function getCharactersForScenario(int $scenarioId): array
    {
        $sql = "SELECT c.*
                FROM characters c 
                JOIN scenario_character sc ON c.id = sc.character_id
                WHERE sc.scenario_id = :scenario_id";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([':scenario_id' => $scenarioId]);
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $characters = [];
        foreach ($rows as $row) {
            $characters[] = new Character(
                $row['id'],
                $row['name'],
                $row['description'],
                $row['intro'],
                $row['media'],
                $row['typeOfMedia'],
                $row['marker'],
                $row['createdBy'],
                $row['anim_idle'],
                $row['anim_talk'],
                $row['anim_special']
            );
        }

        return $characters;
    }

    /**
     * Inserts a new scenario into the database.
     *
     * @param Scenario $scenario The Scenario entity to insert
     * @return int The ID of the newly created scenario
     */
    public function create(Scenario $scenario): int
    {
        $stmt = $this->db->prepare("INSERT INTO scenarios (name, createdBy) VALUES (:name, :createdBy)");
        $stmt->execute([':name' => $scenario->name, ':createdBy' => $scenario->createdBy]);
        return (int)$this->db->lastInsertId();
    }

    /**
     * Updates an existing scenario's data.
     *
     * @param Scenario $scenario The Scenario entity to update
     */
    public function update(Scenario $scenario): void
    {
        $stmt = $this->db->prepare("UPDATE scenarios SET name = :name, createdBy = :createdBy WHERE id = :id");
        $stmt->execute([':name' => $scenario->name, ':createdBy' => $scenario->createdBy, ':id' => $scenario->id]);
    }

    /**
     * Synchronizes the many-to-many relationship between scenarios and characters.
     *
     * @param int $scenarioId The scenario ID
     * @param array $characterIds Array of character IDs to link
     */
    public function syncCharacters(int $scenarioId, array $characterIds): void
    {
        $stmt = $this->db->prepare("DELETE FROM scenario_character WHERE scenario_id = :id");
        $stmt->execute([':id' => $scenarioId]);

        if (!empty($characterIds)) {
            $sql = "INSERT INTO scenario_character (scenario_id, character_id) VALUES (:scenario_id, :character_id)";
            $stmtInsert = $this->db->prepare($sql);
            foreach ($characterIds as $charId) {
                $stmtInsert->execute([
                    ':scenario_id' => $scenarioId,
                    ':character_id' => $charId
                ]);
            }
        }
    }

    /**
     * Deletes a scenario and its associated character links.
     *
     * @param int $id The scenario ID
     */
    public function delete(int $id): void
    {
        $stmt = $this->db->prepare("DELETE FROM scenario_character WHERE scenario_id = :id");
        $stmt->execute([':id' => $id]);

        $stmt = $this->db->prepare("DELETE FROM scenarios WHERE id = :id");
        $stmt->execute([':id' => $id]);
    }
}
