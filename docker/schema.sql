-- Initial schema for an empty AR Museum database.
-- Applied by the application on first connection (see src/Database.php),
-- only when the database contains no tables. Never run this against a
-- populated database; for a manual destructive reset use
-- help_files/setup_db.sql instead.

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(32) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE permissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    permission_name VARCHAR(64) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE role_permission (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role_id INT NOT NULL,
    permission_id INT NOT NULL,
    UNIQUE KEY unique_role_perm (role_id, permission_id),
    CONSTRAINT fk_rp_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    CONSTRAINT fk_rp_perm FOREIGN KEY (permission_id) REFERENCES permissions(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(16) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role_id INT NOT NULL DEFAULT 2, 
    CONSTRAINT fk_user_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE characters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(32) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    intro TEXT NOT NULL,
    intro_translations JSON NOT NULL,
    media TEXT NOT NULL,
    typeOfMedia VARCHAR(16) NOT NULL DEFAULT 'photo',
    marker TEXT NOT NULL,
    createdBy INT NOT NULL,
    anim_idle TEXT DEFAULT NULL,
    anim_talk TEXT DEFAULT NULL,
    anim_special TEXT DEFAULT NULL,
    video_talk TEXT DEFAULT NULL,
    video_special TEXT DEFAULT NULL,
    markerOrientation VARCHAR(16) NOT NULL DEFAULT 'stand',
    greenscreen TINYINT(1) NOT NULL DEFAULT 0,
    CONSTRAINT fk_char_user FOREIGN KEY (createdBy) REFERENCES users(id) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE programs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(32) NOT NULL UNIQUE,
    onGround TINYINT(1) NOT NULL DEFAULT 1,
    createdBy INT NOT NULL,
    CONSTRAINT fk_prog_user FOREIGN KEY (createdBy) REFERENCES users(id) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE scenarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(32) NOT NULL UNIQUE,
    createdBy INT NOT NULL,
    CONSTRAINT fk_scen_user FOREIGN KEY (createdBy) REFERENCES users(id) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE program_scenario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    program_id INT NOT NULL,
    scenario_id INT NOT NULL,
    UNIQUE KEY unique_prog_scen (program_id, scenario_id),
    CONSTRAINT fk_ps_prog FOREIGN KEY (program_id) REFERENCES programs(id) ON DELETE CASCADE,
    CONSTRAINT fk_ps_scen FOREIGN KEY (scenario_id) REFERENCES scenarios(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE scenario_character (
    id INT AUTO_INCREMENT PRIMARY KEY,
    scenario_id INT NOT NULL,
    character_id INT NOT NULL,
    UNIQUE KEY unique_scen_char (scenario_id, character_id),
    CONSTRAINT fk_sc_scen FOREIGN KEY (scenario_id) REFERENCES scenarios(id) ON DELETE CASCADE,
    CONSTRAINT fk_sc_char FOREIGN KEY (character_id) REFERENCES characters(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE knowledge_documents (
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

-- The embedding vector dimension is substituted from EMBEDDING_DIMENSION
-- (config.php) when the schema is applied to an empty database; it must
-- match the configured embedding model.
CREATE TABLE knowledge_chunks (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    document_id BIGINT UNSIGNED NOT NULL,
    chunk_index INT UNSIGNED NOT NULL,
    content TEXT NOT NULL,
    embedding VECTOR({{EMBEDDING_DIMENSION}}) NOT NULL,
    UNIQUE KEY unique_document_chunk (document_id, chunk_index),
    CONSTRAINT fk_chunk_document FOREIGN KEY (document_id)
        REFERENCES knowledge_documents(id) ON DELETE CASCADE,
    VECTOR INDEX (embedding) DISTANCE=cosine
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Per-IP failed-login throttling (src/Service/LoginThrottle.php).
CREATE TABLE login_throttle (
    ip VARCHAR(45) NOT NULL PRIMARY KEY,
    failed_attempts INT UNSIGNED NOT NULL DEFAULT 0,
    locked_until DATETIME NULL,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- inserting data
INSERT INTO roles (id, role_name) VALUES (1, 'admin'), (2, 'user'), (3, 'editor');

INSERT INTO permissions (permission_name) VALUES 
('maintainUsers'), ('editPrograms'), ('editScenarios'), ('editCharacters'), ('view');

INSERT INTO role_permission (role_id, permission_id) 
SELECT 1, id FROM permissions;

INSERT INTO role_permission (role_id, permission_id) 
SELECT 2, id FROM permissions WHERE permission_name = 'view';

INSERT INTO role_permission (role_id, permission_id) 
SELECT 3, id FROM permissions WHERE permission_name != 'maintainUsers';
