// "inspect(object)" can display the data of an object
// util.inspect(object)

var util = require("util");
function Book() {
  this.title = "HTML";
  this.when = "in";
  this.number = "8";
  this.unit = "Hours";
}

var obj = new Book();
console.log(util.inspect(obj));
