// Syntax
// var buffer2 = buffer1.slice(start, end);
// "buffer2" is a new small buffer coming from buffer1.
// start: the new buffer starts at this index.
// end: the new buffer ends at this index.

var buf1 = Buffer.from("Scala in 8 Hours");
var buf2 = buf1.slice(6, 16);
console.log("The buf2 content is: " + buf2.toString());
