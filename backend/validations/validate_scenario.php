<?php

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
    if (empty($chars)) { $errors[] = "Musíte vybrat alespoň jednu postavu."; }

    return $errors;
}