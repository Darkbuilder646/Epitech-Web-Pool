<?php
function calc_average($arrayOfNumber)
{
    $result = 0;

    foreach ($arrayOfNumber as $nbr) {
        $result += $nbr;
    }

    return round($result / count($arrayOfNumber), 1);

}
?>