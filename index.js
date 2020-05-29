var arr = require('./data/data.json');

var quote = {};

const randomSerialNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports.getRandQuote = function () {
    var sno = randomSerialNumber(0, 4);
    quote.text =  arr[sno].text;
    quote.from = arr[sno].from;
    return quote;
};
