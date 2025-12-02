<?php
require __DIR__ . '/db.php';

$sql = "CREATE TABLE IF NOT EXISTS characters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(32) NOT NULL UNIQUE,
    media TEXT DEFAULT 'data/uploads/billboard.jpeg',
    typeOfMedia VARCHAR(16) DEFAULT 'photo',
    description TEXT DEFAULT '',
    intro TEXT DEFAULT ''
)";
$db->exec($sql);

echo "Table 'characters' created successfully";

$sql = "CREATE TABLE IF NOT EXISTS scenarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(32) NOT NULL
)";
$db->exec($sql);

echo "Table 'scenarios' created successfully";

$sql = "CREATE TABLE IF NOT EXISTS scenario_character (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    scenario_id INTEGER NOT NULL,
    character_id INTEGER NOT NULL,
    UNIQUE(scenario_id, character_id),
    FOREIGN KEY (scenario_id) REFERENCES scenarios(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (character_id) REFERENCES characters(id) ON DELETE CASCADE ON UPDATE CASCADE
)";
$db->exec($sql);

echo "Table 'scenario_character' created successfully";

$sql = "CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(16) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL
);";
$db->exec($sql);

echo "Table 'users' created successfully";

$sql = "CREATE TABLE IF NOT EXISTS roles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    role_name varchar(32) NOT NULL UNIQUE
)";
$db->exec($sql);

echo "Table 'roles' created successfully";

$sql = "CREATE TABLE IF NOT EXISTS role_user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    role_id INTEGER NOT NULL,
    UNIQUE (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE ON UPDATE CASCADE
);";
$db->exec($sql);

echo "Table 'role_user' created successfully";

?>