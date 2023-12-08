<?php
function calc(string $operator, int $nbr1, int $nbr2)
{
    if(strlen($operator) > 1)
    {
        return "Unknown operator";
    }

    switch ($operator) {
        case '+':
            return $nbr1 + $nbr2;
            break;

        case '-':
            return $nbr1 - $nbr2;
            break;
        
        case '*':
            return $nbr1 * $nbr2;
            break;

        case '/':
            if($nbr2 == 0) {
                return "Cannot divide by 0";
                break;
            }
            return $nbr1 / $nbr2;
            break;

        case '%':
            if($nbr2 == 0) {
                return "Cannot divide by 0";
                break;
            }
            return $nbr1 % $nbr2;
            break;
    }
}
?>