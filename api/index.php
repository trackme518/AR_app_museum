<?php

/**
 * Front Controller and Application Bootstrap.
 * This file is the single entry point for the API. It initializes the DI container,
 * sets up the Slim application, configures middleware, and defines all API routes.
 */

use DI\ContainerBuilder;
use Slim\Factory\AppFactory;
use App\Database;

require_once __DIR__ . '/../backend/init.php';
require_once __DIR__ . '/../backend/auth.php';

// initializing composer autoload, now I dont need to require everything manually
require __DIR__ . '/../vendor/autoload.php';

$config = require __DIR__ . '/../config/config.php';

/**
 * =====================================
 * Dependency injection container setup
 * =====================================
 */
$containerBuilder = new ContainerBuilder();

// configuring specific dependencies
$containerBuilder->addDefinitions([
    'db' => function () use ($config) {
        return Database::getConnection($config);
    },
    // alias for PDO
    PDO::class => \DI\get('db'),

    \App\Service\AiService::class => \DI\autowire()->constructorParameter('config', $config),
]);

$container = $containerBuilder->build();


/**
 * ==========================================
 * Application initialization and Middleware
 * ==========================================
 */
// connecting DI container to slim framework
AppFactory::setContainer($container);
$app = AppFactory::create();

// setting up path (front controller)
$app->setBasePath('/api/index.php');

// automatically parse json to PHP array
$app->addBodyParsingMiddleware();
// decides which route passes incoming URL
$app->addRoutingMiddleware();
// returns errors in json format, not in html
$app->addErrorMiddleware($config['show_errors'], true, true);

// custom middlewares
$editCharacters = requireAnyApiPermission(['editCharacters', 'editOwnCharacters']);
$editScenarios = requireAnyApiPermission(['editScenarios', 'editOwnScenarios']);
$editPrograms = requireAnyApiPermission(['editPrograms', 'editOwnPrograms']);
$maintainUsers = requireApiPermission('maintainUsers');
$requireCsrf = requireCsrfApi();
$requireLogin = requireLoginApi();

/**
 * =================
 * Endpoints
 * =================
 */
$app->post('/login', [\App\Controller\AuthController::class, 'login']);
$app->post('/updateProfile', [\App\Controller\AuthController::class, 'updateProfile'])
    ->add($requireCsrf)
    ->add($requireLogin);

$app->get('/roles', [\App\Controller\RoleController::class, 'getAll'])->add($requireLogin);

$app->group('/users', function (\Slim\Routing\RouteCollectorProxy $group) use ($maintainUsers) {
    $group->get('', [\App\Controller\UserController::class, 'getAll']);
    $group->get('/{id:[0-9]+}', [\App\Controller\UserController::class, 'getById']);
    $group->post('', [\App\Controller\UserController::class, 'createOrUpdate'])->add($maintainUsers);
    $group->delete('/{id:[0-9]+}', [\App\Controller\UserController::class, 'delete'])->add($maintainUsers);
})->add($requireCsrf);

$app->group('/characters', function (\Slim\Routing\RouteCollectorProxy $group) use ($editCharacters) {
    $group->get('', [\App\Controller\CharacterController::class, 'getAll']);
    $group->get('/{id:[0-9]+}', [\App\Controller\CharacterController::class, 'getById']);
    $group->post('', [\App\Controller\CharacterController::class, 'createOrUpdate'])->add($editCharacters);
    $group->delete('/{id:[0-9]+}', [\App\Controller\CharacterController::class, 'delete'])->add($editCharacters);
})->add($requireCsrf);

$app->group('/scenarios', function (\Slim\Routing\RouteCollectorProxy $group) use ($editScenarios) {
    $group->get('', [\App\Controller\ScenarioController::class, 'getAll']);
    $group->get('/{id:[0-9]+}', [\App\Controller\ScenarioController::class, 'getById']);
    $group->post('', [\App\Controller\ScenarioController::class, 'createOrUpdate'])->add($editScenarios);
    $group->delete('/{id:[0-9]+}', [\App\Controller\ScenarioController::class, 'delete'])->add($editScenarios);
})->add($requireCsrf);

$app->group('/programs', function (\Slim\Routing\RouteCollectorProxy $group) use ($editPrograms) {
    $group->get('', [\App\Controller\ProgramController::class, 'getAll']);
    $group->get('/{id:[0-9]+}', [\App\Controller\ProgramController::class, 'getById']);
    $group->post('', [\App\Controller\ProgramController::class, 'createOrUpdate'])->add($editPrograms);
    $group->delete('/{id:[0-9]+}', [\App\Controller\ProgramController::class, 'delete'])->add($editPrograms);
})->add($requireCsrf);

$app->group('/ai', function (\Slim\Routing\RouteCollectorProxy $group) {
    $group->post('/chat', [\App\Controller\AiController::class, 'chat']);
    $group->post('/voice', [\App\Controller\AiController::class, 'voice']);
});

$app->run();
