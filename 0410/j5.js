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

function userLogin(uid,uname, upwd,phone) {
    var sql = " INSERT INTO `xz_user` (uid,uname,upwd,phone) VALUE (?,?,?,?)";

    rs.query(sql,[uid,uname,upwd,phone], (err, res) => {
        if (err) throw err;
        console.log(res);
        if(res.affectedRows>0){
            console.log("成功")
        }else {
            console.log("失败")
        }

    })
}
userLogin(null,"abc123", "123456","1390020"+parseInt(Math.random()*1000+1000));

