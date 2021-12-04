//libs folder to store modules

var quotes = [
    "Jobs fill your pockets, but adventures fill your soul.",
    "Only those who risk going too far can possibly find out how far they can go.",
    "Don't listen to what they say. Go see.",
    "Fill your life with adventures, not things. Have stories to tell, not stuff to show.",
    "If we were meant to stay in one place, we'd have roots instead of feet."
]

//commonjs way of exports
exports.getQuote = function() {
     return quotes[Math.floor(Math.random() * quotes.length)];
}
