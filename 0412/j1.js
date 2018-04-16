/**
 * Created by web-01 on 2018-04-12.
 */
const http = require("http");
const url = require("url");
const fs = require("fs");
var surl = "http://finance.sina.com.cn/stock/";
// var surl = "http://www.baidu.com";
// var surl = "http://n.sinaimg.cn/finance/562/w360h202/20180412/dGay-fyzeyqa8969182.jpg"
var res = url.parse(surl, true);
console.log(res.hostname + res.pathname);
var req = http.request({
    hostname: res.hostname,
    pathname: res.pathname
}, res => {
    console.log(1);
    // console.log(res);
    var arr = [];
    var str = "";
    res.on("data", buffer => {
        arr.push(buffer)
        str += buffer;
    });
    console.log(str)
    res.on("end", () => {
        fs.writeFile("download.html", arr, "utf8")
    })
});



req.end();
