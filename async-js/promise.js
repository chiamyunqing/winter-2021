//returns a promise
var promise = loadImage('...');

//register callbacks, return promise objects
promise.then(function(img) {
    //do sth on success
})

promise.catch(function(e) {
    //do sth on error
})


//create and resolve a promise
//a promise serves as a placeholder for result of an operation
function loadImage(url) {
    var promise = new Promise(
        function resolver(resolve, reject) { //resolver func executes synchronously
            //callaback passed to then and catch are asynchro
            var img = new Image();
            img.src = url;
            
            //function used to update promise once outcome is known
            img.onload = function() {
                resolve(img);
            };

            img.onerror = function(e) {
                reject(e);
            };
        }
    );
    return promise;
}

//promise states: Pending, Fulfilled, Rejected (op cannot be completed)
//state can't change when fulfilled/ rejected
//Reject func -> transits promise to reject state
//Resolve func -> transits to fulfilled state
//if promise.resolve(otherPromise), fate of promise determined by otherPromise
var promise = new Promise(function(res, rej) {
    res(Math.PI); //Promise is already in fulfilled stage now!
    rej(0); //does nth
    res(Math.sqrt(-1)); //does nth
});

promise.then(function(number) {
    console.log('number is ' + number);
});


var p1, p2;
p1 = Promise.resolve();
p2 = p1.then(function() {
    //...
});
//p1 != p2, a new promise is returned
//chaining promises
step1().then(
    function step2(resultFromStep1) {
        //,,,
    }
).then(
    function step3(resultFromStep2) {
        //...
    }
);

//promises are used to manage order in which code is run relative to other tasks

//==========error handling=====================
Promise.reject(Error('bad news')).then( //a rejected promise is constructed
    function step2() {
        console.log('never runs');
    }
).then (
    function step3() {
        console.log('never runs');
    }
).catch( //if catch block is removed, promise is rejected stater
    function(error) {
        console.log(error);
    }
)
