<?php
if (!defined('APP_RUNNING')) {
    header("HTTP/1.1 403 Forbidden");
    die("Direct access denied.");
}

function validate_character_data($data, $files) {
    $errors = [];

    $name = trim($data['name'] ?? '');
    $description = trim($data['description'] ?? '');
    $intro = trim($data['intro'] ?? '');
    $id = (int)($data['id'] ?? 0);
    $imageAction = $data['image_action'] ?? 'keep';

    if (empty($name)) {
        $errors[] = "Jméno postavy je povinné.";
    }
    if (empty($description)) {
        $errors[] = "Popis postavy je povinný.";
    }
    if (empty($intro)) {
        $errors[] = "Úvodní věty jsou povinné.";
    }

    if ($id === 0) {
        if (empty($files['photo']['name']) || $files['photo']['error'] === UPLOAD_ERR_NO_FILE) {
            $errors[] = "Ke každé nové postavě musíte nahrát fotografii nebo video.";
        }
    }

    if ($id > 0 && $imageAction === 'update') {
        if (empty($files['photo']['name']) || $files['photo']['error'] === UPLOAD_ERR_NO_FILE) {
             $errors[] = "Vybrali jste aktualizaci souboru, ale žádný jste nevybrali.";
        }
    }

    return $errors;
}