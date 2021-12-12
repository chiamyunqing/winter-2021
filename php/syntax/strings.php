<?php
//===========String==================
$hey = "stringgg";
print("$hey");
print('$hey');

$name = "Fred Flintstone";
$fluff = substr($name, 6, 4); //start index, length
echo "Fluff is $fluff\n";

$repl = substr_replace($name, "bye", 4, 3);
echo "Replacement is $repl\n";

$input = 'Fred,25,Wilma';
$fields = explode(',', $input); //break string into array
foreach ($fields as $key=>$value) {
    echo "Key is {$key}, value is {$value} \n";
}

$combine = implode(',', $fields); //combine arr to a single string
echo "Combine is $combine\n";

//tokenising
$token = strtok($input, ',');
while ($token != false) {
    echo("{$token} next");
    $token = strtok(',');
}

// if (a === b) diff from (a == b) https://www.php.net/manual/en/language.operators.comparison.php
//Parse URL
$bits = parse_url("http://google.com:80?search=test");
print_r($bits);

//=========Heredoc===================
$clerihew = <<< EndOfQuote
Sir Humphrey Davy
"Abominated" gravy.
He lived ...
EndOfQuote;
echo $clerihew;

