<?php 
function render_body($typeOfBody) {
    $pages = ['home', 'php', 'sql'];
    if(in_array($typeOfBody, $pages)) {
        $file_path = "{$typeOfBody}.html";
        if(file_exists($file_path)) {
            $html = file_get_contents($file_path);
            return $html;
        }
    } else {
        return "<p>Unknown page</p>";
    }
}
?>