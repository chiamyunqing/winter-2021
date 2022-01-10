//no type inference for arguments
//type inference for return value but best to put
const add = (a : number, b : number) => {
    return a + b;
}

function divide(a: number, b: number) : number {
    return a / b;
}

//anon func
const multiply = function(a: number, b: number): number {
    return a * b;
}

const logger = (message: string) : void => {
    console.log(message);
    return undefined; //can be null too
}

//when expect nothing to be returned then never, usually use void
const throwError = (message: string): never => {
    throw new Error(message);
}

const forecast = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = (forecast: {date: Date, weather: string}):void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}


//destructuring
const logWeather3 = ({date, weather}: {date: Date, weather: string}):void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}

//ES2015
const logWeather2 = ({date, weather}) => {
    console.log(date);
    console.log(weather);
}

logWeather(forecast);