<?php
require_once __DIR__ . '/validations/validate_character.php';

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

    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime = finfo_file($finfo, $file['tmp_name']);
    
    $mediaType = '';
    $extension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));

    if (str_starts_with($mime, 'image/')) $mediaType = 'photo';
    elseif (str_starts_with($mime, 'video/')) $mediaType = 'video';
    else return "Nepodporovaný formát.";

    $allowedExts = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'mp4', 'webm', 'mov'];
    if (!in_array($extension, $allowedExts)) return "Nepodporovaná přípona.";

    $uploadDir = __DIR__ . '/../public/uploads/'; 
    $webPath = '/uploads/';

    if (!is_dir($uploadDir)) mkdir($uploadDir, 0777, true);

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
            $filePath = __DIR__ . '/../public' . $character['media'];
            if (file_exists($filePath)) {
                @unlink($filePath);
            }
        }

        return true;

    } catch (PDOException $e) {
        error_log("Chyba při mazání postavy: " . $e->getMessage());
        return "Chyba databáze: Nepodařilo se smazat postavu.";
    }
}


function save_character($data, $files, $db) {
    $validationErrors = validate_character_data($data, $files);
    if (!empty($validationErrors)) return $validationErrors[0];

    $id = (int)($data['id'] ?? 0);
    $name = trim($data['name']);
    $description = trim($data['description']);
    $intro = trim($data['intro']);
    
    $uploadResult = upload_media($files['photo'] ?? null);
    if (is_string($uploadResult)) return $uploadResult;

    $mediaPath = null;
    $mediaType = null;
    $hasNewFile = is_array($uploadResult);

    if ($hasNewFile) {
        $mediaPath = $uploadResult['path'];
        $mediaType = $uploadResult['type'];
    }

    $oldMediaToDelete = null;
    if ($id > 0 && $hasNewFile) {
        $existingChar = get_character_by_id($db, $id);
        if ($existingChar && !empty($existingChar['media'])) {
            $oldMediaToDelete = $existingChar['media'];
        }
    }

    try {
        $db->beginTransaction();

        if ($id > 0) {
            // UPDATE
            if ($hasNewFile) {
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
            // INSERT
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
            $oldFileAbsPath = __DIR__ . '/../public' . $oldMediaToDelete;
            if (file_exists($oldFileAbsPath)) {
                unlink($oldFileAbsPath);
            }
        }

        return true;

    } catch (PDOException $e) {
        $db->rollBack();

        if ($hasNewFile && $mediaPath) {
            $newFileAbsPath = __DIR__ . '/../public' . $mediaPath;
            if (file_exists($newFileAbsPath)) {
                unlink($newFileAbsPath);
            }
        }

        error_log("DB Error save_character: " . $e->getMessage());
        return "Chyba databáze: Nepodařilo se uložit data.";
    }
}
?>