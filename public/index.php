<?php
session_start();

require_once __DIR__ . '/../backend/db.php'; 

if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

$request = $_SERVER['REQUEST_URI'];
$path = parse_url($request, PHP_URL_PATH);

switch ($path) {
    // PUBLIC PAGES    
    case '/':
    case '/home':
    case '/index.php':
        $title = "AR Simulace";
        require __DIR__ . '/../views/home.php';
        break;

    case '/login':
        $title = "Přihlášení";
        require __DIR__ . '/../views/login.php';
        break;

    case '/logout':
        session_destroy();
        header('Location: /');
        exit;
        break;

    case '/scenario-details':
        header('Content-Type: application/json');
        
        $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
        
        if ($id > 0) {
            require_once __DIR__ . '/../backend/scenarios_db.php';
            
            $data = get_scenario_full_details($db, $id);
            
            if ($data) {
                echo json_encode($data);
            } else {
                http_response_code(404);
                echo json_encode(['error' => 'Scénář nenalezen']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Chybějící ID']);
        }
        exit;
        break;


    // ADMIN PAGES
    
    case '/characters':
    case '/character-form':
    case '/delete-character':
    case '/scenarios':
    case '/scenario-form':
    case '/delete-scenario':
        
        if (empty($_SESSION['user_id'])) {
            header('Location: /login');
            exit;
        }
        
        if (!isset($_SESSION['role_id']) || $_SESSION['role_id'] != 1){
            header('Location: /'); 
            exit;
        }

        switch ($path) {
            case '/characters':
                $title = "Seznam postav";
                require __DIR__ . '/../views/character_list.php';
                break;

            case '/character-form':
                $title = "Správa postavy";
                require __DIR__ . '/../views/create_character.php';
                break;

            case '/delete-character':
                if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                    require_once __DIR__ . '/../backend/manage_characters.php';
                    
                    if (empty($_SESSION['csrf_token']) || !hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'] ?? '')) {
                        die("Chyba zabezpečení.");
                    }
                    
                    $id = (int)($_POST['id'] ?? 0);
                    delete_character($id, $db);
                }
                header('Location: /characters');
                exit;
                break;


            case '/scenarios':
                $title = "Seznam scénářů";
                require __DIR__ . '/../views/scenario_list.php';
                break;

            case '/scenario-form':
                $title = "Správa scénáře";
                require __DIR__ . '/../views/create_scenario.php';
                break;
            
            case '/delete-scenario':
                if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                    require_once __DIR__ . '/../backend/manage_scenarios.php';
                    
                    if (empty($_SESSION['csrf_token']) || !hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'] ?? '')) {
                        die("Chyba zabezpečení.");
                    }
                    
                    $id = (int)($_POST['id'] ?? 0);
                    delete_scenario($db, $id);
                }
                header('Location: /scenarios');
                exit;
                break;
        }
        break;

    default:
        http_response_code(404);
        $title = "Stránka nenalezena";
        require __DIR__ . '/../views/404.php';
        break;
}
?>