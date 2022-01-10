const profile = {
    name1: 'alex',
    age: 25,
    coords: {
        lat: 0,
        lng: 15
    },
    //func defined in object
    setAge(age: number) : void {
        this.age = age;
    }
};

//destructuring
//const {age} = profile;
const {name1, age} : {age: number; name1: string} = profile;

//destructure : properties
const {coords: {lat, lng}}: {coords: {lat: number, lng: number}} = profile;
