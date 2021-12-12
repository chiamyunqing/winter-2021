<?php

//===================Pass parameter by reference==============
function doubler(&$value) {
    $value = $value << 1;
}

$a = 3;
doubler($a);
echo "\$a is {$a}";


function neverChangeArrVar($arr) { //this makes a copy of array
    $arr[0] = "changed";
}

$arr = array("a", "b", "c");
neverChangeArrVar($arr);
print_r($arr);

function changeArrVar(& $arr) { //this changes array content
    $arr[0] = "changed";
}
changeArrVar($arr);
print_r($arr);

$arrMixed = array(1, 2, 4);
changeArrVar($arrMixed);
print_r($arrMixed);

//================Variable Parameters======================
function getPreferences() {
    $count = func_num_args();
    echo "\$count is $count\n";
}

getPreferences(1,2,3,4);
getPreferences();
