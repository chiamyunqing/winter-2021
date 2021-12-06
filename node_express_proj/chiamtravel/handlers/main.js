//Miscellaneous routes

exports.newsletter = function(req,res) {
    res.render('newsletter', {csrf:'token'});
}

exports.genericThanks = function(req, res){
	res.render('thank-you');
};

exports.home = function(req, res) {
    //res.type('text/plain'); //sets content-type header
    //res.send('Chiam Travel');
    res.cookie('monster', 'nom nom');
    res.render('layouts/home'); //render html views
};

var quote = require('../lib/quotes.js'); 
exports.about = function(req, res) {
    res.render('layouts/about', {quote: quote.getQuote(),
        pageTestScript: '/qa/tests-about.js'}); 
};

exports.contact = function(req,res) {
    res.render('contact');
};
