// The syntax to create an object of Buffer:
// const obj = Buffer.from("string");

const obj = Buffer.from("RayYao"); // create a Buffer object
console.log("ascii: " + obj.toString("ascii")); // output ascii encoding
console.log("utf8: " + obj.toString("utf8")); // output utf8 encoding
console.log("utf16le: " + obj.toString("utf16le")); // output utf16le encoding
console.log("ucs2: " + obj.toString("ucs2")); // output ucs2 encoding
console.log("base64: " + obj.toString("base64")); // output base64 encoding
console.log("latin1: " + obj.toString("latin1")); // output latin1 encoding
console.log("binary: " + obj.toString("binary")); // output binary encoding
console.log("hex: " + obj.toString("hex")); // output hex encoding

// Create a buffer object based on size:

// “Buffer.alloc(size)” creates a safe buffer,
// because it always clear all previous data in the buffer.

// const buf = Buffer.alloc(size);

const buf = Buffer.alloc(6);
console.log(buf);

// const buf = Buffer.allocUnsafe(size);

const buff = Buffer.allocUnsafe(6);
console.log(buff);

// “const buf = Buffer.allocUnsafe(6);” creates an unsafe buffer object with six
// bytes. But the unsafe buffer runs faster than the safe buffer.
// This buffer is unsafe; it may contain some previous sensitive data.
// Therefore, it needs to be initialized by using fill (0).