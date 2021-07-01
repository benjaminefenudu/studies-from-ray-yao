// Syntax
// result = buffer1.compare(buffer2);

var buffer1 = Buffer.from("100");
var buffer2 = Buffer.from("200");
var result = buffer1.compare(buffer2);
if (result < 0) {
  console.log(buffer1 + " is less than " + buffer2);
} else if (result === 0) {
  console.log(buffer1 + " is equal to " + buffer2);
} else {
  console.log(buffer1 + " is greater than " + buffer2);
}
