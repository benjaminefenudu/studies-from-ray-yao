// "isDate()" checks whether an object is a date.
// var data = util.isDate(object);

// "util.isDate()" is deprecated
var util = require("util");
var data1 = util.isDate(new Date());
console.log(data1);
var data2 = util.isDate(Date());
console.log(data2);
var data3 = util.isDate("12/20/2019");
console.log(data3);

// Use "util.types.isDate()"
var util = require("util");
var data1 = util.types.isDate(new Date());
console.log(data1);
var data2 = util.types.isDate(Date());
console.log(data2);
var data3 = util.types.isDate("12/20/2019");
console.log(data3);
