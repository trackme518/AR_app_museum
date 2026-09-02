-- Run once when upgrading an existing database.
ALTER TABLE characters
    ADD COLUMN video_talk TEXT DEFAULT NULL AFTER anim_special,
    ADD COLUMN video_special TEXT DEFAULT NULL AFTER video_talk;
