<?php
require_once __DIR__ . '/../backend/init.php';
requirePermissionPage('editCharacters');
$page_title = 'Historical Knowledge Base';
$page_title_key = 'knowledge.title';
?>

<?php include __DIR__ . '/../templates/head_content.php'; ?>
    <link href="/css/list.css" rel="stylesheet">
    <link href="/css/form.css" rel="stylesheet">
</head>
<body>
    <?php include __DIR__ . '/../templates/navbar.php'; ?>

    <main class="knowledge-page">
        <h1 data-i18n="knowledge.title">Historical Knowledge Base</h1>
        <p class="knowledge-help" data-i18n="knowledge.help">Global documents apply everywhere. Exhibition documents apply only while that exhibition is active. Supported formats: TXT, TTX, Markdown, PDF, and DOCX.</p>

        <p id="error-message" class="error-msg hidden"></p>
        <p id="success-message" class="success-msg hidden"></p>

        <form id="knowledge-upload-form" enctype="multipart/form-data">
            <label for="knowledge-scope" data-i18n="knowledge.scope">Knowledge scope</label>
            <select id="knowledge-scope" name="exhibition_id">
                <option value="" data-i18n="knowledge.global">Global — all exhibitions</option>
            </select>

            <label for="document" data-i18n="knowledge.document">Document</label>
            <input id="document" name="document" type="file" accept=".txt,.ttx,.md,.pdf,.docx" required>
            <button id="upload-button" type="submit" data-i18n="knowledge.upload">Upload and index</button>
        </form>

        <h2 data-i18n="knowledge.uploaded">Uploaded Documents</h2>
        <div id="knowledge-list">
            <p data-i18n="knowledge.loading">Loading documents...</p>
        </div>
    </main>

    <script type="module" src="/js/pages/knowledgeDocuments.js"></script>
</body>
</html>
