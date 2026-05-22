<?php

namespace App\Service;

use App\Repository\ScenarioRepository;
use App\Domain\Scenario\SaveScenarioDTO;
use App\Domain\Scenario\ScenarioResultDTO;
use App\Domain\Scenario\Scenario;
use App\Domain\Character\CharacterResultDTO;
use App\Exception\ValidationException;
use PDO;
use PDOException;
use RuntimeException;

/**
 * Provides business logic for managing AR Scenarios.
 */
class ScenarioService
{
    /**
     * @param ScenarioRepository $repository Data access object for scenarios
     * @param PDO $db The database connection used for transaction management
     */
    public function __construct(private ScenarioRepository $repository, private PDO $db)
    {
    }

    /**
     * Retrieves all scenarios (without character details).
     *
     * @return ScenarioResultDTO[] Array of scenario DTOs
     */
    public function getAllScenarios(): array
    {
        $scenarios = $this->repository->getAll();

        return array_map(function (Scenario $scenario) {
            return new ScenarioResultDTO($scenario->id, $scenario->name);
        }, $scenarios);
    }

    /**
     * Retrieves full details for a specific scenario, including its linked characters.
     *
     * @param int $id The scenario ID
     * @return ScenarioResultDTO Safe scenario data object
     * @throws ValidationException If the scenario is not found
     */
    public function getScenarioFull(int $id): ScenarioResultDTO
    {
        $scenario = $this->repository->getById($id);
        if (!$scenario) {
            throw new ValidationException("Scénář nenalezen", 404);
        }

        $characterEntities = $this->repository->getCharactersForScenario($id);

        $characterDTOs = array_map(function ($char) {
            return new CharacterResultDTO(
                $char->id,
                $char->name,
                $char->description,
                $char->intro,
                $char->media,
                $char->typeOfMedia,
                $char->marker,
                $char->createdBy,
                $char->animIdle,
                $char->animTalk,
                $char->animSpecial
            );
        }, $characterEntities);

        return new ScenarioResultDTO(
            $scenario->id,
            $scenario->name,
            $characterDTOs,
            $scenario->createdBy
        );
    }

    /**
     * Validates scenario data before saving.
     *
     * @param SaveScenarioDTO $dto Data to validate
     * @throws ValidationException If validation fails
     */
    private function validateScenario(SaveScenarioDTO $dto): void
    {
        if (empty(trim($dto->name))) {
            throw new ValidationException("Název scénáře je povinný.", 400);
        }

        if (strlen($dto->name) > 32) { // Changed to match your DB Schema (VARCHAR 32)
            throw new ValidationException("Název scénáře je příliš dlouhý (max 32 znaků).", 400);
        }

        if (empty($dto->characterIds)) {
            throw new ValidationException("Musíte vybrat alespoň jednu postavu.", 400);
        }

        $nameExists = $this->repository->getByName($dto->name);
        if ($nameExists !== null && $nameExists->id !== $dto->id) {
            throw new ValidationException("Scénář s tímto jménem již existuje.", 400);
        }
    }

    /**
     * Saves a scenario and synchronizes its linked characters.
     *
     * @param SaveScenarioDTO $dto Data transfer object
     * @param int $currentUserId The ID of the user performing the action
     * @return int The ID of the saved scenario
     * @throws ValidationException On user validation errors or access denial
     * @throws RuntimeException On database transaction failures
     */
    public function saveScenario(SaveScenarioDTO $dto, int $currentUserId): int
    {
        $this->validateScenario($dto);

        // Permissions check
        $hasGlobalEdit = hasPermission('editScenarios');
        $hasOwnEdit = hasPermission('editOwnScenarios');

        if (!$hasGlobalEdit && !$hasOwnEdit) {
            throw new ValidationException("Nemáte oprávnění spravovat scénáře.", 403);
        }

        try {
            $this->db->beginTransaction();

            if ($dto->id > 0) {
                $existingScenario = $this->repository->getById($dto->id);
                if (!$existingScenario) {
                    throw new ValidationException("Scénář nenalezen.", 404);
                }

                // --- BACKEND SECURITY: AUTHORIZATION CHECK ---
                if (!$hasGlobalEdit && $existingScenario->createdBy !== $currentUserId) {
                    throw new ValidationException("Nemáte oprávnění upravovat tento scénář.", 403);
                }

                $scenario = new Scenario($dto->id, trim($dto->name), $existingScenario->createdBy);
                $this->repository->update($scenario);
                $scenarioId = $dto->id;
            } else {
                $scenario = new Scenario(null, trim($dto->name), $currentUserId);
                $scenarioId = $this->repository->create($scenario);
            }

            $this->repository->syncCharacters($scenarioId, $dto->characterIds);

            $this->db->commit();
            return $scenarioId;
        } catch (ValidationException $e) {
            $this->db->rollBack();
            throw $e;
        } catch (PDOException $e) {
            $this->db->rollBack();
            error_log("Chyba při ukládání scénáře: " . $e->getMessage());
            throw new RuntimeException("Chyba databáze: Nepodařilo se uložit scénář.", 500);
        }
    }

    /**
     * Deletes a scenario.
     *
     * @param int $id The scenario ID
     * @param int $currentUserId The ID of the user requesting deletion
     * @throws ValidationException If access is denied or scenario is not found
     * @throws RuntimeException On database failures
     */
    public function deleteScenario(int $id, int $currentUserId): void
    {
        $scenario = $this->repository->getById($id);
        if (!$scenario) {
            throw new ValidationException("Scénář nenalezen.", 404);
        }

        // --- BACKEND SECURITY: AUTHORIZATION CHECK ---
        $hasGlobalEdit = hasPermission('editScenarios');
        $hasOwnEdit = hasPermission('editOwnScenarios');

        if (!$hasGlobalEdit) {
            if (!$hasOwnEdit || $scenario->createdBy !== $currentUserId) {
                throw new ValidationException("Nemáte oprávnění smazat tento scénář.", 403);
            }
        }

        try {
            $this->db->beginTransaction();
            $this->repository->delete($id);
            $this->db->commit();
        } catch (PDOException $e) {
            $this->db->rollBack();
            error_log("Chyba při mazání scénáře: " . $e->getMessage());
            throw new RuntimeException("Chyba databáze: Nepodařilo se smazat scénář.", 500);
        }
    }
}
