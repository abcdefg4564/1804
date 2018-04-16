/**
 * Created by web-01 on 2018-04-09.
 */
var fs = require("fs");
// console.log(fs);
var res = fs.readFileSync("./t1.html")
console.log(res.toString())
var res = fs.readFileSync("./loading1.gif")
console.log(res);
