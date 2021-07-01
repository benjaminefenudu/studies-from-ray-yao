// "isArray" checks whether an object is an array.
// var data = util.isArray(object);

// util.isArray() is deprecated since v4.0.0
var util = require("util");
var myArr = new Array();
var data1 = util.isArray(myArr);
console.log(data1);
var data2 = util.isArray(new Array());
console.log(data2);
var data3 = util.isArray("Array");
console.log(data3);

// Use Array.isArray() instead
var myArr = new Array();
var data1 = Array.isArray(myArr);
console.log(data1);
var data2 = Array.isArray(new Array());
console.log(data2);
var data3 = Array.isArray("Array");
console.log(data3);
