<?php
session_start();

require_once __DIR__ . '/../backend/db.php'; 

//creating token against csrf attacks
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// get path from url
$request = $_SERVER['REQUEST_URI'];
// remove additional parameters
$path = parse_url($request, PHP_URL_PATH);

switch ($path) {
    case '/':
    case '/home':
    case '/index.php':
        $title = "AR simulace";
        require __DIR__ . '/../views/home.php';
        break;

    case '/login':
        $title = "Přihlášení";
        require __DIR__ . '/../views/login.php';
        break;

    case '/register':
        $title = "Registrace";
        require __DIR__ . '/../views/registration.php';
        break;

    case '/logout':
        session_destroy();
        header('Location: /');
        exit;
        break;

    case '/scenarios':
    case '/characters':
        if (empty($_SESSION['user_id'])) {
            header('Location: /login');
            exit;
        }
        
        if (!isset($_SESSION['role_id']) || $_SESSION['role_id'] != 1){
            header('Location: /'); 
            exit;
        }

        if ($path === '/scenarios') {
            $title = "Seznam scénářů";
            require __DIR__ . '/../views/scenarios.php';
        } else {
            $title = "Seznam postav";
            require __DIR__ . '/../views/characters.php';
        }
        
        break;

    default:
        http_response_code(404);
        $title = "Stránka nenalezena";
        require __DIR__ . '/../views/404.php';
        break;
}

?>