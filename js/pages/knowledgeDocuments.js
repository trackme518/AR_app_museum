import { ApiService } from '../ApiService.js';
import { t } from '../localization.js';

document.addEventListener('DOMContentLoaded', () => {
    const api = new ApiService();
    const form = document.getElementById('knowledge-upload-form');
    const input = document.getElementById('document');
    const scope = document.getElementById('knowledge-scope');
    const uploadButton = document.getElementById('upload-button');
    const list = document.getElementById('knowledge-list');
    const error = document.getElementById('error-message');
    const success = document.getElementById('success-message');
    const csrf = document.querySelector('meta[name="csrf-token"]')?.content || '';

    const showMessage = (element, message) => {
        error.classList.add('hidden');
        success.classList.add('hidden');
        element.textContent = message;
        element.classList.remove('hidden');
    };

    const formatBytes = (bytes) => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / 1048576).toFixed(1)} MB`;
    };

    async function loadDocuments() {
        try {
            const documents = await api.getKnowledgeDocuments();
            list.replaceChildren();
            if (documents.length === 0) {
                const empty = document.createElement('p');
                empty.dataset.i18n = 'knowledge.empty';
                empty.textContent = t('knowledge.empty');
                list.appendChild(empty);
                return;
            }

            documents.forEach((knowledgeDocument) => {
                const row = document.createElement('div');
                row.className = 'list-item knowledge-item';
                row.id = `knowledge-${knowledgeDocument.id}`;

                const details = document.createElement('div');
                const name = document.createElement('strong');
                name.textContent = knowledgeDocument.original_name;
                const metadata = document.createElement('small');
                const scopeName = knowledgeDocument.exhibition_name
                    ? t('knowledge.exhibitionScope', { name: knowledgeDocument.exhibition_name })
                    : t('knowledge.globalScope');
                metadata.textContent = t('knowledge.metadata', {
                    scope: scopeName,
                    size: formatBytes(Number(knowledgeDocument.file_size)),
                    chunks: knowledgeDocument.chunk_count,
                    uploader: knowledgeDocument.uploaded_by,
                });
                details.append(name, metadata);

                const deleteButton = document.createElement('button');
                deleteButton.className = 'delete-btn';
                deleteButton.dataset.id = knowledgeDocument.id;
                deleteButton.dataset.i18nTitle = 'action.deleteDocument';
                deleteButton.title = t('action.deleteDocument');
                deleteButton.textContent = 'X';
                row.append(details, deleteButton);
                list.appendChild(row);
            });
        } catch (e) {
            list.replaceChildren();
            showMessage(error, e.message || t('knowledge.loadFailed'));
        }
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!input.files?.[0]) return;
        uploadButton.disabled = true;
        uploadButton.textContent = t('knowledge.processing');
        try {
            await api.uploadKnowledgeDocument(input.files[0], scope.value, csrf);
            form.reset();
            showMessage(success, t('knowledge.uploadedSuccess'));
            await loadDocuments();
        } catch (e) {
            showMessage(error, e.message || t('knowledge.uploadFailed'));
        } finally {
            uploadButton.disabled = false;
            uploadButton.textContent = t('knowledge.upload');
        }
    });

    list.addEventListener('click', async (event) => {
        const button = event.target.closest('.delete-btn');
        if (!button || !confirm(t('knowledge.removeConfirm'))) return;
        button.disabled = true;
        try {
            await api.deleteKnowledgeDocument(button.dataset.id, csrf);
            showMessage(success, t('knowledge.removedSuccess'));
            await loadDocuments();
        } catch (e) {
            button.disabled = false;
            showMessage(error, e.message || t('knowledge.deleteFailed'));
        }
    });

    async function loadExhibitions() {
        const exhibitions = await api.getPrograms();
        exhibitions.forEach((exhibition) => scope.add(new Option(exhibition.name, exhibition.id)));
    }

    loadExhibitions().catch((e) => showMessage(error, e.message || t('error.exhibitionsLoad')));
    loadDocuments();
});
