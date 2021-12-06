//vacation routes
var Vacation = require('../models/vacation.js');

exports.vacationList = function(req,res) {
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
};

//this is a simplified example just to demonstrate updating of db
exports.buyVacations = function(req,res) {
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
};
