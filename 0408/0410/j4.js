/**
 * Created by web-01 on 2018-04-10.
 */
const http = require("http")
const fs = require("fs")
const mysql = require("mysql");
// console.log(mysql)
var rs = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "xz",
    port: 3306
})
rs.connect();

function userLogin(uname, upwd) {
    var sql = "select * from xz_user where uname=? and upwd=?";

    rs.query(sql, [uname, upwd], (err, res) => {
        if (err) throw err;
        console.log(res);
        if (res.length == 0) {
            console.log("失败")
        } else {
            console.log("成功")
        }

    })
}
userLogin("123456", "123456");