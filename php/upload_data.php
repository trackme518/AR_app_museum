<?php
$targetDir = __DIR__ . '/../data/uploads/';

if (isset($_FILES['file'])) {
    //adding time so I can enter multiple files with the same name
    $fileName = time() . '_' . basename($_FILES['file']['name']);
    $targetFile = $targetDir . $fileName;

    if (move_uploaded_file($_FILES['file']['tmp_name'], $targetFile)) {
        echo json_encode(['status' => 'ok', 'path' => 'data/uploads/' . $fileName]);
    } else {
        echo json_encode(['error' => 'Upload failed']);
    }
} else {
    echo json_encode(['error' => 'No file uploaded']);
}
?>