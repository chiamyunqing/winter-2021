//tuples used for memorising properties of object
//order matters
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

//lost of info :(
const pepsi = ['brown', true, 40]; //an array
pepsi[0] = 40;
pepsi[2] = 'brown';

//it's a tuple now!
const coke:[string, boolean, number] = ['brown', true, 40];

//Type alias
type Drink = [string, boolean, number];
const cokeZero: Drink = ['brown', true, 40];
const tea: Drink = ['brown', false, 0];

//Why tuples sucks
const carSpecs: [number, number] = [400,3354];

const carStats = {
    horsepower: 400,
    weight: 3354
}
