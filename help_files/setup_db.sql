SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS scenario_character;
DROP TABLE IF EXISTS scenarios;
DROP TABLE IF EXISTS program_scenario;
DROP TABLE IF EXISTS programs;
DROP TABLE IF EXISTS characters;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS role_permission;
DROP TABLE IF EXISTS permissions;
DROP TABLE IF EXISTS roles;

SET FOREIGN_KEY_CHECKS = 1;

-- creating new tables
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
    media TEXT NOT NULL,
    typeOfMedia VARCHAR(16) NOT NULL DEFAULT 'photo',
    marker TEXT NOT NULL,
    createdBy INT NOT NULL,
    anim_idle TEXT DEFAULT NULL,
    anim_talk TEXT DEFAULT NULL,
    anim_special TEXT DEFAULT NULL,
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

-- Admin (heslo 'heslo')
INSERT INTO users (username, password, role_id)
VALUES ('admin', 'SEMDEJTEHASH', 1);