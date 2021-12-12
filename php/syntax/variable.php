<?php
//=======================Variable variable====================
$foo = "bar";
$$foo = "baz\n"; 
echo $bar;

//=========================Variable references=================
$black = "black";
$white = "white";
$black = & $white; //alias
echo "Black is now $black\n";
$white .= " and black"; //append
echo "Black is now $black\n";
$black = "Change again!\n";
echo "White is now $white\n";
unset($black); //removes a variable's value
$black = "Black";
print $black;
print $white;

//return value by reference
function &retRef() {
    $var = "PHP";
    return $var;
}
$v = & retRef();
echo "$v\n";

//=================Variable Scope========================
//global var are not accessible inside functions unless global keyword used
function updateCounter() {
    //global $counter; 
    $counter++;
}
$counter = 10;
updateCounter();
echo $counter;

//static variables - values retained between calls to a function
function updateCounter2() {
    static $counter; 
    $counter++;
    echo "Static counter is {$counter}\n";
}
$counter = 10;
updateCounter2();
updateCounter2();

//PHP is copy-on-write memory
//Memory - reference counting, ref count of value reaches 0, mem is released