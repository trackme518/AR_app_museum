<?php
require 'db.php';

$sql = "CREATE TABLE IF NOT EXISTS characters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    photo TEXT DEFAULT 'data/uploads/billboard.jpeg',
    typeOfMedia TEXT DEFAULT 'photo',
    description TEXT DEFAULT '',
    intro TEXT DEFAULT ''
)";
$db->exec($sql);

echo "Table 'characters' created successfully!";
?>