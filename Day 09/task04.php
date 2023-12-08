<?php 
function Whoami() {
    if (isset($_POST['name']) && isset($_POST['age'])) {
        $name = $_POST['name'];
        $age = $_POST['age'];
        echo "Hi, my name is $name and I'm $age years old.\n";
    } elseif (isset($_POST['name']) && !empty($_POST['name']) && (!isset($_POST['age']) || !is_numeric($_POST['age']))) {
        $name = $_POST['name'];
        echo "Hi, my name is $name.\n";
    } elseif (!isset($_POST['name']) && isset($_POST['age']) && is_numeric($_POST['age'])) {
        $age = $_POST['age'];
        echo "Hi, I have no name and I'm $age years old.\n";
    } else {
        echo "Hi, I have no name.\n";
    }
}
?>