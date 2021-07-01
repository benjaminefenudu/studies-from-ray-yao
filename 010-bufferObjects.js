// Node.Js Buffer

// Node. js can process following character encodings:
// Encoding Description
// ascii    - an only 7 bits encoded of ascii data
// utf8     - a multi byte encoded of unicode characters
// utf16le  - 2 or 4 bytes encoded of unicode characters
// ucs2     - the alias of utf16le
// base64   - base64 encoding
// latin1   - one-byte encoded of the string
// binary   - the latin1 of alias
// hex      - hexadecimal character encoding

// Buffer objects
// There are several methods to create Buffer objects.
// The syntax to create the Buffer object is as follows:

// Buffer.alloc(size)
// Creates a Buffer object of the specified size. (safe)

// Buffer.allocUnsafe(size)
// Creates a Buffer object of the specified size. (unsafe).

// Buffer.from(array)
// Create a Buffer object initialized with an array

// Buffer.from(buffer)
// Create a Buffer object with the data of another buffer object

// Buffer.from(‘string’)
// Create a Buffer object initialized with a string