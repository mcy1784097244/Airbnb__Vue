<template>
    <div id="hdetail" >
        <!-- 头部固定 -->
        <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="back" ></a>
            <h1 class="mui-title">房源中心</h1>
            <span class="mui-icon mui-icon-upload share"></span>
            <span class="mui-icon mui-icon-extra mui-icon-extra-heart-filled heart" @click="collect"  :class="{active:isSelect}"></span>
        </header>
        <!-- 中间部分 -->
        <div id="center"   v-for="i of list">
            <!-- 轮播 -->
            <mt-swipe :auto="4000">
                    <mt-swipe-item><img :src="i.sm"></mt-swipe-item>
                    <mt-swipe-item><img :src="i.md"></mt-swipe-item>
                    <mt-swipe-item><img :src="i.lg"></mt-swipe-item>
            </mt-swipe>
            <div class="hoter-name">
                <span>清风徐卡，水波不清清风徐清清风徐卡，水波不清</span>
                <img src="../../../public/img/small1.jpg">
            </div>
            <div style="margin-top:16px;margin-bottom: 24px;border-bottom:1px solid #ccc"></div>
            <div class="attention">
                <img src="../../../public/img/detail.gif">
                <div>
                    <p>该地区房源不收取服务费</p>
                    <p>您可享受「零服务费」优惠，无需支付额外的服务费，即可预订该房源</p>
                </div>
            </div>
            <div style="margin-top:16px;margin-bottom: 24px;border-bottom:1px solid #ccc"></div>
            <div class="grid">
                <div class="mui-row" >
                    <div class="mui-col-xs-6">
                        <span class="mui-icon mui-icon-flag">1间卧室</span>
                    </div>
                    <div class="mui-col-xs-6">
                        <span class="mui-icon mui-icon-flag">1间卫生间</span>
                    </div>
                </div>
                <div class="mui-row" >
                    <div class="mui-col-xs-6">
                        <span class="mui-icon mui-icon-flag">1张床</span>
                    </div>
                    <div class="mui-col-xs-6">
                        <span class="mui-icon mui-icon-flag">最多住2人</span>
                    </div>
                </div>
            </div>
            <div style="margin-top:16px;margin-bottom: 24px;border-bottom:1px solid #ccc"></div>
            <div class="commit">
                 <h3>评价34</h3>
                <div class="mui-row" >
                    <div class="mui-col-xs-8">
                        <span>如实描述</span>
                    </div>
                    <div class="mui-col-xs-4">
                        <span>★★★★★</span>
                    </div>
                </div>
                <div class="mui-row" >
                    <div class="mui-col-xs-8">
                        <span>沟通交流</span>
                    </div>
                    <div class="mui-col-xs-4">
                        <span>★★★★★</span>
                    </div>
                </div>
                <div class="mui-row" >
                    <div class="mui-col-xs-8">
                        <span>干净卫生</span>
                    </div>
                    <div class="mui-col-xs-4">
                        <span>★★★★★</span>
                    </div>
                </div>
                <div class="mui-row" >
                    <div class="mui-col-xs-8">
                        <span>位置便利</span>
                    </div>
                    <div class="mui-col-xs-4">
                        <span>★★★★★</span>
                    </div>
                </div>
                <div class="mui-row" >
                    <div class="mui-col-xs-8">
                        <span>入住顺利</span>
                    </div>
                    <div class="mui-col-xs-4">
                        <span>★★★★★</span>
                    </div>
                </div>
                <div class="mui-row" >
                    <div class="mui-col-xs-8">
                        <span>高性价比</span>
                    </div>
                    <div class="mui-col-xs-4">
                        <span>★★★★★</span>
                    </div>
                </div>
            </div>
            <!-- 日期选择器 -->
            <!-- 地图 -->
            <!-- 位置 -->

        </div>
        <!-- 占位 -->
        <div style="height:100px"></div>
        <!-- 尾部固定 -->
        <div class="mui-row" id="footer" v-for="i of list" >
            <div class="mui-col-xs-6 footer-item">
                <div>
                    <span>￥{{i.price}}</span>
                    <span>每晚</span>
                </div>
                <div>
                    <span>★★★★★</span> 
                    <span>{{i.commit}}条</span> 
                </div> 
            </div>
            <div class="mui-col-xs-6">
                <button>申请预定</button>
            </div>
        </div>
        
        
    </div>
</template>
<script>
   import { Toast } from 'mint-ui'
   
    export default{
        data(){
            return{
                pid:"",
                list:[],
                isSelect:false,
                isState:false   //初始的收藏状态是否改变   true为收藏，false为没有收藏
            }
        },
        methods:{
            getImage(){
                this.pid=this.$route.params.pid
                var url="http://127.0.0.1:3030/storylist?id=";
                // console.log(id)
                this.axios.get(url+this.pid).then(res=>{
                      console.log(res)
                      this.list=res.data
                    //   console.log(this.list)
                })
            },
            back(){
               this.$router.go(-1)
            },
            collect(){
                if(this.isSelect){
                    Toast({
                        message: '取消收藏',
                        position: 'middle',
                        duration: 1000
                    });
                    this.isSelect=false
                }else{
                    Toast({
                        message: '收藏成功',
                        position: 'middle',
                        duration: 1000
                    });
                    this.isSelect=true
                }
            }

        },
        created() {
            this.$store.state.showBottomNav = false;
            this.getImage();

            //进入页面首先判断是否收藏
            var uid=localStorage.getItem('uid')
            //console.log(uid)
            var url="http://127.0.0.1:3030/iscollect?uid="
            this.axios.get(url+uid+"&pid="+this.pid).then(res=>{
                   // console.log(res) 
                    if(res.data.code==200){
                        this.isSelect=true
                        this.isState=true
                    }else{
                        this.isSelect=false
                        this.isState=false
                    }
                    
            })
            
            
        },
        destroyed(){
            
            this.$store.state.showBottomNav = true
                var uid=localStorage.getItem('uid')
                //console.log(uid)
                //console.log(this.pid)
            if(this.isSelect!=this.isState){
                if(this.isSelect){
                    var url="http://127.0.0.1:3030/updata?uid="
                    this.axios.get(url+uid+"&pid="+this.pid).then(res=>{
                        //console.log(res)
                    })
                }else{
                    var url="http://127.0.0.1:3030/delete?uid="
                    this.axios.get(url+uid+"&pid="+this.pid).then(res=>{
                        //console.log(res)
                    })
                }
            }
        }
    }
</script>
<style>
    #center{
        margin:0 16px;
        margin-top:50px;
    }
    #center .mint-swipe{
        height:200px;
        
    }
    /* 头部固定 */  
   #header .share,.heart{
       float: right;
       padding-right:20px;
       
   }
   #header .heart{
       margin-right:10px;
       
   }
   .heart{
       color: rgb(170, 165, 165);
   }
   /* 尾部固定 */
   #footer{
    bottom: 0;
    width: 100%;
    height:78px;
    position: fixed;
    z-index: 100;
    background-color: white;
    box-shadow: 0 1px 6px #ccc;
    padding-top:16px;
    padding-left:16px;
   }
   #footer button{
       width:180px;
       height:46px;
       color:white;
       background: rgb(255, 90, 95);
       outline: none;
       border:0;
       font-size: 16px;
       font-weight: bold;
       margin-left:20px;
   }
   .active{
      color: rgb(255, 90, 95);
   }
   #footer .footer-item{
       width:147px;
       height: 46px;
       font-size: 12px;
   }
   #footer .footer-item div:first-child span:first-child{
       font-size: 22px;
       font-weight: bold;
   }
   #footer .footer-item div:last-child span:first-child{
       color:#008489;
       font-size: 16px;
       margin-right:4px;
   }
   /* 中间 */
   #hdetail .hoter-name{
       margin-top:10px;
       display: flex;
       justify-content: space-around;
       height:60px;
       margin-bottom:10px;
       /* border-bottom:1px solid #e1e1e1; */
   }
   #hdetail .hoter-name img{
        width:48px;
        height: 48px;
        margin-top:5 px;
   }
   #hdetail .hoter-name span{
       width:200px;
        height:48px;
        line-height: 30px;
        padding-left:10px;
        font-size:16px;
   }
   #hdetail .attention{
        background-color: rgba(178, 218, 219, 0.3);
        display: flex;
        border-radius: 3px ;
        padding: 16px ;
        border-width: 0.5px ;
        border-style: solid ;
        border-color: rgb(178, 218, 219);
        border-image: initial ;
   }
   #hdetail .attention img{
       border-radius: 50%;
       width:56px;
       height: 56px;
       margin-top:5px;
   }
   #hdetail .attention div{
       padding-left:20px;
   }
   #hdetail .attention div p:first-child{
       font-weight: bold;
       color:black;
   }
   #hdetail .grid .mui-row{
        margin-top:10px;
   }
   #hdetail .grid div span{
       font-size:16px;
   }
   #hdetail .commit .mui-row{
        margin-top:10px; 
        color:rgba(63, 60, 60, 0.924);
        font-size: 16px;
   }
   #hdetail .commit .mui-col-xs-4 span{
        color:#008489 ;
        font-weight:500;
        font-size: 18px;
   }
</style>