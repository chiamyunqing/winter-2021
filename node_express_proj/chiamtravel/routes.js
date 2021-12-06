//IMPT: in express, order in which routes and middleware are added is significant
//path and its handler function (middleware system), app.VERB
//express default status code is 200
//Append /?test=1 to run test

var main = require('./handlers/main.js');
var tours = require('./handlers/tours.js');
var vacation = require('./handlers/vacation.js');

module.exports = function(app) {

    //misc routes
    app.get('/', main.home);
    app.get('/newsletter', main.newsletter);
    app.get('/thank-you', main.genericThanks);
    app.get('/about', main.about);
    app.get('/contact', main.contact);

    //tours routes
    app.get('/tours/hood-river', tours.hoodRiverTour);
    app.get('/tours/request-group-rate', tours.requestGroupRate);

    //vacation routes
    app.get('/vacations', vacation.vacationList);
    app.get('/buyvacation', vacation.buyVacations);
}
