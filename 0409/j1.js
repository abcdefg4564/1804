/**
 * Created by web-01 on 2018-04-09.
 */
const http = require("http");
var server = http.createServer((req,res)=>{
        res.end("welcome 7800")
    })
    server.listen(7800);
