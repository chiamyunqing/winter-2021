const carMakers: string[] = ['ford', 'toyota'];

const carsByMake : string[][] = [];

//Why typed array? Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();
//Prevent adding incompatible values to array
carMakers.push('chevy');

//Help with 'map'
carMakers.map((car: string) : string => {
    return car.toLowerCase();
})

//Flexible types
const importantDates : (string| Date)[] = [new Date(), '2030-10-10'];