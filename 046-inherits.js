// The features of a constructor can be inherited by another constructor.
// Syntax
// util.inherits(sub_constructor, super_constructor)
// sub_constructor inherits all features of a super_constructor.

var util = require("util");
function Super() {
  this.value = "a + b";
  a = "Linux Shell";
  b = "in 8 Hours";
}

function Sub() {
  this.value = a + b;
}

util.inherits(Sub, Super);
var objSuper = new Super();
console.log(objSuper);
var objSub = new Sub();
console.log(objSub);
