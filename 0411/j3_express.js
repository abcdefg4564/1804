/**
 * Created by web-01 on 2018-04-11.
 */
const http = require("http");
const express = require("express");
const url = require("url")
const mysql = require("mysql");
var pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "xz",
    port: 3306,
    connectionLimit: 5
})
var app = express();
var server = http.createServer(app);
server.listen(7900);
var surl = "/";
app.get(surl, (req, res) => {
    var obj = url.parse(req.url, true);
    console.log(obj);
    console.log(__dirname);
    // res.sendFile(__dirname + "/test.html");
    pool.getConnection((err, connection) => {
        if (err) throw err;
        var sql = " SELECT * FROM xz_user";
        connection.query(sql, (err, result) => {
            // console.log(result)
            connection.release();
            res.send(result);
        });
    })
})