<?php

function unique_username($username, $pdo){
    $query = $pdo->prepare("SELECT COUNT(*) FROM users WHERE username = :username");

    $query->execute([':username' => $username]);
    $count = $query->fetchColumn();

    return $count == 0;
}

function validate_username($username, $pdo){
    if (strlen($username) < 3){
        return "Uživatelské jméno je příliš krátké";
    } /*else if (!unique_username($username, $pdo)){
        return "Uživatelské jméno je již obsazené";
    }*/
    return "";
}

function validate_password($password){
    if (strlen($password) < 5){
        return "Heslo je příliš kátké";
    }
    return "";
}

?>