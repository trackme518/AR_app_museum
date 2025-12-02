<?php

function save_user($username, $password, $pdo){
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $query = $pdo->prepare("INSERT INTO users (username, password_hash)
                VALUES (:username, :password_hash)");

    return $query->execute([
        ':username' => $username,
        ':password_hash' => $hashed_password
    ]);
}


?>