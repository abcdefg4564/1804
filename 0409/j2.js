/**
 * Created by web-01 on 2018-04-09.
 */
var url = require("url");
var surl = "http://www.jd.com:8050/abc/efg.html?uid=u123&upwd=u456#h789";
var res = url.parse(surl);
console.log(res);
console.log("---------------------")
console.log(res.port);
for (var i in res){
    console.log(res[i])
}


