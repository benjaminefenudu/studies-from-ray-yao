// Syntax
// buffer2.copy(buffer1, index);
// Copy buffer2 to the specified position of the buffer1
// index: the specified position
// Overwrites the current buffer from index position
// till end of new buffer

var buf1 = Buffer.from("Java Guide in 8 Hours");
var buf2 = Buffer.from("Script");
buf2.copy(buf1, 4);   // copy buf2 into the index 4 of buf1
console.log(buf1.toString());