interface Printable {
    summary(): string; //returns a string
}

const oldCivic  = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Car name is ${this.name}`;
    }
};

const drink = {
    color: 'brown',
    summary(): string {
        return `Drink colour is ${this.color}`;
    }
}

const printSummary = (item: Printable): void => {
    console.log(item.summary());
}

printSummary(oldCivic);
printSummary(drink);
