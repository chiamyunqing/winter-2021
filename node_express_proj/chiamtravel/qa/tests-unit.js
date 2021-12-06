var quote = require('../lib/quotes.js');
var expect = require('chai').expect;

suite('Quote tests', function() {
    test('getQuote() should return a quote', function() {
        expect(typeof quote.getQuote() == 'string');
    });
});

//run this file with mocha -u tdd -R spec qa/tests-unit.js