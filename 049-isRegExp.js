// "isRegExp()" checks whether an object is a Regular Expression.
// var data = util.isRegExp(object);

// "util.isRegExp" is deprecated
var util = require("util");
var data1 = util.isRegExp(/Rust in 8 Hours/);
console.log(data1);
var data2 = util.isRegExp(new RegExp("string"));
console.log(data2);
var data3 = util.isRegExp(12 / 20 / 2019);
console.log(data3);

// Use "util.types.isRegExp"
var util = require("util");
var data1 = util.types.isRegExp(/Rust in 8 Hours/);
console.log(data1);
var data2 = util.types.isRegExp(new RegExp("string"));
console.log(data2);
var data3 = util.types.isRegExp(12 / 20 / 2019);
console.log(data3);
