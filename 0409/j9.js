/**
 * Created by web-01 on 2018-04-09.
 */
const fs = require("fs");
var data = fs.readFileSync("t1.html");
console.log(data.toString());
var data = data.toString()
 fs.writeFileSync("t2.html",data);

