<?php
session_start();

if(isset($_SESSION['user_id']) && isset($_SESSION['username'])){
    echo "Jste prihasen jako " . htmlspecialchars($_SESSION['username']);
} else{
    echo "prihlaseni se nezdarilo";
}
?>

<h1>diky</h1>
