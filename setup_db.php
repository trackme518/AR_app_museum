<?php
require __DIR__ . '/backend/db.php';

echo "Probíhá reset db<br>";

try {
    // deleting current tables from child to parent
    $db->exec("DROP TABLE IF EXISTS scenario_character");
    $db->exec("DROP TABLE IF EXISTS users");
    $db->exec("DROP TABLE IF EXISTS roles");
    $db->exec("DROP TABLE IF EXISTS scenarios");
    $db->exec("DROP TABLE IF EXISTS characters");
    
    echo "Tabulky smazány<br>";

    // creating new empty tables

    $sql = "CREATE TABLE IF NOT EXISTS roles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        role_name VARCHAR(32) NOT NULL UNIQUE
    )";
    $db->exec($sql);

    $sql = "CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username VARCHAR(16) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        role_id INTEGER NOT NULL DEFAULT 2, 
        FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE RESTRICT
    )";
    $db->exec($sql);

    $sql = "CREATE TABLE IF NOT EXISTS characters (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(32) NOT NULL,
        description TEXT NOT NULL DEFAULT '',
        intro TEXT NOT NULL DEFAULT '',
        media TEXT NOT NULL,
        typeOfMedia VARCHAR(16) NOT NULL DEFAULT 'photo'
    )";
    $db->exec($sql);

    $sql = "CREATE TABLE IF NOT EXISTS scenarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(32) NOT NULL
    )";
    $db->exec($sql);

    $sql = "CREATE TABLE IF NOT EXISTS scenario_character (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        scenario_id INTEGER NOT NULL,
        character_id INTEGER NOT NULL,
        UNIQUE(scenario_id, character_id),
        FOREIGN KEY (scenario_id) REFERENCES scenarios(id) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY (character_id) REFERENCES characters(id) ON DELETE CASCADE ON UPDATE CASCADE
    )";
    $db->exec($sql);

    echo "Nové tabulky vytvořeny<br>";


    // Inserting new data

    // ID 1 = Admin, ID 2 = User
    $db->exec("INSERT INTO roles (role_name) VALUES ('admin')");
    $db->exec("INSERT INTO roles (role_name) VALUES ('user')");

    $adminUser = 'admin';
    $adminPass = 'admin';
    $adminHash = password_hash($adminPass, PASSWORD_DEFAULT);
    $adminRole = 1;

    $stmt = $db->prepare("INSERT INTO users (username, password, role_id) VALUES (:username, :password, :role_id)");
    $stmt->execute([
        ':username' => $adminUser,
        ':password' => $adminHash,
        ':role_id' => $adminRole
    ]);

    echo "Vytvořen uživatel 'admin' s heslem 'admin'.<br>";
    echo "<b>Databáze je připravena.</b>";

} catch (PDOException $e) {
    die("Chyba při vytváření DB: " . $e->getMessage());
}
?>