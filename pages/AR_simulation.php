<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>AR interaktivní výstava</title>
        <link href="/css/ARSimulation.css" rel="stylesheet">
    </head>
    <body>
        <?php include '../navbar.php';?>
        <main>
            <div id="AI_container" class="hide">
                <p id="AI_response"></p>
                <textarea id="AI_chat_input" rows="3"></textarea>
                <button id="AI_submit_btn">Send</button>
            </div>
            <script type="module" src="/js/main.js"></script>
        </main>
    </body>
</html>