<?php

function get_character_options(PDO $db): array {
    $query = $db->query("SELECT id, name FROM characters");
    return $query->fetchAll(PDO::FETCH_ASSOC);
}

function get_character_by_id(PDO $db, int $id) {
    $query = $db->prepare("SELECT * FROM characters WHERE id = :id");
    $query->bindParam(':id', $id, PDO::PARAM_INT);
    $query->execute();
    return $query->fetch(PDO::FETCH_ASSOC);
}

?>
