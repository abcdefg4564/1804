/**
 * Created by web-01 on 2018-04-12.
 */
const http = require("http")
const express = require("express")
const routerProduct = require("./product")
var app = express();
var server = http.createServer(app)
server.listen(7900);
app.use("/product",routerProduct);
