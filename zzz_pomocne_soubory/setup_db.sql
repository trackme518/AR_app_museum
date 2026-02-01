-- Vypnutí kontroly cizích klíčů, aby šly tabulky smazat v libovolném pořadí
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS scenario_character;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS scenarios;
DROP TABLE IF EXISTS characters;

SET FOREIGN_KEY_CHECKS = 1;

-- Tabulka rolí
CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    role_name VARCHAR(32) NOT NULL UNIQUE,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabulka uživatelů
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(16) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role_id INT NOT NULL DEFAULT 2, 
    PRIMARY KEY (id),
    CONSTRAINT fk_user_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabulka postav
CREATE TABLE characters (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL,
    description TEXT,
    intro TEXT,
    media TEXT NOT NULL,
    typeOfMedia VARCHAR(16) NOT NULL DEFAULT 'photo',
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabulka scénářů
CREATE TABLE scenarios (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Propojovací tabulka M:N
CREATE TABLE scenario_character (
    id INT NOT NULL AUTO_INCREMENT,
    scenario_id INT NOT NULL,
    character_id INT NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (scenario_id, character_id),
    CONSTRAINT fk_scen FOREIGN KEY (scenario_id) REFERENCES scenarios(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_char FOREIGN KEY (character_id) REFERENCES characters(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Vložení základních dat
INSERT INTO roles (role_name) VALUES ('admin'), ('user');

-- Admin (heslo 'BEZDCisy1TC2')
INSERT INTO users (username, password, role_id) 
VALUES ('admin', '$2y$10$wLurQVmwbDf40U7LEXtQs.UkadqW93eC1ouOR3Vz4GdmSS/cr4B8S', 1);