// Because the “allocUnsafe(10)” create an unsafe buffer, 
// we need to use fill() to clear the buffer , make it safe.

// buf.fill(0);

const buf = Buffer.allocUnsafe(10);
console.log(buf);
buf.fill(0); // fill buffer as 0
console.log(buf);
