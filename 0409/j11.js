/**
 * Created by web-01 on 2018-04-09.
 */
const fs = require("fs")
fs.readFile("./2.txt",(err,data)=>{
    console.log(err,data.toString())
})