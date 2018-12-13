//1.加载模块
const express=require("express");
const pool=require("./pool");
const bodyParser = require('body-parser');
//2.创建express对象
var app=express()

//引入注册借口
const login=require("./routes/login.js")

//3.服务器node.js允许跨域访问配置项
const cors=require("cors")
app.use(cors({
	origin:["http://127.0.0.1:8080","http://localhost:8080"],
	credentials:true
}))

app.use(bodyParser.urlencoded({extended:true}))
//4.指定静态目录
app.use(express.static(__dirname+"/public"));
//5.绑定监听端口
app.listen(3030);

//功能模块一 请求首页图片
app.get("/indexImg",(req,res)=>{
   var sql="select pid,title,subtitle,pic,price,href from vip_index_product";
   pool.query(sql,[],(err,result)=>{
	   if(err) console.log(err);
		res.writeHead(200,{
	      "Content-Type":"application/json;charset=utf8",
          "Access-Control-Allow-Origin":"*"
	  });
	   res.write(JSON.stringify(result));  
	   res.end();
	   console.log("响应完成");
   })
})

//功能模块二 请求故事页面图片
 app.get("/storyImg",(req,res)=>{
	var sql="select pid,family_id,title,smtitle,subtitle,good,commit,sm,md,lg from vip_story_pic";
	pool.query(sql,[],(err,result)=>{
		if(err) console.log(err);
		 res.writeHead(200,{
		   "Content-Type":"application/json;charset=utf8",
		   "Access-Control-Allow-Origin":"*"
	   });
		res.write(JSON.stringify(result));  
		res.end();
		console.log("响应完成");
	})
 })

 //功能三 故事页面图片
 app.get("/storylist",(req,res)=>{
	 var id=req.query.id
	 var sql="select smtitle,subtitle,sm,md,lg,good,price,commit from vip_story_pic where pid=?";
	 pool.query(sql,[id],(err,result)=>{
		if(err) console.log(err);
		 res.writeHead(200,{
		   "Content-Type":"application/json;charset=utf8",
		   "Access-Control-Allow-Origin":"*"
	   });
		res.write(JSON.stringify(result));  
		res.end();
		console.log("响应完成");
	})
 })

//功能四： 首页的模糊查询
app.get("/search",(req,res)=>{
	var msg=req.query.msg
	//console.log(msg)
	var sql="select * from vip_story_pic where smtitle=?"
	pool.query(sql,[msg],(err,result)=>{
		if(err) console.log(err)
		res.writeHead(200,{
			"Content-Type":"application/json;charset=utf8",
			"Access-Control-Allow-Origin":"*"
		});
		 res.write(JSON.stringify(result));  
		 res.end();
		 console.log("响应完成");
	})

})

//用户是否收藏了该商品
app.get("/iscollect",(req,res)=>{
	var uid=req.query.uid
	var pid=req.query.pid
	var sql="select * from vip_collect where uid=? and pid=?"
	pool.query(sql,[uid,pid],(err,result)=>{
		if(err) throw err
		console.log(result)
	    if(result.length>0){
            res.writeHead(200);
            res.write(JSON.stringify({code:200}))
        }else{
            res.write(JSON.stringify({code:201}))
        }
        res.end();
		
	})
})

//收藏商品
app.get("/updata",(req,res)=>{
	var uid=req.query.uid
	var pid=req.query.pid
    pool.query("insert into vip_collect values(?,?)",[uid,pid],(err,result)=>{
		if(err) console.log(err);
		res.writeHead(200,{
			"Content-Type":"application/json;charset=utf8",
			"Access-Control-Allow-Origin":"*"
		});
		 res.write(JSON.stringify(result));  
		 res.end();
		 console.log("响应完成");
	})  
	
})

//取消收藏
app.get("/delete",(req,res)=>{
	var uid=req.query.uid
	var pid=req.query.pid
	console.log(pid)
    pool.query("delete from vip_collect where uid=? and pid=?",[uid,pid],(err,result)=>{
		if(err) console.log(err);
		res.writeHead(200,{
			"Content-Type":"application/json;charset=utf8",
			"Access-Control-Allow-Origin":"*"
		});
		 res.write(JSON.stringify(result));  
		 res.end();
		 console.log("响应完成");
	})  
	
})

//用户收藏列表
app.get("/list",(req,res)=>{
	var uid=req.query.uid
	var sql="SELECT * FROM vip_story_pic WHERE pid = any (SELECT pid FROM vip_collect WHERE uid=?)"
	pool.query(sql,[uid],(err,result)=>{
		if(err) throw err
		//console.log(result)
		res.writeHead(200,{
			"Content-Type":"application/json;charset=utf8",
			"Access-Control-Allow-Origin":"*"
		});
		 res.write(JSON.stringify(result));  
		 res.end();
		 console.log("响应完成");
	})
})






 app.use("/login",login)












