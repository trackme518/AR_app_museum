<?php
if (!defined('APP_RUNNING')) {
    header("HTTP/1.1 403 Forbidden");
    die("Direct access denied.");
}

function validate_scenario_data($data) {
    $errors = [];

    $name = trim($data['name'] ?? '');
    
    if (empty($name)) {
        $errors[] = "Název scénáře je povinný.";
    }

    if (strlen($name) > 255) {
        $errors[] = "Název scénáře je příliš dlouhý (max 255 znaků).";
    }

    $chars = $data['characters'] ?? [];
    if (!is_array($chars) || empty($chars)) {
        $errors[] = "Musíte vybrat alespoň jednu postavu.";
    }

    return $errors;
}