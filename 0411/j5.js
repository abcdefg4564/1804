/**
 * Created by web-01 on 2018-04-11.
 */
const  http = require("http");
const express = require("express");
var app = express();
var server = http.createServer(app);
app.get('/', function(req, res){
    res.send("<h1>hello world</h1>");
});
app.listen(7800);