const qs = require("querystring");
var str = "uname=tom&upwd=123&age=19";
var res = qs.parse(str);
console.log(res);
var obj = {uname:"老刘",age:40};
var res = qs.stringify(obj);
console.log(res);
