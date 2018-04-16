/**
 * Created by web-01 on 2018-04-11.
 */
const url = require("url");
const http = require("http");
const fs = require("fs");
const mysql = require("mysql");
// var str = "http://www.baidu.com";
var server = http.createServer();
var pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "xz",
    port: 3306,
    connectionLimit: 5
})
pool.getConnection((err, connection) => {
    if (err) throw err;
    var sql = " SELECT * FROM xz_user";
    connection.query(sql, (err, result) => {
        // console.log(result)
        connection.release();
    });
});
server.on("request", (req, res) => {
    console.log(12515);
    var rs = url.parse(req.url, true);
    console.log(rs.pathname);
    var pathname = rs.pathname
res.statusCode=200;
res.setHeader("Content-Type","text/html;charset=utf-8");
    if (pathname == "/fav/add.html") {
        fs.readFile("add.html", (err, data) => {
            if (err) throw err;
            console.log(data)
            // res.end("<h1>Welcome--add.html...</h1>");
            res.end(data);
        });

    } else if (pathname == "/fav/add.do") {
        var uname = rs.query.uname;
        var upwd  = rs.query.upwd;
        console.log(uname);
        var sql = " INSERT INTO xz_user (uname,upwd) VALUE (?,?)";
        pool.query(sql,[uname,upwd],(err,result)=>{
            if(err) throw err;
            if (result==0){
                console.log("失败")
            }else{
                console.log("成功")
            }
        })
        res.end("<h1>Welcome--add.do...</h1>");
    }else if (pathname == "/fav/list.html") {
        var sql = " SELECT * FROM xz_user ";
        pool.query(sql,(err,result)=>{
            if(err) throw err;
        if (result==0){
            console.log("失败")
        }else{
            // console.log(res)
           var result =  JSON.stringify(result)
             res.end(result)
        }
    })
    }else {
        fs.readFile("../../404.html", (err, data) => {
            if (err) throw err;
            // console.log(data)
            res.end("<h1>404</h1>");

        })
    }

})
server.listen(7788);