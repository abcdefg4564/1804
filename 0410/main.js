const http = require("http");
const fs = require("fs");
const url = require("url")
// var surl = "http://finance.sina.com.cn/stock/";
var surl = "http://www.taobao.com";
var res = url.parse(surl,true);
console.log(res.hostname+res.pathname)

var req = http.request({
		hostname:res.hostname,
		pathname:res.pathname
},res=>{
	console.log(1);
	console.log(res);
	var arr = [];
	var str = "";
	res.on("data",buffer=>{
		arr.push(buffer)
		str+=buffer;
	});
	res.on("end",()=>{
		fs.writeFile("download.html",arr,"utf8")
	})
});


req.end();
