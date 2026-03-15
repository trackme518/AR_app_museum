<?php

if (!defined('APP_RUNNING')) {
    header("HTTP/1.1 403 Forbidden");
    die("Direct access denied.");
}

return [
    // TODO : change to mysql
    'db_type' => 'mysql', 

    //'db_sqlite_path' => __DIR__ . '/../data/database.sqlite',

    // mysql connection
    'db_host' => 'md394.wedos.net',
    'db_name' => 'd379633_arapp',
    'db_user' => 'w379633_arapp',
    'db_pass' => '4jbhnUW5',
    
    
    // for debugging
    'show_errors' => false
];