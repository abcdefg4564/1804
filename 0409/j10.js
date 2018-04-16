/**
 * Created by web-01 on 2018-04-09.
 */
const http = require("http")
const https = require("https")
const url = require("url")
const fs = require("fs")
var surl = "http://www.baidu.com";
var rurl = url.parse(surl)
console.log(rurl)
var req = http.request(rurl,(res)=>{
    // console.log(res)
    res.on("data",function (c) {
        console.log(c)
    })
})
// console.log(res);
