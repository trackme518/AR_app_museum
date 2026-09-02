<?php

namespace App\Service;

use App\Exception\ValidationException;
use App\Repository\KnowledgeDocumentRepository;
use Psr\Http\Message\UploadedFileInterface;

final class KnowledgeDocumentService
{
    private array $config;

    public function __construct(
        private KnowledgeDocumentRepository $repository,
        private DocumentTextExtractor $extractor,
        private EmbeddingClient $embeddingClient,
        array $config
    ) {
        $this->config = $config['rag'] ?? [];
    }

    public function getAll(): array
    {
        return $this->repository->getAll();
    }

    public function upload(UploadedFileInterface $file, int $userId, ?int $exhibitionId): int
    {
        if ($exhibitionId !== null && !$this->repository->exhibitionExists($exhibitionId)) {
            throw new ValidationException('Exhibition not found.', 404);
        }
        if ($file->getError() !== UPLOAD_ERR_OK) {
            throw new ValidationException('Chyba při přenosu dokumentu.');
        }
        $size = (int)($file->getSize() ?? 0);
        if ($size < 1 || $size > (int)($this->config['max_upload_bytes'] ?? 15728640)) {
            throw new ValidationException('Dokument je prázdný nebo překračuje povolenou velikost.');
        }

        $originalName = basename((string)$file->getClientFilename());
        $extension = strtolower(pathinfo($originalName, PATHINFO_EXTENSION));
        if (!in_array($extension, ['txt', 'ttx', 'md', 'pdf', 'docx'], true)) {
            throw new ValidationException('Only TXT, TTX, Markdown, PDF, and DOCX files are allowed.');
        }

        $tmpPath = $file->getFilePath();
        $mime = (new \finfo(FILEINFO_MIME_TYPE))->file($tmpPath) ?: 'application/octet-stream';
        $this->validateMime($extension, $mime);
        $hash = hash_file('sha256', $tmpPath);
        if ($this->repository->existsByHash($hash)) {
            throw new ValidationException('Tento dokument již ve znalostní bázi existuje.', 409);
        }

        $text = $this->extractor->extract($tmpPath, $extension);
        $overlap = min(
            (int)($this->config['chunk_overlap'] ?? 50),
            max(0, (int)($this->config['chunk_size'] ?? 1000) - 1)
        );
        $splitter = new RecursiveCharacterTextSplitter(
            (int)($this->config['chunk_size'] ?? 1000),
            $overlap
        );
        $chunks = $splitter->split($text);
        if ($chunks === []) {
            throw new ValidationException('Z dokumentu nebylo možné vytvořit textové bloky.');
        }
        $embeddings = $this->embeddingClient->embedBatch($chunks);

        $uploadDir = __DIR__ . '/../../uploads/knowledge';
        if (!is_dir($uploadDir) && !mkdir($uploadDir, 0755, true)) {
            throw new ValidationException('Nepodařilo se vytvořit složku znalostní báze.');
        }
        $storedName = bin2hex(random_bytes(16)) . '.' . $extension;
        $absolutePath = $uploadDir . '/' . $storedName;
        $relativePath = 'uploads/knowledge/' . $storedName;
        $file->moveTo($absolutePath);

        try {
            return $this->repository->create([
                'original_name' => $originalName,
                'stored_path' => $relativePath,
                'mime_type' => $mime,
                'file_size' => $size,
                'content_hash' => $hash,
                'uploaded_by' => $userId,
                'exhibition_id' => $exhibitionId,
            ], $chunks, $embeddings);
        } catch (\Throwable $e) {
            if (is_file($absolutePath)) {
                unlink($absolutePath);
            }
            throw $e;
        }
    }

    public function delete(int $id): void
    {
        $relativePath = $this->repository->delete($id);
        if ($relativePath === null) {
            throw new ValidationException('Dokument nebyl nalezen.', 404);
        }

        $knowledgeRoot = realpath(__DIR__ . '/../../uploads/knowledge');
        $absolutePath = realpath(__DIR__ . '/../../' . ltrim($relativePath, '/'));
        if ($knowledgeRoot !== false && $absolutePath !== false && str_starts_with($absolutePath, $knowledgeRoot . DIRECTORY_SEPARATOR)) {
            unlink($absolutePath);
        }
    }

    private function validateMime(string $extension, string $mime): void
    {
        $allowed = [
            'txt' => ['text/plain', 'application/octet-stream'],
            'ttx' => ['text/plain', 'text/xml', 'application/xml', 'application/octet-stream'],
            'md' => ['text/markdown', 'text/plain', 'application/octet-stream'],
            'pdf' => ['application/pdf'],
            'docx' => [
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/zip',
                'application/octet-stream',
            ],
        ];
        if (!in_array($mime, $allowed[$extension], true)) {
            throw new ValidationException("Obsah souboru neodpovídá příponě {$extension}.");
        }
    }
}
