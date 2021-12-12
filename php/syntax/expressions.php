<?php

echo "9 Lives" - 1; //8 (int)
echo "3.14 Pies" * 2; //6.28(float)
echo "9Lives." - 1; //8(float) as . in string becomes float


$var = 8;
print $var++ ; //$var++ returns $var
echo "Var is {$var}\n";

$str = "az";
$str++;
echo "Str is {$str}\n";
$str = "K9";
$str++;
echo "Str is {$str}\n";
$str = "49";
$str++;
echo "Str is {$str}\n";

//================Miscellaneous Operators=====================
$listing = `dir `; //shell command
//echo $listing;

//foreach
$array = array("a", "b", "c");
foreach ($array as $current) {
    echo "{$current} \n";
}

foreach ($array as $key=>$value) {
    echo "Key is {$key}, value is {$value} \n";
}

//goto
for ($i = 0; $i < 5; $i++) {
    $error = true;
    if ($error) {
        goto cleanup;
    }
}

cleanup:
    echo "cleaned!";
    