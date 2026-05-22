<?php

namespace App\Repository;

use PDO;
use App\Domain\Program\Program;
use App\Domain\Scenario\Scenario;

/**
 * Handles database operations related to the Program entity.
 */
class ProgramRepository
{
    /**
     * @param PDO $db The active database connection
     */
    public function __construct(private PDO $db)
    {
    }

    /**
     * Retrieves all programs from the database.
     *
     * @return Program[] Array of Program entities
     */
    public function getAll(): array
    {
        $stmt = $this->db->query("SELECT * FROM programs ORDER BY name ASC");
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $programs = [];
        foreach ($rows as $row) {
            $programs[] = new Program(
                $row['id'],
                $row['name'],
                (bool)$row['onGround'],
                (int)$row['createdBy']
            );
        }

        return $programs;
    }

    /**
     * Finds a program by its unique identifier.
     *
     * @param int $id The program ID
     * @return Program|null The Program entity or null if not found
     */
    public function getById(int $id): ?Program
    {
        $stmt = $this->db->prepare("SELECT * FROM programs WHERE id = :id");
        $stmt->execute([':id' => $id]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$row) {
            return null;
        }

        return new Program($row['id'], $row['name'], (bool)$row['onGround'], (int)$row['createdBy']);
    }

    /**
     * Finds a program by its name.
     *
     * @param string $name The program name
     * @return Program|null The Program entity or null if not found
     */
    public function getByName(string $name): ?Program
    {
        $stmt = $this->db->prepare("SELECT * FROM programs WHERE name = :name");
        $stmt->execute([':name' => $name]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$row) {
            return null;
        }

        return new Program($row['id'], $row['name'], (bool)$row['onGround'], (int)$row['createdBy']);
    }

    /**
     * Retrieves all scenarios linked to a specific program.
     *
     * @param int $programId The program ID
     * @return Scenario[] Array of Scenario entities
     */
    public function getScenariosForProgram(int $programId): array
    {
        $sql = "SELECT s.* FROM scenarios s 
                JOIN program_scenario ps ON s.id = ps.scenario_id
                WHERE ps.program_id = :program_id
                ORDER BY s.name ASC";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([':program_id' => $programId]);
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
     * Inserts a new program into the database.
     *
     * @param Program $program The Program entity to insert
     * @return int The ID of the newly created program
     */
    public function create(Program $program): int
    {
        $stmt = $this->db->prepare("INSERT INTO programs (name, onGround, createdBy) VALUES (:name, :onGround, :createdBy)");
        $stmt->execute([
            ':name' => $program->name,
            ':onGround' => (int)$program->onGround,
            ':createdBy' => $program->createdBy
        ]);
        return (int)$this->db->lastInsertId();
    }

    /**
     * Updates an existing program's data.
     *
     * @param Program $program The Program entity to update
     */
    public function update(Program $program): void
    {
        $stmt = $this->db->prepare("UPDATE programs SET name = :name, onGround = :onGround, createdBy = :createdBy WHERE id = :id");
        $stmt->execute([
            ':name' => $program->name,
            ':onGround' => (int)$program->onGround,
            ':createdBy' => $program->createdBy,
            ':id' => $program->id
        ]);
    }

    /**
     * Synchronizes the many-to-many relationship between programs and scenarios.
     *
     * @param int $programId The program ID
     * @param array $scenarioIds Array of scenario IDs to link
     */
    public function syncScenarios(int $programId, array $scenarioIds): void
    {
        $stmt = $this->db->prepare("DELETE FROM program_scenario WHERE program_id = :id");
        $stmt->execute([':id' => $programId]);

        if (!empty($scenarioIds)) {
            $sql = "INSERT INTO program_scenario (program_id, scenario_id) VALUES (:program_id, :scenario_id)";
            $stmtInsert = $this->db->prepare($sql);
            foreach ($scenarioIds as $scenarioId) {
                $stmtInsert->execute([
                    ':program_id' => $programId,
                    ':scenario_id' => $scenarioId
                ]);
            }
        }
    }

    /**
     * Deletes a program and its associated scenario links.
     *
     * @param int $id The program ID
     */
    public function delete(int $id): void
    {
        $stmt = $this->db->prepare("DELETE FROM program_scenario WHERE program_id = :id");
        $stmt->execute([':id' => $id]);

        $stmt = $this->db->prepare("DELETE FROM programs WHERE id = :id");
        $stmt->execute([':id' => $id]);
    }
}
