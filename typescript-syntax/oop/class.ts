class Vehicle {

    //same as setting this.color = color
    //modifier works the same way
    constructor(public color: string) {}

    public drive():void {
        console.log(`poopeee`);
    }

    protected honk():void {
        console.log('beep');
    }
}

//automatically calls constructor of vehicle if constructor not declared
class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }

    drive() : void { //override
        console.log(`vroom`);
    }

    private startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const vehicle = new Vehicle('orange')

const car = new Car('red');
car.drive();