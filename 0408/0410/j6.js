/**
 * Created by web-01 on 2018-04-10.
 */
const http = require("http")
const fs = require("fs");
const url = require("url");
var server = http.createServer(start).listen(7888);
function start(req,res) {
    var obj = url.parse(req.url,true);
    console.log(1251);
    res.end("124125 ")
    fs.readFile("./register.html",(err,data)=>{
        if(err) throw err;
        console.log(data.toString());
        fs.writeFile("./main2.html",)
        res.end("21352");
    })

}
