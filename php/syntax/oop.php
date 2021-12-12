<?php
    class Person {
        public $name = '';
        const SPECIES = 'homosapien'; //const cannot change value
        public function __construct() {
            $this->name = "No name";
        }

        static function statFunc() {
            echo 'I\'m static';
        }

        //final means subclass cannot override
        //if visibility not specified, func is public
        final function name($newname = null) {
            if (!is_null($newname)) {
                $this->name = $newname;
            }
            return $this->name;
        }
    }

    class Kid extends Person {
        public $play = true;
    }

    interface Printable {
        function printOptions();
    }

    //traits for code reuse
    trait Logger {
        public function log($logString) {
            $className = __CLASS__;
            echo "Used by $className, $logString";
        }
    }

    class User {
        use Logger;
        public $name;
        function __construct($name) {
            $this->name=$name;
            $this->log($this->name);
        }
    }

    $ed = new Person;
 //   $ed->name("Edison");
    echo "hello {$ed->name}\n"; 
    $edCopy = clone $ed;
    $ed->name("Changed");
    echo "hello {$ed->name}\n";
    echo "hello {$edCopy->name}\n"; 
    print(Person::statFunc());
    

    $kid = new Kid;
    echo $kid->play;

    $user = new User("uuuuu");

//==================traits===========================
trait Command {
    function run() {
        echo "Command";
    }
}

trait Marathon {
    abstract function fit();

    function run() {
        echo "Run";
    }
}

class Hehe {
    use Command, Marathon {
        Marathon::run insteadof Command;
    }

    function fit() {
        return true;
    }
    //OR alias
    /*
    use Command, Marathon {
        Command::run as runCommand;
        Marathon::run insteadof Command;
    }
    */
}

?>
