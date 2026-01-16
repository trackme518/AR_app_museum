<?php

function get_scenario_options(PDO $db): array {
    $query = $db->query("SELECT id, name FROM scenarios");
    return $query->fetchAll(PDO::FETCH_ASSOC);
}
?>
