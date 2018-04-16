/**
 * Created by web-01 on 2018-04-12.
 */
const http = require("http");
const express = require("express");
var app = express();
var server = http.createServer(app)
server.listen(7800);
// console.log(express)
app.use((req,res,next)=>{
    console.log('Time:', Date.now());
    console.log(1);
    next();
})
app.get("/list",(req,res)=>{
    console.log(2)
    res.json({uname:"tome",age:"19"});
})
