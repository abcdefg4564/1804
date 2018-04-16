/**
 * Created by web-01 on 2018-04-09.
 */
const fs = require("fs");
var res = fs.writeFileSync("2.txt","I am Andy");
var data = fs.readFileSync("2.txt");
console.log(data.toString());
