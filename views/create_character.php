<?php
require_once __DIR__ . '/../backend/init.php';

$hasGlobalEdit = hasPermission('editCharacters');
$hasOwnEdit = hasPermission('editOwnCharacters');

// check if user has edit rights
if (!$hasGlobalEdit && !$hasOwnEdit) {
    header('Location: /index.php');
    exit;
}

$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
$page_title = $id > 0 ? "Úprava postavy" : "Nová postava";
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/form.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1><?php echo $page_title; ?></h1>
        
        <p id="error-message" class="error-msg hidden"></p>

        <form id="character_form">
            
            <input type="hidden" id="char_id" name="id" value="<?php echo $id; ?>">
            <input type="hidden" id="current_user_id" value="<?php echo $_SESSION['user_id']; ?>">
            <input type="hidden" id="has_global_edit" value="<?php echo $hasGlobalEdit ? '1' : '0'; ?>">
            
            <fieldset>
                <legend>Typ postavy *</legend>
                <label>
                    <input type="radio" name="character_type" value="2D" checked> 2D (Obrázek / Video)
                </label>
                <label>
                    <input type="radio" name="character_type" value="3D"> 3D (GLB Model)
                </label>
            </fieldset>

            <label for="name">Jméno postavy: *</label>
            <input type="text" name="name" id="name" required>
            <br>
            
            <label for="description">Popis postavy pro AI: *</label>
            <textarea name="description" id="description" required rows="5"></textarea>
            <br>
            
            <label for="intro">Úvodní věty: *</label>
            <textarea name="intro" id="intro" required rows="3"></textarea>
            <br>

            <fieldset>
                <legend id="media_fieldset_legend">Obrázek / Video *</legend>

                <div id="edit_media_options" class="<?php echo $id > 0 ? '' : 'hidden'; ?>">
                    <label for="image_action">Akce se souborem:</label>
                    <select id="image_action" name="image_action">
                        <option value="keep">Neměnit soubor</option>
                        <option value="update">Nahrát nový soubor (nahradit)</option>
                    </select>
                    <br>

                    <div id="media_preview_container" class="media-preview"></div>
                </div>

                <div id="file_input_container" class="<?php echo ($id > 0) ? 'hidden' : ''; ?>">
                    <label for="photo" id="file_input_label">Vyberte soubor (Obrázek/Video):</label>
                    <input type="file" id="photo" name="photo" accept="image/*, video/*" <?php echo ($id === 0) ? 'required' : ''; ?>>
                </div>
            </fieldset>

            <fieldset>
                <legend>Marker *</legend>

                <div id="edit_marker_options" class="<?php echo $id > 0 ? '' : 'hidden'; ?>">
                    <label for="marker_action">Akce se souborem:</label>
                    <select id="marker_action" name="marker_action">
                        <option value="keep">Neměnit soubor</option>
                        <option value="update">Nahrát nový soubor (nahradit)</option>
                    </select>
                    <br>

                    <div id="marker_preview_container" class="marker-preview"></div>
                </div>

                <div id="marker_input_container" class="<?php echo ($id > 0) ? 'hidden' : ''; ?>">
                    <label for="marker">Vyberte marker:</label>
                    <input type="file" id="marker" name="marker" accept="image/*" <?php echo ($id === 0) ? 'required' : ''; ?>>
                </div>
            </fieldset>

            <fieldset id="animations_fieldset" class="hidden">
                <legend>3D Animace (Volitelné)</legend>
                <p>
                    Zadejte přesné názvy animací, tak jak jsou uloženy v .glb souboru (záleží na velkých/malých písmenech).
                </p>

                <label for="anim_idle">Klidová animace (Idle):</label>
                <input type="text" name="anim_idle" id="anim_idle">
                <br>

                <label for="anim_talk">Animace mluvení (Talk):</label>
                <input type="text" name="anim_talk" id="anim_talk">
                <br>

                <label for="anim_special">Speciální akce (Special):</label>
                <input type="text" name="anim_special" id="anim_special">
            </fieldset>
            <br>

            <input type="submit" value="Uložit postavu">
            <a href="/views/character_list.php">Zrušit</a>
        </form>
    </main>
    
    <script type="module" src="/js/pages/validations/validateCreateCharacter.js"></script>        
</body>
</html>