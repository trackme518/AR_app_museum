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
$page_title = $id > 0 ? "Edit Character" : "New Character";
$page_title_key = $id > 0 ? 'character.edit' : 'character.new';
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/form.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>
    
    <main>
        <h1 data-i18n="<?= $page_title_key ?>"><?php echo $page_title; ?></h1>
        
        <p id="error-message" class="error-msg hidden"></p>

        <form id="character_form">
            
            <input type="hidden" id="char_id" name="id" value="<?php echo $id; ?>">
            <input type="hidden" id="current_user_id" value="<?php echo $_SESSION['user_id']; ?>">
            <input type="hidden" id="has_global_edit" value="<?php echo $hasGlobalEdit ? '1' : '0'; ?>">
            
            <fieldset>
                <legend><span data-i18n="character.type">Character type</span> *</legend>
                <label>
                    <input type="radio" name="character_type" value="IMAGE" checked> <span data-i18n="character.staticImage">Static image</span>
                </label>
                <label>
                    <input type="radio" name="character_type" value="VIDEO"> <span data-i18n="character.animatedVideo">Animated video</span>
                </label>
                <label>
                    <input type="radio" name="character_type" value="3D"> <span data-i18n="character.model3d">3D (GLB Model)</span>
                </label>
            </fieldset>

            <label for="name"><span data-i18n="character.name">Character name</span>: *</label>
            <input type="text" name="name" id="name" required>
            <br>
            
            <label for="description"><span data-i18n="character.aiDescription">Character description for AI</span>: *</label>
            <textarea name="description" id="description" required rows="5"></textarea>
            <br>
            
            <label for="intro"><span data-i18n="character.greeting">Greeting</span>: *</label>
            <textarea name="intro" id="intro" required rows="3"></textarea>
            <br>

            <fieldset>
                <legend id="media_fieldset_legend"><span data-i18n="character.image">Image</span> *</legend>

                <div id="edit_media_options" class="<?php echo $id > 0 ? '' : 'hidden'; ?>">
                    <label for="image_action"><span data-i18n="character.fileAction">File action</span>:</label>
                    <select id="image_action" name="image_action">
                        <option value="keep" data-i18n="character.keepFile">Keep current file</option>
                        <option value="update" data-i18n="character.replaceFile">Upload a replacement</option>
                    </select>
                    <br>

                    <div id="media_preview_container" class="media-preview"></div>
                </div>

                <div id="file_input_container" class="<?php echo ($id > 0) ? 'hidden' : ''; ?>">
                    <label for="photo" id="file_input_label"><span data-i18n="character.selectImage">Select an image</span>:</label>
                    <input type="file" id="photo" name="photo" accept="image/*" <?php echo ($id === 0) ? 'required' : ''; ?>>
                </div>
            </fieldset>

            <fieldset id="video_states_fieldset" class="hidden">
                <legend data-i18n="character.videoStates">Animated video states</legend>
                <p data-i18n="character.videoStatesHelp">Idle is the primary file above and loops by default. Talk and Special are optional.</p>
                <label for="video_talk"><span data-i18n="character.talkVideo">Talk video</span>:</label>
                <input type="file" id="video_talk" name="video_talk" accept="video/mp4,video/webm,video/ogg,video/quicktime">
                <div id="video_talk_preview" class="media-preview"></div>
                <br>
                <label for="video_special"><span data-i18n="character.specialVideo">Special video</span>:</label>
                <input type="file" id="video_special" name="video_special" accept="video/mp4,video/webm,video/ogg,video/quicktime">
                <div id="video_special_preview" class="media-preview"></div>
            </fieldset>

            <fieldset>
                <legend data-i18n="character.marker">Image marker (optional)</legend>
                <p data-i18n="character.markerHelp">With a marker, the character appears at its first recognized position. Without one, it can be placed once on a tracked surface.</p>

                <div id="edit_marker_options" class="<?php echo $id > 0 ? '' : 'hidden'; ?>">
                    <label for="marker_action"><span data-i18n="character.fileAction">File action</span>:</label>
                    <select id="marker_action" name="marker_action">
                        <option value="keep" data-i18n="character.keepFile">Keep current file</option>
                        <option value="update" data-i18n="character.replaceFile">Upload a replacement</option>
                        <option value="remove" data-i18n="character.clearMarkerPlacement">Clear marker and use surface placement</option>
                    </select>
                    <br>

                    <div id="marker_preview_container" class="marker-preview"></div>
                </div>

                <div id="marker_input_container" class="<?php echo ($id > 0) ? 'hidden' : ''; ?>">
                    <label for="marker"><span data-i18n="character.selectMarker">Select a marker</span>:</label>
                    <input type="file" id="marker" name="marker" accept="image/*">
                </div>
                <button type="button" id="marker_clear_button" data-i18n="character.clearMarker">Clear marker</button>
                <br>
                <label for="marker_orientation"><span data-i18n="character.markerOrientation">Marker orientation</span>:</label>
                <select id="marker_orientation" name="marker_orientation">
                    <option value="stand" selected data-i18n="character.markerStand">Stand (upright on marker)</option>
                    <option value="flat" data-i18n="character.markerFlat">Flat (lays flush on marker)</option>
                </select>
                <br>
                <label for="greenscreen">
                    <input type="checkbox" id="greenscreen" name="greenscreen">
                    <span data-i18n="character.greenscreen">Greenscreen background (remove 0x00FF00)</span>
                </label>
            </fieldset>

            <fieldset id="animations_fieldset" class="hidden">
                <legend data-i18n="character.animations">3D Animations (Optional)</legend>
                <p data-i18n="character.animationsHelp">Enter the exact, case-sensitive animation names stored in the .glb file.</p>

                <label for="anim_idle"><span data-i18n="character.idleAnimation">Idle animation</span>:</label>
                <input type="text" name="anim_idle" id="anim_idle">
                <br>

                <label for="anim_talk"><span data-i18n="character.talkingAnimation">Talking animation</span>:</label>
                <input type="text" name="anim_talk" id="anim_talk">
                <br>

                <label for="anim_special"><span data-i18n="character.specialAction">Special action</span>:</label>
                <input type="text" name="anim_special" id="anim_special">
            </fieldset>
            <br>

            <input type="submit" data-i18n-value="character.save" value="Save character">
            <a href="/views/character_list.php" data-i18n="common.cancel">Cancel</a>
        </form>
    </main>
    
    <script type="module" src="/js/pages/validations/validateCreateCharacter.js"></script>        
</body>
</html>
