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
    'db_host' => 'localhost',
    'db_name' => 'ar_simulace_db',
    'db_user' => 'root',
    'db_pass' => '',
    
    // for debugging
    'show_errors' => false
];