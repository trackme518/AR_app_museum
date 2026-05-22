<?php

namespace App\Service;

use App\Exception\ValidationException;
use finfo;

/**
 * Service responsible for securely handling and validating file uploads.
 */
class FileUploaderService
{
    /**
     * Uploads a media file (photo, video, or 3D model).
     *
     * @param array|null $file The uploaded file array from $_FILES
     * @return array|null Returns ['path' => string, 'type' => string] or null if no file
     * @throws ValidationException If validation fails
     */
    public function uploadMedia(?array $file): ?array
    {
        $allowedExts = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'mp4', 'webm', 'mov', 'glb', 'gltf'];

        $result = $this->processUpload($file, 'media', 'media_', $allowedExts, true, true);

        if ($result === null) {
            return null;
        }

        $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));

        if (in_array($ext, ['glb', 'gltf'])) {
            $result['type'] = 'model';
        } elseif (str_starts_with($result['mime'], 'image/')) {
            $result['type'] = 'photo';
        } else {
            $result['type'] = 'video';
        }

        unset($result['mime']);

        return $result;
    }

    /**
     * Uploads an AR marker image.
     *
     * @param array|null $file The uploaded file array from $_FILES
     * @return array|null Returns ['path' => string] or null if no file
     * @throws ValidationException If validation fails
     */
    public function uploadMarker(?array $file): ?array
    {
        $allowedExts = ['jpg', 'jpeg', 'png', 'webp'];
        return $this->processUpload($file, 'markers', 'marker_', $allowedExts, false, false);
    }


    /**
     * Handles the core logic for file upload, validation, and storage.
     *
     * @param array|null $file The uploaded file array from $_FILES
     * @param string $folder Target folder for upload (relative to /uploads)
     * @param string $prefix Prefix for the generated file name
     * @param array $allowedExts List of allowed file extensions
     * @param bool $allowVideo Whether to allow video files
     * @param bool $allowModel Whether to allow 3D model files (glb, gltf)
     * @return array|null Returns ['path' => string, 'mime' => string] or null if no file
     * @throws ValidationException If validation fails
     */
    private function processUpload(
        ?array $file,
        string $folder,
        string $prefix,
        array $allowedExts,
        bool $allowVideo,
        bool $allowModel = false
    ): ?array {
        if (!isset($file) || $file['error'] === UPLOAD_ERR_NO_FILE) {
            return null;
        }

        if ($file['error'] !== UPLOAD_ERR_OK) {
            throw new ValidationException("Chyba při přenosu souboru.");
        }

        $extension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));

        if (!in_array($extension, $allowedExts)) {
            throw new ValidationException("Nepodporovaná přípona souboru.");
        }

        $finfo = new finfo(FILEINFO_MIME_TYPE);
        $mime = $finfo->file($file['tmp_name']);

        $isImage = str_starts_with($mime, 'image/');
        $isVideo = str_starts_with($mime, 'video/');

        $isModel = $allowModel && in_array($extension, ['glb', 'gltf']);

        if (!$isImage && (!$allowVideo || !$isVideo) && !$isModel) {
            throw new ValidationException("Nepodporovaný formát souboru (MIME: $mime).");
        }

        $uploadDir = __DIR__ . '/../../uploads/' . $folder . '/';
        $webPath = '/uploads/' . $folder . '/';

        if (!is_dir($uploadDir) && !mkdir($uploadDir, 0755, true)) {
            throw new ValidationException("Nepodařilo se vytvořit složku pro upload.");
        }

        $fileName = uniqid($prefix, true) . '.' . $extension;
        $targetFile = $uploadDir . $fileName;

        if (!move_uploaded_file($file['tmp_name'], $targetFile)) {
            throw new ValidationException("Nepodařilo se uložit soubor.");
        }

        return [
            'path' => $webPath . $fileName,
            'mime' => $mime
        ];
    }
}
