const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/checkUname",(req,res)=>{
      var uname=req.query.uname;
      var sql="select * from vip_user where uname=?";
      pool.query(sql,[uname],(err,result)=>{
          if(err) throw err
          if(result.length>0){
           res.send("1");//用户名已存在！
         }else{
            res.writeHead(200,{
              "Content-Type":"application/json",
              "Access-Control-Allow-Origin":"*"
            })
           res.write("0");
           res.end()//用户名可注册！
         }
      });
    
    });


router.post("/register",(req,res)=>{
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    console.log(uname,upwd);
    pool.query("insert into vip_user values(null,?,?,null,null,null,null,null)",[uname,upwd],(err,result)=>{
        if(err) console.log(err);
            res.writeHead(200,{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            });
            res.write(JSON.stringify({  ok:1}))
                
            res.end();
        })
    })

module.exports=router;