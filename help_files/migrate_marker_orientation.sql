-- Run once when upgrading an existing database.
ALTER TABLE characters
    ADD COLUMN markerOrientation VARCHAR(16) NOT NULL DEFAULT 'stand' AFTER video_special;
