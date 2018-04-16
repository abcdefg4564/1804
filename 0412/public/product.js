/**
 * Created by web-01 on 2018-04-12.
 */
const express = require("express");
var router = express.Router();
console.log(router);
router.get("/list",(req,res)=>{
    res.json({msg:"list"});
});
router.get("/del",(req,res)=>{
    res.json({msg:"del"});
});
router.get("/update",(req,res)=>{
    res.json({msg:"update"});
});
router.get("/search",(req,res)=>{
    res.json({msg:"search"})
})
module.exports = router;
