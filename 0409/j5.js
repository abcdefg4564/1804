/**
 * Created by web-01 on 2018-04-09.
 */
const url = require("url");
var surl = "http://www.jd.com:443/abc/efg.html?uname=tom&upwd=u123#h123";
var res = url.parse(surl,true)
console.log(res)
for (var i in res){
    console.log(res[i])
}
