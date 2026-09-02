<?php

declare(strict_types=1);

use App\Database;
use App\Service\DocumentTextExtractor;
use App\Service\EmbeddingClient;
use App\Service\RecursiveCharacterTextSplitter;
require_once __DIR__ . '/../vendor/autoload.php';

$config = require __DIR__ . '/../config/config.php';
$db = Database::getConnection($config);
$lockAcquired = false;

/** @return never */
function provisioningFailure(string $message): void
{
    fwrite(STDERR, "[provisioning] {$message}\n");
    exit(1);
}

function bundledPath(string $relativePath): string
{
    $root = realpath(__DIR__);
    $path = realpath(__DIR__ . '/' . ltrim($relativePath, '/'));
    if ($root === false || $path === false || !str_starts_with($path, $root . DIRECTORY_SEPARATOR)) {
        throw new RuntimeException("Bundled file does not exist or is outside default_data: {$relativePath}");
    }
    return $path;
}

function copyBundledFile(string $source, string $subdirectory, string $name): string
{
    $directory = __DIR__ . '/../uploads/' . $subdirectory;
    if (!is_dir($directory) && !mkdir($directory, 0775, true) && !is_dir($directory)) {
        throw new RuntimeException("Could not create upload directory: {$directory}");
    }
    $destination = $directory . '/' . $name;
    if (!copy($source, $destination)) {
        throw new RuntimeException("Could not copy bundled file: {$source}");
    }
    return '/uploads/' . $subdirectory . '/' . $name;
}

try {
    $lockAcquired = (int)$db->query("SELECT GET_LOCK('ar_museum_default_provisioning', 30)")->fetchColumn() === 1;
    if (!$lockAcquired) {
        throw new RuntimeException('Could not acquire the database provisioning lock.');
    }

    if ((int)$db->query('SELECT COUNT(*) FROM characters')->fetchColumn() !== 0) {
        fwrite(STDOUT, "[provisioning] Characters already exist; default data was not loaded.\n");
        exit(0);
    }

    $json = file_get_contents(__DIR__ . '/default_data.json');
    $defaults = json_decode((string)$json, true, 512, JSON_THROW_ON_ERROR);
    $exhibitionName = trim((string)($defaults['default_exhibition_name'] ?? ''));
    $programName = trim((string)($defaults['default_program_name'] ?? ''));
    $characters = $defaults['characters'] ?? null;
    $documents = $defaults['rag_documents'] ?? null;
    if ($exhibitionName === '' || $programName === '' || !is_array($characters) || count($characters) !== 3) {
        throw new RuntimeException('default_data.json must define exhibition/program names and exactly three characters.');
    }
    if (!is_array($documents)) {
        throw new RuntimeException('default_data.json must define rag_documents.');
    }

    $adminId = (int)$db->query('SELECT id FROM users WHERE role_id = 1 ORDER BY id LIMIT 1')->fetchColumn();
    if ($adminId < 1) {
        throw new RuntimeException('No administrator account exists for ownership of the default data.');
    }

    $extractor = new DocumentTextExtractor();
    $splitter = new RecursiveCharacterTextSplitter(
        (int)$config['rag']['chunk_size'],
        (int)$config['rag']['chunk_overlap']
    );
    $embeddingClient = new EmbeddingClient($config);

    $preparedCharacters = [];
    foreach ($characters as $key => $character) {
        if (!is_array($character)) {
            throw new RuntimeException("Invalid character definition: {$key}");
        }
        $name = trim((string)($character['name'] ?? ''));
        $greeting = trim((string)($character['greeting'] ?? ''));
        $prompt = trim((string)($character['system_prompt'] ?? ''));
        $asset = $character['asset'] ?? [];
        $type = (string)($asset['type'] ?? '');
        if ($name === '' || $greeting === '' || $prompt === '' || !is_array($asset)) {
            throw new RuntimeException("Character {$key} is missing required fields.");
        }

        $safeKey = preg_replace('/[^a-z0-9_-]/i', '_', (string)$key);
        $markerSource = bundledPath((string)($character['marker'] ?? ''));
        $markerExtension = strtolower(pathinfo($markerSource, PATHINFO_EXTENSION));
        $markerPath = copyBundledFile($markerSource, 'markers', "default_{$safeKey}.{$markerExtension}");
        // Provisioning must not delay Apache startup when the optional chat model is offline.
        // Curator edits still use GreetingTranslationService; bundled greetings remain usable in every locale.
        $translations = array_fill_keys(array_keys($config['localization']['locales']), $greeting);

        if ($type === 'glb') {
            $mediaSource = bundledPath((string)($asset['src'] ?? ''));
            $mediaPath = copyBundledFile($mediaSource, 'media', "default_{$safeKey}.glb");
            $states = $asset['states'] ?? [];
            $preparedCharacters[] = [
                'name' => $name, 'prompt' => $prompt, 'greeting' => $greeting,
                'translations' => $translations, 'media' => $mediaPath, 'type' => 'model',
                'marker' => $markerPath, 'anim_idle' => $states['idle'] ?? null,
                'anim_talk' => $states['talk'] ?? null, 'anim_special' => $states['special'] ?? null,
                'video_talk' => null, 'video_special' => null,
                'markerOrientation' => 'stand',
                'greenscreen' => 0,
            ];
            continue;
        }

        // Support mp4/webm with optional greenscreen flag
        if (!in_array($type, ['webm', 'mp4'], true)) {
            throw new RuntimeException("Unsupported asset type for {$name}: {$type}");
        }
        $states = $asset['states'] ?? [];
        $idleSource = bundledPath((string)($states['idle'] ?? ''));
        $talkSource = bundledPath((string)($states['talk'] ?? ''));
        $specialSource = bundledPath((string)($states['special'] ?? ''));
        $preparedCharacters[] = [
            'name' => $name, 'prompt' => $prompt, 'greeting' => $greeting,
            'translations' => $translations,
            'media' => copyBundledFile($idleSource, 'media', "default_{$safeKey}_idle.{$type}"),
            'type' => 'video', 'marker' => $markerPath,
            'anim_idle' => null, 'anim_talk' => null, 'anim_special' => null,
            'video_talk' => copyBundledFile($talkSource, 'media', "default_{$safeKey}_talk.{$type}"),
            'video_special' => copyBundledFile($specialSource, 'media', "default_{$safeKey}_special.{$type}"),
            'markerOrientation' => 'stand',
            'greenscreen' => isset($asset['greenscreen']) && $asset['greenscreen'] === true ? 1 : 0,
        ];
    }

    $preparedDocuments = [];
    foreach ($documents as $document) {
        if (!is_array($document) || empty($document['path'])) {
            throw new RuntimeException('Each RAG document must define path and scope.');
        }
        $source = bundledPath((string)$document['path']);
        $extension = strtolower(pathinfo($source, PATHINFO_EXTENSION));
        $text = $extractor->extract($source, $extension);
        $chunks = $splitter->split($text);
        if ($chunks === []) {
            throw new RuntimeException("RAG document produced no chunks: {$source}");
        }
        $preparedDocuments[] = [
            'source' => $source,
            'original_name' => basename($source),
            'extension' => $extension,
            'scope' => (string)($document['scope'] ?? 'global'),
            'chunks' => $chunks,
            'embeddings' => $embeddingClient->embedBatch($chunks),
            'hash' => hash_file('sha256', $source),
            'size' => filesize($source),
        ];
    }

    $db->beginTransaction();
    $insertExhibition = $db->prepare('INSERT INTO programs (name, onGround, createdBy) VALUES (?, ?, ?)');
    $insertExhibition->execute([$exhibitionName, !empty($defaults['markers_on_ground']) ? 1 : 0, $adminId]);
    $exhibitionId = (int)$db->lastInsertId();

    // The JSON's default program maps to the app's current Version entity.
    $insertProgram = $db->prepare('INSERT INTO scenarios (name, createdBy) VALUES (?, ?)');
    $insertProgram->execute([$programName, $adminId]);
    $programId = (int)$db->lastInsertId();
    $db->prepare('INSERT INTO program_scenario (program_id, scenario_id) VALUES (?, ?)')
        ->execute([$exhibitionId, $programId]);

    $insertCharacter = $db->prepare(
        'INSERT INTO characters
         (name, description, intro, intro_translations, media, typeOfMedia, marker, createdBy,
          anim_idle, anim_talk, anim_special, video_talk, video_special, markerOrientation, greenscreen)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    );
    $linkCharacter = $db->prepare('INSERT INTO scenario_character (scenario_id, character_id) VALUES (?, ?)');
    foreach ($preparedCharacters as $character) {
        $insertCharacter->execute([
            $character['name'], $character['prompt'], $character['greeting'],
            json_encode($character['translations'], JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
            $character['media'], $character['type'], $character['marker'], $adminId,
            $character['anim_idle'], $character['anim_talk'], $character['anim_special'],
            $character['video_talk'], $character['video_special'],
            $character['markerOrientation'] ?? 'stand',
            $character['greenscreen'] ?? 0,
        ]);
        $linkCharacter->execute([$programId, (int)$db->lastInsertId()]);
    }

    $insertDocument = $db->prepare(
        'INSERT INTO knowledge_documents
         (original_name, stored_path, mime_type, file_size, content_hash, uploaded_by, exhibition_id)
         VALUES (?, ?, ?, ?, ?, ?, ?)'
    );
    $insertChunk = $db->prepare(
        'INSERT INTO knowledge_chunks (document_id, chunk_index, content, embedding)
         VALUES (?, ?, ?, VEC_FromText(?))'
    );
    $finfo = new finfo(FILEINFO_MIME_TYPE);
    foreach ($preparedDocuments as $index => $document) {
        $storedName = sprintf('default_%02d_%s', $index + 1, preg_replace('/[^A-Za-z0-9._-]/', '_', $document['original_name']));
        $webPath = copyBundledFile($document['source'], 'knowledge', $storedName);
        $storedPath = ltrim($webPath, '/');
        $scopeId = $document['scope'] === 'exhibition' ? $exhibitionId : null;
        $insertDocument->execute([
            $document['original_name'], $storedPath, $finfo->file($document['source']) ?: 'application/octet-stream',
            $document['size'], $document['hash'], $adminId, $scopeId,
        ]);
        $documentId = (int)$db->lastInsertId();
        foreach ($document['chunks'] as $chunkIndex => $content) {
            $insertChunk->execute([
                $documentId, $chunkIndex, $content,
                json_encode($document['embeddings'][$chunkIndex], JSON_THROW_ON_ERROR),
            ]);
        }
    }

    $db->commit();
    fwrite(STDOUT, sprintf(
        "[provisioning] Loaded exhibition '%s', program '%s', %d characters and %d RAG documents.\n",
        $exhibitionName,
        $programName,
        count($preparedCharacters),
        count($preparedDocuments)
    ));
} catch (Throwable $e) {
    if ($db->inTransaction()) {
        $db->rollBack();
    }
    provisioningFailure($e->getMessage());
} finally {
    if ($lockAcquired) {
        $db->query("SELECT RELEASE_LOCK('ar_museum_default_provisioning')");
    }
}
