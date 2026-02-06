<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

function is_admin() {
    return isset($_SESSION['user_id']) && 
           isset($_SESSION['role_id']) && 
           $_SESSION['role_id'] == 1;
}

function require_admin_page() {
    if (!is_admin()) {
        header('Location: /index.php');
        exit;
    }
}

function require_admin_api() {
    if (!is_admin()) {
        header('Content-Type: application/json');
        http_response_code(403); // Forbidden
        echo json_encode(['error' => 'Nedostatečná oprávnění', 'success' => false]);
        exit;
    }
}
?>