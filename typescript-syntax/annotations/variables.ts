let apples: number = 5;
let pears = 5; //type inference
let y; //y is any type
y = 5;
y = 'hey';
let speed: string = 'fast';
let hasName: boolean = true;
let nothing: null = null;
let nothingMuch: undefined = undefined;

//built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1,2,3,4];

//Classes
class Car {
}
let car: Car = new Car();

//Object literal
let point: {x: number; y: number} = {
    x: 10,
    y: 20
};

//Function (input type => return type)
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}


//When to use annotations
// 1) Function that returns the 'any' type
// Avoid variables with 'any' type at all cost
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);

const coord2: {x: number, y: number} = JSON.parse(json);

//2) When we declare a variable on one line and initialise it later
let words = ['red', 'green'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green'){
        foundWord = true;
    }
}

//3) Variable whose type cannot be inferred correctly
let numberss = [-10, -1, 12];
let numbersAboveZero: boolean | number = false;
for (let i = 0; i < numberss.length; i++) {
    if (numberss[i] > 0){
        numbersAboveZero = numbers[i];
    }
}
