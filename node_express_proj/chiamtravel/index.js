var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

//set up handlebars view engine (templating framework) - can contain dynamic content!
var handlebars = require('express-handlebars').create({defaultLayout:'main'}); //create an instance
app.engine('handlebars', handlebars.engine);
app.set("view engine", "handlebars");

//static middleware for static resources eg images, css files
app.use(express.static(__dirname + '/public')); //creates route for static files

//IMPT: in express, order in which routes and middleware are added is significant
//path and its handler function (middleware system), app.VERB
//express default status code is 200
app.get('/', function(req, res) {
    //res.type('text/plain'); //sets content-type header
    //res.send('Chiam Travel');
    res.render('layouts/home'); //render html views
});

var quote = require('./lib/quotes.js'); //need the ./ else it will look in node_modules
app.get('/about', function(req, res) {
    res.render('layouts/about', {quote: quote.getQuote()}); 
});

//app.use is the method by express to add middleware -> catch-all handler for anything that's not matched by route
//custom 404 page (not found) - app.use(middleware)
app.use(function(req, res, next) {
    //res.type('text/plain');
    //res.status(404).send('404 - not found');
    res.status(404);
    res.render('layouts/404');
});

//custom 500 page (internal server error) 
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('layouts/500');
});

app.listen(app.get('port'), function() {
    console.log('Express started at http://localhost:' + app.get('port'));
})
