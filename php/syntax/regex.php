<?php

//anchor
echo preg_match("/^cow/", "Lala cowhand"); //false - ^ means stick to beginning
echo preg_match("/^cow/", "cowhand"); //true
echo preg_match("/cow$/", "lala cowhand"); //false - $ means stick to end
echo preg_match("/cow$/", "lala cow"); //true 

//period - match any char
echo preg_match("/c*d/", "cowhand");

//build character class
echo preg_match("/c[aeiou]t/", "clt"); //false
echo preg_match("/c[aeiou]t/", "caaaeeeeeuuut"); //false
echo preg_match("/c[^aeiou]t/", "clt"); //true ^- negate

//quantifiers {n} - quantifier
echo preg_match("/\+65-[0-9]{4}-[0-9]{4}/", "+65-1234-5789"); //true
echo preg_match("/\+65-[0-9]{4}-[0-9]{4}/", "+65-1234-578"); //false
echo preg_match("/\+65-[0-9]{4}-[0-9]{4}/", "65-1234-578"); //false

