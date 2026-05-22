<?php

namespace App\Service;

use App\Repository\ProgramRepository;
use App\Domain\Program\SaveProgramDTO;
use App\Domain\Program\ProgramResultDTO;
use App\Domain\Program\Program;
use App\Domain\Scenario\ScenarioResultDTO;
use App\Exception\ValidationException;
use PDO;
use PDOException;
use RuntimeException;

/**
 * Provides business logic for managing Programs (collections of scenarios).
 */
class ProgramService
{
    /**
     * @param ProgramRepository $repository Data access object for programs
     * @param PDO $db The database connection used for transaction management
     */
    public function __construct(private ProgramRepository $repository, private PDO $db)
    {
    }

    /**
     * Retrieves all programs (without nested scenarios).
     *
     * @return ProgramResultDTO[] Array of program DTOs
     */
    public function getAllPrograms(): array
    {
        $programs = $this->repository->getAll();

        return array_map(function (Program $program) {
            return new ProgramResultDTO($program->id, $program->name, $program->onGround);
        }, $programs);
    }

    /**
     * Retrieves full details for a specific program, including its linked scenarios.
     *
     * @param int $id The program ID
     * @return ProgramResultDTO Safe program data object
     * @throws ValidationException If the program is not found
     */
    public function getProgramFull(int $id): ProgramResultDTO
    {
        $program = $this->repository->getById($id);
        if (!$program) {
            throw new ValidationException("Program nenalezen.", 404);
        }

        $scenarioEntities = $this->repository->getScenariosForProgram($id);

        $scenarioDTOs = array_map(function ($scenario) {
            return new ScenarioResultDTO($scenario->id, $scenario->name);
        }, $scenarioEntities);

        return new ProgramResultDTO(
            $program->id,
            $program->name,
            $program->onGround,
            $scenarioDTOs,
            $program->createdBy // Nyní vracíme i autora pro frontend
        );
    }

    /**
     * Validates program data before saving.
     *
     * @param SaveProgramDTO $dto Data to validate
     * @throws ValidationException If validation fails
     */
    private function validateProgram(SaveProgramDTO $dto): void
    {
        if (empty(trim($dto->name))) {
            throw new ValidationException("Název programu je povinný.", 400);
        }
        if (strlen($dto->name) > 32) { // Změněno na 32, aby to odpovídalo DB
            throw new ValidationException("Název programu je příliš dlouhý (max 32 znaků).", 400);
        }
        if (empty($dto->scenarioIds)) {
            throw new ValidationException("Musíte vybrat alespoň jeden scénář.", 400);
        }

        $nameExists = $this->repository->getByName($dto->name);
        if ($nameExists !== null && $nameExists->id !== $dto->id) {
            throw new ValidationException("Program s tímto jménem již existuje.", 400);
        }
    }

    /**
     * Saves a program and synchronizes its linked scenarios.
     *
     * @param SaveProgramDTO $dto Data transfer object
     * @param int $currentUserId ID of the user performing the request
     * @return int The ID of the saved program
     * @throws ValidationException On user validation errors or permissions issues
     * @throws RuntimeException On database transaction failures
     */
    public function saveProgram(SaveProgramDTO $dto, int $currentUserId): int
    {
        $this->validateProgram($dto);

        // Permissions check
        $hasGlobalEdit = hasPermission('editPrograms');
        $hasOwnEdit = hasPermission('editOwnPrograms');

        if (!$hasGlobalEdit && !$hasOwnEdit) {
            throw new ValidationException("Nemáte oprávnění spravovat programy.", 403);
        }

        try {
            $this->db->beginTransaction();

            if ($dto->id > 0) {
                $existingProgram = $this->repository->getById($dto->id);
                if (!$existingProgram) {
                    throw new ValidationException("Program nenalezen.", 404);
                }

                // --- BACKEND SECURITY: AUTHORIZATION CHECK ---
                if (!$hasGlobalEdit && $existingProgram->createdBy !== $currentUserId) {
                    throw new ValidationException("Nemáte oprávnění upravovat tento program.", 403);
                }

                $program = new Program($dto->id, trim($dto->name), $dto->onGround, $existingProgram->createdBy);
                $this->repository->update($program);
                $programId = $dto->id;
            } else {
                $program = new Program(null, trim($dto->name), $dto->onGround, $currentUserId);
                $programId = $this->repository->create($program);
            }

            $this->repository->syncScenarios($programId, $dto->scenarioIds);

            $this->db->commit();
            return $programId;
        } catch (ValidationException $e) {
            $this->db->rollBack();
            throw $e;
        } catch (PDOException $e) {
            $this->db->rollBack();
            error_log("Chyba při ukládání programu: " . $e->getMessage());
            throw new RuntimeException("Chyba databáze: Nepodařilo se uložit program.", 500);
        }
    }

    /**
     * Deletes a program.
     *
     * @param int $id The program ID
     * @param int $currentUserId ID of the user performing the request
     * @throws ValidationException If the program is not found or user lacks permission
     * @throws RuntimeException On database failures
     */
    public function deleteProgram(int $id, int $currentUserId): void
    {
        $program = $this->repository->getById($id);
        if (!$program) {
            throw new ValidationException("Program nenalezen.", 404);
        }

        // --- BACKEND SECURITY: AUTHORIZATION CHECK ---
        $hasGlobalEdit = hasPermission('editPrograms');
        $hasOwnEdit = hasPermission('editOwnPrograms');

        if (!$hasGlobalEdit) {
            if (!$hasOwnEdit || $program->createdBy !== $currentUserId) {
                throw new ValidationException("Nemáte oprávnění smazat tento program.", 403);
            }
        }

        try {
            $this->db->beginTransaction();
            $this->repository->delete($id);
            $this->db->commit();
        } catch (PDOException $e) {
            $this->db->rollBack();
            throw new RuntimeException("Chyba databáze: Nepodařilo se smazat program.", 500);
        }
    }
}
