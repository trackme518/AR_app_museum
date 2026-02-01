<?php
require_once __DIR__ . '/validations/validate_character.php';

if (!defined('APP_RUNNING')) {
    header("HTTP/1.1 403 Forbidden");
    die("Direct access denied.");
}

function get_all_characters($db) {
    $query = $db->query("SELECT id, name FROM characters ORDER BY name ASC");
    return $query->fetchAll(PDO::FETCH_ASSOC);
}

function get_character_by_id($db, $id) {
    $query = $db->prepare("SELECT * FROM characters WHERE id = :id");
    $query->execute([':id' => $id]);
    return $query->fetch(PDO::FETCH_ASSOC);
}


function upload_media($file) {
    if (!isset($file) || $file['error'] === UPLOAD_ERR_NO_FILE) return null;
    if ($file['error'] !== UPLOAD_ERR_OK) return "Chyba při přenosu souboru.";

    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mime = $finfo->file($file['tmp_name']);
    
    $mediaType = '';
    $extension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));

    if (str_starts_with($mime, 'image/')) $mediaType = 'photo';
    elseif (str_starts_with($mime, 'video/')) $mediaType = 'video';
    else return "Nepodporovaný formát.";

    $allowedExts = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'mp4', 'webm', 'mov'];
    if (!in_array($extension, $allowedExts)) return "Nepodporovaná přípona.";

    $uploadDir = __DIR__ . '/../uploads/'; 
    $webPath = '/uploads/';

    if (!is_dir($uploadDir)) {
        if (!mkdir($uploadDir, 0755, true)) return "Nepodařilo se vytvořit složku pro upload.";
    }

    $fileName = uniqid('media_', true) . '.' . $extension;
    $targetFile = $uploadDir . $fileName;

    if (move_uploaded_file($file['tmp_name'], $targetFile)) {
        return ['path' => $webPath . $fileName, 'type' => $mediaType];
    }
    return "Nepodařilo se uložit soubor.";
}

function delete_character($id, $db) {
    $character = get_character_by_id($db, $id);
    
    if (!$character) {
        return "Postava neexistuje.";
    }

    try {
        $stmt = $db->prepare("DELETE FROM characters WHERE id = :id");
        $stmt->execute([':id' => $id]);

        if (!empty($character['media'])) {
            $filePath = __DIR__ . '/..' . $character['media'];
            if (file_exists($filePath) && is_file($filePath)) {
                @unlink($filePath);
            }
        }

        return true;

    } catch (PDOException $e) {
        error_log("Chyba při mazání postavy: " . $e->getMessage());
        return "Chyba databáze: Nepodařilo se smazat postavu (možná je použita ve scénáři).";
    }
}

function save_character($data, $files, $db) {
    if (function_exists('validate_character_data')) {
        $validationErrors = validate_character_data($data, $files);
        if (!empty($validationErrors)) return $validationErrors[0];
    }

    $id = (int)($data['id'] ?? 0);
    $name = trim($data['name'] ?? '');
    $description = trim($data['description'] ?? '');
    $intro = trim($data['intro'] ?? '');
    
    $uploadResult = upload_media($files['photo'] ?? null);
    if (is_string($uploadResult)) return $uploadResult;

    $hasNewFile = is_array($uploadResult);
    $mediaPath = $hasNewFile ? $uploadResult['path'] : null;
    $mediaType = $hasNewFile ? $uploadResult['type'] : null;

    $oldMediaToDelete = null;

    try {
        $db->beginTransaction();

        if ($id > 0) {
            // --- UPDATE ---
            if ($hasNewFile) {
                $existingChar = get_character_by_id($db, $id);
                if ($existingChar && !empty($existingChar['media'])) {
                    $oldMediaToDelete = $existingChar['media'];
                }

                $sql = "UPDATE characters 
                        SET name = :name, description = :description, intro = :intro, 
                            media = :media, typeOfMedia = :typeOfMedia 
                        WHERE id = :id";
                $params = [
                    ':name' => $name, ':description' => $description, ':intro' => $intro,
                    ':media' => $mediaPath, ':typeOfMedia' => $mediaType, ':id' => $id
                ];
            } else {
                $sql = "UPDATE characters 
                        SET name = :name, description = :description, intro = :intro 
                        WHERE id = :id";
                $params = [
                    ':name' => $name, ':description' => $description, ':intro' => $intro,
                    ':id' => $id
                ];
            }
            $stmt = $db->prepare($sql);
            $stmt->execute($params);

        } else {
            // --- INSERT ---
            $sql = "INSERT INTO characters (name, description, intro, media, typeOfMedia) 
                    VALUES (:name, :description, :intro, :media, :typeOfMedia)";
            $stmt = $db->prepare($sql);
            $stmt->execute([
                ':name' => $name, ':description' => $description, ':intro' => $intro,
                ':media' => $mediaPath, ':typeOfMedia' => $mediaType
            ]);
        }

        $db->commit();

        if ($oldMediaToDelete) {
            $oldFileAbsPath = __DIR__ . '/..' . $oldMediaToDelete;
            if (file_exists($oldFileAbsPath) && is_file($oldFileAbsPath)) {
                @unlink($oldFileAbsPath);
            }
        }

        return true;

    } catch (PDOException $e) {
        $db->rollBack();

        if ($hasNewFile && $mediaPath) {
            $newFileAbsPath = __DIR__ . '/..' . $mediaPath;
            if (file_exists($newFileAbsPath) && is_file($newFileAbsPath)) {
                @unlink($newFileAbsPath);
            }
        }

        error_log("DB Error save_character: " . $e->getMessage());
        return "Chyba databáze: Nepodařilo se uložit data.";
    }
}
?>