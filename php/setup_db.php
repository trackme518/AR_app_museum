<?php
require __DIR__ . '/db.php';

$sql = "CREATE TABLE IF NOT EXISTS characters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    media TEXT DEFAULT 'data/uploads/billboard.jpeg',
    typeOfMedia TEXT DEFAULT 'photo',
    description TEXT DEFAULT '',
    intro TEXT DEFAULT ''
)";
$db->exec($sql);

echo "Table 'characters' created successfully";

$sql = "CREATE TABLE IF NOT EXISTS scenarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
)";
$db->exec($sql);

echo "Table 'scenarios' created successfully";

$sql = "CREATE TABLE IF NOT EXISTS scenario_character (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    scenario_id INTEGER NOT NULL,
    character_id INTEGER NOT NULL,
    FOREIGN KEY (scenario_id) REFERENCES scenarios(id),
    FOREIGN KEY (character_id) REFERENCES characters(id)
)";
$db->exec($sql);

echo "Table 'scenario_character' created successfully";

?>