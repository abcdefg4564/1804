/**
 * Created by web-01 on 2018-04-10.
 */
const http = require("http");
const fs = require("fs");
const url = require("url");
var server = http.createServer();
server.listen(7900);
server.on("request",(req,res)=>{
    var obj = url.parse(req.url,true);
    console.log(obj);
    if (obj.pathname=="/register.html"){
        // res.statusCode=200;
        console.log(114124124)
        res.setHeader("Content-Type","text/html;charset=utf-8");
        // res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        console.log(224124124)
        fs.readFile("./register.html",(err,data)=>{
            console.log(334124124)
            // if(err) throw err;
            res.end(data);
            console.log(555555555555555);
            console.log(data.toString());
        });
        // res.end("asfasf")
    }else if(obj.pathname=="/register.do"){
        res.statusCode=200;
        res.setHeader("Content-Type","text/html;charset=utf-8");
        // res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        var uname = obj.query.uname;
        console.log(uname)
        var upwd = obj.query.upwd;
        var html = uname+":"+upwd+"\r\n";
        fs.appendFile("./public/user.log",html,(err)=>{
            if(err) throw err;
            res.end("<h1>注册成功</h1>");
        })
    }else{
        res.statusCode=404;
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.end("404");
    }

});
