<?php
function sequence($itteration) {
    if ($itteration < 0) {
        return;
    }
    $result = "1";
    if($itteration === 0) {
        echo $result . PHP_EOL;
        return;
    }
    for ($i = 0; $i < $itteration+1; $i++) {
        echo $result . PHP_EOL;
        $result = generateNext($result);
    }
}

function generateNext($input) {
    $count = strlen($input);
    $result = '';
    $i = 0;
    while ($i < $count) {
        $digit = $input[$i];
        $countSame = 1;

        while ($i + 1 < $count && $input[$i] === $input[$i + 1]) {
            $countSame++;
            $i++;
        }
        $result .= $countSame . $digit;
        $i++;
    }
    return $result;
}
?>