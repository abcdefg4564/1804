/**
 * Created by web-01 on 2018-04-09.
 */
var buf1 = Buffer.alloc(10)
 console.log(buf1)
buf1[0] = 0xaa;
buf1[1] = 255;
buf1[2] = 09;
buf1[3] = 21;
console.log(buf1[0]);
console.log(buf1[1]);
console.log(buf1[2]);
console.log(buf1[3]);
console.log(buf1);
var buf2 = Buffer.allocUnsafe(20);
console.log(buf2);
var buf3 = Buffer.from([1,3,16,56]);
console.log(buf3);
var buf4 = Buffer.from("茜思茅");
console.log(buf4);
console.log(buf4.toString());
