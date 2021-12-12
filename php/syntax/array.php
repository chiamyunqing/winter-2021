<?php
//associative array 
$person["name"] = "test";
echo $person["name"];
echo "Hello, {$person["name"]}\n";

$price = [
    'parrot' => 15.29,
    'CAKE' =>33.55
];
echo $price['CAKE']; //case-sensitive
$arrayOfKeys = array_keys($price);
print_r($arrayOfKeys);

//1 is the starting key
$days = [
    1 => "mon", "tues", "wed", "thurs", "wed" //2 is tues etcetc
];
echo $days[2];

//indexed array
$family = array("me", "you");
$family[] = "hehe"; //append, if is associtive, will start from 0
echo $family[2];
$size = count($family); //size of array

//range of values
$numbers = range(5,10);
echo $numbers[3];

//multi-dimensional array
$row0 = [0,1,2];
$row1 = [3,4,5];
$multi = [$row0, $row1];
echo $multi[0][0];

$nums = range(1,7);
$rows = array_chunk($nums, 3);
print_r($rows);

//copy array's values into variables
$person = array("Fred", 35, "Betty");
list($name, $age, $wife) = $person;

//check if element exists
$person1['age'] = 0;
if (array_key_exists('age', $person1)) {
    echo "I exist!";
}

//remove elements in array
$subjects = array("physics", "chem", "math", "bio", "cs");
$removed = array_splice($subjects, 2, 4);
print_r($subjects);
print_r($removed);

array_splice($subjects, 3, 0, $removed); //add elements in array
print_r($subjects);

//convert associative array to variables
extract($price, EXTR_PREFIX_ALL, "price_is");
echo "Parrot is {$price_is_parrot}"; 

//opposite 
$color = "indigo";
$shape = "curvy";
$floppy = "none";
$a = compact("color", "shape", "floppy");
print($a['floppy']);

//============================Traversal==========================
//array traversal - associative array
foreach($subjects as $key=>$value) { //operates on copy of array so won't modify original array
    //do something
}

//...or use iterator
$obj = new ArrayObject($subjects);
$it = $obj->getIterator();

while ($it->valid()) { //each returns key-value and move ptr
    echo $it->key() . "=" . $it->current() . "\n";
    $it->next();
}

//array traversal - indexed array
$subjCount = count($subjects);
for ($i = 0; $i < $subjCount; $i++) {
    $value = $subjects[$i];
    echo "{$value}\n";
}

//============================Sorting========================

$names = array("Cath", "Angela", "Betty");
sort($names); //sort by values, use ksort for key sort
print_r($names);

//nat_sort for sorting strings with numbers
//array_merge merges two arrays

//implement set with array
function arrayUnion($a, $b) {
    $union = array_merge($a, $b);
    $union = array_unique($union);
    return $union;
}

