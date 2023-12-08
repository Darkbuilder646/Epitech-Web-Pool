<?php
function form_is_submitted() {
    return isset($_POST['submit']);
}

function whoami() {
    $name = isset($_POST['name']) ? $_POST['name'] : "I have no name";
    $age = isset($_POST['age']) && is_numeric($_POST['age']) ? $_POST['age'] : "no age";
    $curriculum = isset($_POST['curriculum']) ? $_POST['curriculum'] : "";

    $curriculumOptions = array(
        'pge' => 'PGE (Programme Grande Ecole)',
        'msc' => 'MSc Pro',
        'coding' => 'Coding Academy',
        'wac' => 'Web@cademie'
    );

    $intro = "Hi, my name is $name.";
    if ($age !== "no age") {
        $intro .= " and I'm $age years old.";
    }
    if (!empty($curriculum) && isset($curriculumOptions[$curriculum])) {
        $intro .= " I'm a student of " . $curriculumOptions[$curriculum] . ".";
    }

    echo $intro;
}
?>