<?php
/**
 * @file validate_login.php
 * @brief Functions for validating user login credentials.
 *
 * This file contains functions to validate the username and password
 * provided by the user during login.
 */

/**
 * Validate user login credentials.
 * @param string $username The username to validate.
 * @param string $password The password to validate.
 * @param PDO $pdo The PDO database connection.
 * @return array An associative array with 'error' and 'user' keys.
 */
function validate_login($username, $password, $pdo){
    $result = [
        'error' => "",
        'user' => null
    ];

    $query = $pdo->prepare("SELECT users.id, users.username, users.password_hash, roles.role_name FROM users
                             LEFT JOIN roles ON (users.role_id = roles.id) WHERE users.username = :username");

    $query->execute([':username' => $username]);
    $user = $query->fetch(PDO::FETCH_ASSOC);

    if(!$user){
        $result['error'] = "Špatné uživatelské jméno nebo heslo";
        return $result;
    } else if (!password_verify($password, $user['password_hash'])){
        $result['error'] = "Špatné uživatelské jméno nebo heslo";
        return $result;
    }

    if (password_needs_rehash($user['password_hash'], PASSWORD_DEFAULT)){ ///rehash password if needed
        $new_hash = password_hash($password, PASSWORD_DEFAULT);
        $query = $pdo->prepare("UPDATE users SET password_hash = :password_hash WHERE id = :id");

        $query->execute([
            ':password_hash' => $new_hash,
            ':id' => $user['id']
        ]);
    }

    $result['user'] = [
        'user_id' => $user['id'],
        'role' => $user['role_name']
    ];

    return $result;
}

?>