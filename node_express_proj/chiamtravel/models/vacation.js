var mongoose = require('mongoose');

var vacationSchema = mongoose.Schema(
    {
        name: String,
        description: String,
        available: Boolean,
        priceInCents: Number,
        maximumGuests: Number,
        category: String,
        sku: String,
        tags: [String],
        packagesSold: Number
    }
);

vacationSchema.methods.getDisplayPrice = function() {
    return '$' + (this.priceInCents/100).toFixed(2);
};

var Vacation = mongoose.model('Vacation', vacationSchema);
module.exports = Vacation;
