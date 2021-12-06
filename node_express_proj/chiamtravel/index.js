var express = require('express');
var mongoose = require('mongoose');
var app = express();
var credentials = require('./credentials.js');

app.set('port', process.env.PORT || 3000);

//===============================DB set up ==============================
const mongoUrl =  credentials.dbConnString;
mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

var Vacation = require('./models/vacation.js');
 // initialize vacations
 Vacation.find(function(err, vacations){
    if(vacations.length) return;

    new Vacation({
        name: 'Hood River Day Trip',
        category: 'Day Trip',
        sku: 'HR199',
        description: 'Spend a day sailing on the Columbia and ' + 
            'enjoying craft beers in Hood River!',
        priceInCents: 9995,
        tags: ['day trip', 'hood river', 'sailing', 'windsurfing', 'breweries'],
        maximumGuests: 16,
        available: true,
        packagesSold: 0
    }).save();

    new Vacation({
        name: 'Oregon Coast Getaway',
        category: 'Weekend Getaway',
        sku: 'OC39',
        description: 'Enjoy the ocean air and quaint coastal towns!',
        priceInCents: 269995,
        tags: ['weekend getaway', 'oregon coast', 'beachcombing'],
        maximumGuests: 8,
        available: true,
        packagesSold: 0
    }).save();

    new Vacation({
        name: 'Rock Climbing in Bend',
        category: 'Adventure',
        sku: 'B99',
        description: 'Experience the thrill of rock climbing in the high desert.',
        priceInCents: 289995,
        tags: ['weekend getaway', 'bend', 'high desert', 'rock climbing', 'hiking', 'skiing'],
        maximumGuests: 4,
        available: false,
        packagesSold: 0
    }).save();
});

//============================================================================


function getWeatherData() {
    return {
        locations: [
            {
                name:'Portland',
                forecastUrl:'http://www.wunderground.com/US/OR/Portland.html',
                iconUrl: 'http://icons-ak.wxug.com/i/c/k/cloudy.gif',
                weather: 'Cloudy',
                temp: '54.1 F'
            }
        ]
    };
}

app.use(require('cookie-parser')(credentials.cookieSecret));

//set up handlebars view engine (templating framework) - can contain dynamic content!
var handlebars = require('express-handlebars').create({defaultLayout:'main', 
            partialsDir: __dirname + '/views/partials/',
            helpers: {
                section: function(name, options){
                    if(!this._sections) this._sections = {};
                    this._sections[name] = options.fn(this);
                    return null;
                }
            }}); //create an instance
app.engine('handlebars', handlebars.engine);
app.set("view engine", "handlebars");

//static middleware for static resources eg images, css files
app.use(express.static(__dirname + '/public')); //creates route for static files

//middleware to detect test
app.use(function(req,res,next) {
    //res.locals is part of context that will be passed to views
    res.locals.showTests = app.get('env') != 'production' && req.query.test == '1';
    next();
});

//middleware for partials 
app.use(function(req,res,next) {
    if (!res.locals.partials) res.locals.partials = {};
    res.locals.partials.weatherContext = getWeatherData();
    next();
});


app.use(require('body-parser')());



app.post('/process', function(req,res) {
    console.log('form: ' + req.query.form);
    console.log('csrf: ' + req.body._csrf);
    console.log('name: ' + req.body.name);
    console.log('email: ' + req.body.email);
    if (req.xhr || req.accepts('json,html') == 'json') { //req.xhr is true if request is an ajax req
        //TODO: DB handling here
        
        res.send({success: true});
    } else {
        //not ajax request
        res.redirect(303, '/thank-you');
    }
})


//IMPT: in express, order in which routes and middleware are added is significant
//path and its handler function (middleware system), app.VERB
//express default status code is 200
app.get('/', function(req, res) {
    //res.type('text/plain'); //sets content-type header
    //res.send('Chiam Travel');
    res.cookie('monster', 'nom nom');
    res.render('layouts/home'); //render html views
});

var quote = require('./lib/quotes.js'); //need the ./ else it will look in node_modules
app.get('/about', function(req, res) {
    res.render('layouts/about', {quote: quote.getQuote(),
        pageTestScript: '/qa/tests-about.js'}); 
});

app.get('/tours/hood-river', function(req,res){
    res.render('tours/hood-river');
});

app.get('/tours/request-group-rate', function(req,res) {
    res.render('tours/request-group-rate');
});

app.get('/vacations', function(req,res) {
    Vacation.find(function(err, vacations) {
        var context = {
            vacations: vacations.map(function(vacation) {
                return {
                    available: vacation.available,
                    sku: vacation.sku,
                    name: vacation.name,
                    description: vacation.description,
                    price: vacation.getDisplayPrice()
                }
            })
        };
        res.render('vacations', context);
    });
})

//this is a simplified example just to demonstrate updating of db
app.get('/buyvacation', function(req,res) {
    const sku1 = req.query['sku'];
    Vacation.findOne({ sku: sku1 }, function(err, vacation){
        if(err || !vacation) {
            console.log(err);
            return res.redirect(303, '/vacations');
        }
        vacation.packagesSold++;
        vacation.save();
        res.redirect(303, '/thank-you');
    });
})

//param next indicates that its for error handling, should appear AFTER ALL routes
//app.use is the method by express to add middleware -> catch-all handler for anything that's not matched by route
//custom 404 page (not found) - app.use(middleware)
app.use(function(req, res, next) {
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
