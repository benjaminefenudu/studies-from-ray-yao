// The syntax to write to buffer:
// length = buf.write("string");

buf = Buffer.alloc(256);
len = buf.write("NodeJS in 8 Hours");
console.log("The string length is " + len);

// "Buffer.alloc(256)" creates a buffer object with 256 bytes.
// "buf.write("...")" writes a string to buffer.