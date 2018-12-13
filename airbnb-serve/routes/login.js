const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.post("/signin",(req,res)=>{
    var uname=req.body.uname
    var upwd=req.body.upwd
   // console.log(uname,upwd)
    var sql="select * from vip_user where uname=? and upwd=?"
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) console.log(err)
        //console.log(result.uid)
        if(result.length>0){
            res.writeHead(200);
            res.write(JSON.stringify({ok:1,msg:result}))
        }else{
            res.write(JSON.stringify({ok:0,msg:"用户名或密码错误"}))
        }
        res.end();
    })
})

module.exports=router;