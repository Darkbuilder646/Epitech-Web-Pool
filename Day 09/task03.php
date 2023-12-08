<?php 
function dynamic_body() {

    if(isset($_GET['page'])) {
        $page = $_GET['page'];

        $pages = ['home', 'php', 'sql'];

        if(in_array($page, $pages)) {
            $file_path = "{$page}.html";

            if(file_exists($file_path)) {
                $html = file_get_contents($file_path);
                return $html;
            }
        } else {
            return "<p>Unknown page</p>";
        }
    } else {
        return "<p>Unknown page</p>";
    }
}
?>