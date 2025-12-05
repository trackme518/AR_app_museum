<?php

function save_user($username, $password, $pdo){
    try{
        $pdo->beginTransaction();
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        $query = $pdo->prepare("INSERT INTO users (username, password_hash)
                VALUES (:username, :password_hash)");

        $query->execute([
            ':username' => $username,
            ':password_hash' => $hashed_password
        ]);

        $user_id = $pdo->lastInsertId();

        $query = $pdo->prepare("INSERT INTO role_user (user_id, role_id) 
                VALUES (:user_id, :role_id)");

        $query->execute([
            ':user_id' => $user_id,
            ':role_id' => 2
        ]);

        $pdo->commit();
        return true;
    } catch (Exception $e){
        $pdo->rollBack();
        return false;
    }
}


?>