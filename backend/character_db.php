<?php

function get_character_options(PDO $db): array {
    $query = $db->query("SELECT id, name FROM characters");
    return $query->fetchAll(PDO::FETCH_ASSOC);
}

function get_character_by_id(PDO $db, int $id) {
    $query = $db->prepare("SELECT * FROM characters WHERE id = :id");
    $query->bindParam(':id', $id, PDO::PARAM_INT);
    $query->execute();
    return $query->fetch(PDO::FETCH_ASSOC);
}


function save_character($data, $files, $db) {
    $id = (int)($data['id'] ?? 0);
    $name = trim($data['name'] ?? '');
    $description = trim($data['description'] ?? '');
    $intro = trim($data['intro'] ?? '');

    if (empty($name) ) {
        return "Jméno postavy je povinné.";
    }

    $mediaPath = null;
    $mediaType = null;
    $fileUploaded = false;

    // Pokud byl nahrán soubor bez chyby
    if (isset($files['photo']) && $files['photo']['error'] === UPLOAD_ERR_OK) {
        
        $uploadDir = __DIR__ . '/../public/uploads/'; // Cesta fyzicky na disku
        $webPath = '/uploads/'; // Cesta pro web (do DB)

        // Vytvoření složky
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        $tmpName = $files['photo']['tmp_name'];
        $fileName = time() . '_' . basename($files['photo']['name']);
        $targetFile = $uploadDir . $fileName;

        // Detekce typu (MIME type)
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mime = finfo_file($finfo, $tmpName);
        finfo_close($finfo);

        // Rozlišení Foto vs Video
        if (str_starts_with($mime, 'image/')) {
            $mediaType = 'photo';
        } elseif (str_starts_with($mime, 'video/')) {
            $mediaType = 'video';
        } else {
            return "Nepodporovaný typ souboru. Nahrajte obrázek nebo video.";
        }

        // Přesun souboru
        if (move_uploaded_file($tmpName, $targetFile)) {
            $mediaPath = $webPath . $fileName;
            $fileUploaded = true;
        } else {
            return "Chyba při nahrávání souboru na server.";
        }
    }

    // 3. Uložení do databáze
    try {
        if ($id > 0) {
            // --- UPDATE (Editace) ---
            
            // Pokud byl nahrán nový soubor, aktualizujeme i sloupce media a typeOfMedia
            if ($fileUploaded) {
                $sql = "UPDATE characters 
                        SET name = :name, description = :description, intro = :intro, 
                            media = :media, typeOfMedia = :typeOfMedia 
                        WHERE id = :id";
                $params = [
                    ':name' => $name,
                    ':description' => $description,
                    ':intro' => $intro,
                    ':media' => $mediaPath,
                    ':typeOfMedia' => $mediaType,
                    ':id' => $id
                ];
            } else {
                // Pokud NENÍ nový soubor, necháme starý (neaktualizujeme sloupce media)
                $sql = "UPDATE characters 
                        SET name = :name, description = :description, intro = :intro 
                        WHERE id = :id";
                $params = [
                    ':name' => $name,
                    ':description' => $description,
                    ':intro' => $intro,
                    ':id' => $id
                ];
            }
            
            $stmt = $db->prepare($sql);
            $stmt->execute($params);

        } else {
            // --- INSERT (Nová postava) ---
            
            // U nové postavy je soubor povinný (podle tvého původního JS)
            if (!$fileUploaded) {
                return "Pro novou postavu musíte nahrát obrázek nebo video.";
            }

            $sql = "INSERT INTO characters (name, description, intro, media, typeOfMedia) 
                    VALUES (:name, :description, :intro, :media, :typeOfMedia)";
            
            $stmt = $db->prepare($sql);
            $stmt->execute([
                ':name' => $name,
                ':description' => $description,
                ':intro' => $intro,
                ':media' => $mediaPath,
                ':typeOfMedia' => $mediaType
            ]);
        }

        return true; // Úspěch

    } catch (PDOException $e) {
        return "Chyba databáze: " . $e->getMessage();
    }
}
?>