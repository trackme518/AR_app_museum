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

    \App\Service\EmbeddingClient::class => \DI\autowire()->constructorParameter('config', $config),
    \App\Service\RagService::class => \DI\autowire()->constructorParameter('config', $config),
    \App\Service\KnowledgeDocumentService::class => \DI\autowire()->constructorParameter('config', $config),
    \App\Service\GreetingTranslationService::class => \DI\autowire()->constructorParameter('config', $config),
    \App\Service\AiService::class => \DI\autowire()->constructorParameter('config', $config),
    \App\Service\LoginThrottle::class => \DI\autowire()->constructorParameter('config', $config),
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
$editKnowledgeBase = requireApiPermission('editCharacters');
$editScenarios = requireAnyApiPermission(['editScenarios', 'editOwnScenarios']);
$editPrograms = requireAnyApiPermission(['editPrograms', 'editOwnPrograms']);
$maintainUsers = requireApiPermission('maintainUsers');
$requireCsrf = requireCsrfApi();
$requireLogin = requireLoginApi();
$publicArAccess = requireLoginIf(
    static fn(): bool => $container->get(\App\Service\SettingService::class)->isPublicArLoginRequired()
);

/**
 * =================
 * Endpoints
 * =================
 */
$app->post('/login', [\App\Controller\AuthController::class, 'login']);
$app->post('/updateProfile', [\App\Controller\AuthController::class, 'updateProfile'])
    ->add($requireCsrf)
    ->add($requireLogin);

$app->get('/roles', [\App\Controller\RoleController::class, 'getAll'])
    ->add($maintainUsers)
    ->add($requireLogin);

$app->get('/settings', [\App\Controller\SettingController::class, 'get'])
    ->add($maintainUsers)
    ->add($requireLogin);
$app->post('/settings', [\App\Controller\SettingController::class, 'update'])
    ->add($maintainUsers)
    ->add($requireCsrf)
    ->add($requireLogin);

$app->group('/users', function (\Slim\Routing\RouteCollectorProxy $group) {
    $group->get('', [\App\Controller\UserController::class, 'getAll']);
    $group->get('/{id:[0-9]+}', [\App\Controller\UserController::class, 'getById']);
    $group->post('', [\App\Controller\UserController::class, 'createOrUpdate']);
    $group->delete('/{id:[0-9]+}', [\App\Controller\UserController::class, 'delete']);
})->add($maintainUsers)->add($requireCsrf)->add($requireLogin);

$app->group('/characters', function (\Slim\Routing\RouteCollectorProxy $group) use ($editCharacters, $publicArAccess, $requireLogin) {
    $group->get('', [\App\Controller\CharacterController::class, 'getAll'])->add($publicArAccess);
    $group->get('/{id:[0-9]+}', [\App\Controller\CharacterController::class, 'getById'])->add($publicArAccess);
    $group->post('', [\App\Controller\CharacterController::class, 'createOrUpdate'])->add($editCharacters)->add($requireLogin);
    $group->delete('/{id:[0-9]+}', [\App\Controller\CharacterController::class, 'delete'])->add($editCharacters)->add($requireLogin);
})->add($requireCsrf);

$app->group('/scenarios', function (\Slim\Routing\RouteCollectorProxy $group) use ($editScenarios, $publicArAccess, $requireLogin) {
    $group->get('', [\App\Controller\ScenarioController::class, 'getAll'])->add($publicArAccess);
    $group->get('/{id:[0-9]+}', [\App\Controller\ScenarioController::class, 'getById'])->add($publicArAccess);
    $group->post('', [\App\Controller\ScenarioController::class, 'createOrUpdate'])->add($editScenarios)->add($requireLogin);
    $group->delete('/{id:[0-9]+}', [\App\Controller\ScenarioController::class, 'delete'])->add($editScenarios)->add($requireLogin);
})->add($requireCsrf);

$app->group('/programs', function (\Slim\Routing\RouteCollectorProxy $group) use ($editPrograms, $publicArAccess, $requireLogin) {
    $group->get('', [\App\Controller\ProgramController::class, 'getAll'])->add($publicArAccess);
    $group->get('/{id:[0-9]+}', [\App\Controller\ProgramController::class, 'getById'])->add($publicArAccess);
    $group->post('', [\App\Controller\ProgramController::class, 'createOrUpdate'])->add($editPrograms)->add($requireLogin);
    $group->delete('/{id:[0-9]+}', [\App\Controller\ProgramController::class, 'delete'])->add($editPrograms)->add($requireLogin);
})->add($requireCsrf);

$app->group('/knowledge-documents', function (\Slim\Routing\RouteCollectorProxy $group) {
    $group->get('', [\App\Controller\KnowledgeDocumentController::class, 'getAll']);
    $group->post('', [\App\Controller\KnowledgeDocumentController::class, 'upload']);
    $group->delete('/{id:[0-9]+}', [\App\Controller\KnowledgeDocumentController::class, 'delete']);
})->add($editKnowledgeBase)->add($requireCsrf)->add($requireLogin);

// Chat is public only while the public AR login requirement is disabled.
// It remains gated by the session CSRF token issued on any page load.
$app->group('/ai', function (\Slim\Routing\RouteCollectorProxy $group) {
    $group->post('/chat', [\App\Controller\AiController::class, 'chat']);
})->add($requireCsrf)->add($publicArAccess);

$app->run();
