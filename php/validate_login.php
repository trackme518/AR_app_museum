<?php

function validate_login($username, $password, $pdo){
    $result = [
        'error' => "",
        'user' => null
    ];

    $query = $pdo->prepare("SELECT id, username, password_hash FROM users WHERE username = :username");

    $query->execute([':username' => $username]);
    $user = $query->fetch(PDO::FETCH_ASSOC);

    if(!$user){
        $result['error'] = "Špatné uživatelské jméno nebo heslo";
        return $result;
    } else if (!password_verify($password, $user['password_hash'])){
        $result['error'] = "Špatné uživatelské jméno nebo heslo";
        return $result;
    }

    if (password_needs_rehash($user['password_hash'], PASSWORD_DEFAULT)){
        $new_hash = password_hash($password, PASSWORD_DEFAULT);
        $query = $pdo->prepare("UPDATE users SET password_hash = :password_hash WHERE id = :id");

        $query->execute([
            ':password_hash' => $new_hash,
            ':id' => $user['id']
        ]);
    }

    $result['user'] = [
        'id' => $user['id'],
        'username' => $user['username']
    ];

    return $result;
}

?>