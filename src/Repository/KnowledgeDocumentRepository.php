<?php

namespace App\Repository;

use PDO;
use RuntimeException;

final class KnowledgeDocumentRepository
{
    public function __construct(private PDO $db)
    {
    }

    public function existsByHash(string $hash): bool
    {
        $stmt = $this->db->prepare('SELECT 1 FROM knowledge_documents WHERE content_hash = :hash');
        $stmt->execute([':hash' => $hash]);
        return (bool)$stmt->fetchColumn();
    }

    public function hasChunks(?int $exhibitionId): bool
    {
        $stmt = $this->db->prepare(
            'SELECT 1 FROM knowledge_chunks c
             JOIN knowledge_documents d ON d.id = c.document_id
             WHERE d.exhibition_id IS NULL OR d.exhibition_id = :exhibition_id LIMIT 1'
        );
        $stmt->execute([':exhibition_id' => $exhibitionId]);
        return (bool)$stmt->fetchColumn();
    }

    public function getAll(): array
    {
        $stmt = $this->db->query(
            'SELECT d.id, d.original_name, d.mime_type, d.file_size, d.created_at,
                    d.exhibition_id, p.name AS exhibition_name,
                    u.username AS uploaded_by, COUNT(c.id) AS chunk_count
             FROM knowledge_documents d
             JOIN users u ON u.id = d.uploaded_by
             LEFT JOIN programs p ON p.id = d.exhibition_id
             LEFT JOIN knowledge_chunks c ON c.document_id = d.id
             GROUP BY d.id, d.original_name, d.mime_type, d.file_size, d.created_at,
                      d.exhibition_id, p.name, u.username
             ORDER BY d.created_at DESC, d.id DESC'
        );
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    /**
     * @param string[] $chunks
     * @param array<int, array<int, float>> $embeddings
     */
    public function create(array $document, array $chunks, array $embeddings): int
    {
        if (count($chunks) !== count($embeddings)) {
            throw new RuntimeException('Počet bloků a embeddingů se neshoduje.');
        }

        $this->db->beginTransaction();
        try {
            $stmt = $this->db->prepare(
                'INSERT INTO knowledge_documents
                    (original_name, stored_path, mime_type, file_size, content_hash, uploaded_by, exhibition_id)
                 VALUES (:name, :path, :mime, :size, :hash, :user_id, :exhibition_id)'
            );
            $stmt->execute([
                ':name' => $document['original_name'],
                ':path' => $document['stored_path'],
                ':mime' => $document['mime_type'],
                ':size' => $document['file_size'],
                ':hash' => $document['content_hash'],
                ':user_id' => $document['uploaded_by'],
                ':exhibition_id' => $document['exhibition_id'],
            ]);
            $documentId = (int)$this->db->lastInsertId();

            $chunkStmt = $this->db->prepare(
                'INSERT INTO knowledge_chunks (document_id, chunk_index, content, embedding)
                 VALUES (:document_id, :chunk_index, :content, VEC_FromText(:embedding))'
            );
            foreach ($chunks as $index => $content) {
                $chunkStmt->execute([
                    ':document_id' => $documentId,
                    ':chunk_index' => $index,
                    ':content' => $content,
                    ':embedding' => json_encode($embeddings[$index], JSON_THROW_ON_ERROR),
                ]);
            }

            $this->db->commit();
            return $documentId;
        } catch (\Throwable $e) {
            if ($this->db->inTransaction()) {
                $this->db->rollBack();
            }
            throw $e;
        }
    }

    public function delete(int $id): ?string
    {
        $stmt = $this->db->prepare('SELECT stored_path FROM knowledge_documents WHERE id = :id');
        $stmt->execute([':id' => $id]);
        $path = $stmt->fetchColumn();
        if ($path === false) {
            return null;
        }

        $delete = $this->db->prepare('DELETE FROM knowledge_documents WHERE id = :id');
        $delete->execute([':id' => $id]);
        return (string)$path;
    }

    /** @return array<int, array{content:string, original_name:string, distance:float}> */
    public function search(array $embedding, int $limit, ?int $exhibitionId): array
    {
        $limit = max(1, min(20, $limit));
        $vector = json_encode($embedding, JSON_THROW_ON_ERROR);
        $sql = "SELECT c.content, d.original_name,
                       VEC_DISTANCE(c.embedding, VEC_FromText(:embedding)) AS distance
                FROM knowledge_chunks c
                JOIN knowledge_documents d ON d.id = c.document_id
                WHERE d.exhibition_id IS NULL OR d.exhibition_id = :exhibition_id
                ORDER BY VEC_DISTANCE(c.embedding, VEC_FromText(:embedding_order))
                LIMIT {$limit}";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([
            ':embedding' => $vector,
            ':embedding_order' => $vector,
            ':exhibition_id' => $exhibitionId,
        ]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function exhibitionExists(int $id): bool
    {
        $stmt = $this->db->prepare('SELECT 1 FROM programs WHERE id = :id');
        $stmt->execute([':id' => $id]);
        return (bool)$stmt->fetchColumn();
    }
}
