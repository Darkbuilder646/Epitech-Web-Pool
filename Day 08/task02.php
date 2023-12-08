<?php
function dog_bark(int $nbr)
{
    if($nbr <= 0) {
        echo "\n";
    } else {
        $bark = str_repeat("woof ", $nbr);
        $trim_bark = trim($bark);
        echo $trim_bark . "\n";
    }
}
?>