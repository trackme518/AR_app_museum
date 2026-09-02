-- Run once when upgrading an existing MariaDB database.
-- Requires MariaDB 11.8 LTS or newer for native VECTOR INDEX support.

CREATE TABLE IF NOT EXISTS knowledge_documents (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    original_name VARCHAR(255) NOT NULL,
    stored_path VARCHAR(512) NOT NULL,
    mime_type VARCHAR(128) NOT NULL,
    file_size BIGINT UNSIGNED NOT NULL,
    content_hash CHAR(64) NOT NULL,
    uploaded_by INT NOT NULL,
    exhibition_id INT DEFAULT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_knowledge_content (content_hash),
    CONSTRAINT fk_knowledge_user FOREIGN KEY (uploaded_by) REFERENCES users(id) ON DELETE RESTRICT,
    CONSTRAINT fk_knowledge_exhibition FOREIGN KEY (exhibition_id) REFERENCES programs(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS knowledge_chunks (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    document_id BIGINT UNSIGNED NOT NULL,
    chunk_index INT UNSIGNED NOT NULL,
    content TEXT NOT NULL,
    embedding VECTOR(768) NOT NULL,
    UNIQUE KEY unique_document_chunk (document_id, chunk_index),
    CONSTRAINT fk_chunk_document FOREIGN KEY (document_id)
        REFERENCES knowledge_documents(id) ON DELETE CASCADE,
    VECTOR INDEX (embedding) DISTANCE=cosine
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
