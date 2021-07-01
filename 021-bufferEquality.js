// Syntax
// buffer1.equals(buffer2);
// Returns true or false.

const buffer1 = Buffer.from("abc");
const buffer2 = Buffer.from("abc");
const buffer3 = Buffer.from("abcde");
console.log(buffer1.equals(buffer2));
console.log(buffer1.equals(buffer3));
