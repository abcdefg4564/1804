/**
 * Created by web-01 on 2018-04-11.
 */
/**
 * Created by web-01 on 2018-04-11.
 */
const http = require("http");
const express = require("express");
// const url = require("url");
// const mysql = require("mysql");
const qs = require("querystring");
var app = express();
var server = http.createServer(app);
server.listen(7900);
// var pool = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "xz",
//     port: 3306,
//     connectionLimit: 50
// })

app.get('/test2.html', function(req, res) {
    res.sendFile(__dirname + "/test2.html");
});
app.post("/user", (req, res) => {
    res.on("data", (buf) => {
        var obj = qs.parse(buf.toString());
        res.json(obj)
    })
})
