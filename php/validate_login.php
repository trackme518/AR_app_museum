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

    $query = $pdo->prepare("SELECT role_id FROM role_user WHERE user_id = :user_id LIMIT 1");
    $query->execute([':user_id' => $user['id']]);
    $role = $query->fetch(PDO::FETCH_ASSOC);

    $role_id = $role ? $role['role_id'] : 1;

    $result['user'] = [
        'id' => $user['id'],
        'username' => $user['username'],
        'role_id' => $role_id
    ];

    return $result;
}

?>