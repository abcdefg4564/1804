var str = "abc123中";
// var buffer = Buffer.from(str);
buffer = Buffer.alloc(10);
console.log(buffer);
buffer[0]=255;
buffer[1]=0xaa
console.log(buffer);
console.log(buffer[1])
buffer[1]="45";
console.log(str.length)
console.log(buffer.length)

buffer2 = Buffer.allocUnsafe(215662)
console.log(buffer2)