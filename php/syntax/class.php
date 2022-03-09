<?php

    class User {
        private $name;
        private $age;
        public static $testStatic = 6;

        public function __construct($name, $age) {
            echo __CLASS__ . ' instantiated </br>';
            $this->name = $name;
            $this->age = $age;
        }
        
        public function sayHello() {
            return $this->name .' says hello';
        }

        public function __destruct() {
            echo "destructor ran";
        }

        //magic method
        public function __get($property) {
            if (property_exists($this, $property)) {
                return $this->$property;
            }
        }

        public function __set($property, $value) {
            if (property_exists($this, $property)) {
                $this->$property = $value;
            }
            return $this;
        }

        public static function testStatic($change) {
            if ($change < self::$testStatic) { //self cos static
                echo "lesser";
            }
        }
    }

    $user1 = new User('Brad', 14);

    $user1->__set('name', 'YQ');
    echo $user1->__get('name');
    echo "</br>";

    echo User::testStatic(3);
