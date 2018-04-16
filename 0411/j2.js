/**
 * Created by web-01 on 2018-04-11.
 */
const url = require("url");
const http = require("http");
const fs = require("fs");
const mysql = require("mysql");
var str = "http://www.baidu.com";
var server = http.createServer();
var pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"xz",
    port:3306,
    connectionLimit:5
})
pool.getConnection((err,connection)=>{
    if (err) throw err;
    var sql = " SELECT * FROM xz_user";
    connection.query(sql,(err,result)=>{
        console.log(result)
        connection.release();
});
})
server.on("request",(req,res)=>{
    var rs = url.parse(req.url,true);
    console.log(rs);
    console.log(mysql)
    res.end("<h1>Welcome...</h1>");
})
server.listen(7788);
