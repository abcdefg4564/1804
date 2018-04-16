const http = require("http");
const fs = require("fs");
var server = http.createServer((req,res)=>{
	console.log(req.method);
	console.log(req.url);
	console.log(req.httpVersion);
	console.log(req.headers);
	// console.log(req);
	res.setHeader("Content-Type","text/html",charset="utf-8");
	fs.readFile("./index.html",(err,data)=>{
		if(err) throw error;
		res.write(data);
		res.end("welcome.22..7800");
	})

});
server.listen(7800);
