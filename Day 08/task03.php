<?php 
function get_shortest($arrayOfStrings)
{
    $shortestStr = null;
    foreach ($arrayOfStrings as $str) {
        if(null === $shortestStr || strlen($str) < strlen($shortestStr)) {
            $shortestStr = $str;
        }
    }
    return $shortestStr;
}
?>