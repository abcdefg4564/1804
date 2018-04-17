/**
 * Created by web-01 on 2018-04-10.
 */
const http = require("http")
const fs = require("fs")
const mysql = require("mysql");
console.log(mysql)
var rs = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "xz",
    port: 3306
})
rs.connect();
var sql = "select * from xz_user";
rs.query(sql, (err, res, fields) => {
    if (err) throw err;
    console.log(res)
})
var sql = "INSERT INTO `xz_user` (uid,phone) value(null,'13911119999') ";
rs.query(sql, (err, res) => {
    if (err) throw err;
    if (res.affectedRows > 0) {
        console.log("success");
    }
})
// console.log(rs)