// Syntax:
// buffer3 = Buffer.concat(buffer1, buffer2);
// "buffer3" here means the merged buffer.

var buf1 = Buffer.from(("Kotlin "));
var buf2 = Buffer.from(("in 8 Hours"));
var buf3 = Buffer.concat([buf1, buf2]);
console.log("The buf3 is: " + buf3.toString());