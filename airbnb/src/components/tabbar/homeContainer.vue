<template>
    <div id="app-homeContainer">
        <!-- 顶部搜索栏 -->
        <div class="head-bg">
            <div class="mui-input-row mui-search">
                <input type="search" class="mui-input-clear" placeholder="输入目的地、城市或景点" v-model="msg" @click="search">
            </div>
        </div>
        <!-- 十宫格 -->
        <div class="index-section">
            <div>热门目的地</div>
            <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="tmp of list" v-if="tmp.pid>1 &&tmp.pid<12" @click="handleclick(tmp.pid)">
                        <a >
		                    <img :src="tmp.pic" alt="">
                            <div class="mui-media-body">{{tmp.title}}</div>
                        </a>
                    </li>
		        </ul> 
		    </div>
        </div>
        <!-- 热门房源 -->
        <div class="hotLocal">
            <div class="hot">全球热门房源</div>
            <a  v-for="i of list" v-if="i.pid>11 &&i.pid<15" @click="handleclick(i.pid)">
                <div class="mui-card" >
                    <img :src="i.pic" >
                    <div class="mui-card-content">
                        <div class="mui-card-content-inner">
                            <p>{{i.subtitle}}</p>
                            <p>{{i.title}}</p>
                            <p>￥{{i.price}}每晚</p>
                            <P>
                                <span>★★★★★</span> 
                                <span>233</span> 
                            </P>   
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <!-- 支付方式 -->
        <div class="pay">
            <div class="tel">
               <img src="../../../public/img/3F-1.png">
                <p>24小时中文客服</p>
                <p>+86</p>
                <p>400-120-8517</p> 
            </div>
            <div class="safe-pay">
                <img src="../../../public/img/3F-2.png">
                <p>安全支付</p>
                <p>支付宝付款已向中</p>
                <p>国用户开通</p> 
            </div>
            <div class="credit">
                <img src="../../../public/img/3F-3.png">
                <p>芝麻信用</p>
                <p>实名认证房东房客</p>
                <p>信息，真实可靠</p> 
            </div>
        </div>
        <!-- 评价 -->
        <div class="comment">
            <div class="com-title">真实房源评价，来自千万客户</div>
            <mt-swipe :auto="5000" :show-indicators="false">
                <mt-swipe-item v-for="i of list" :key="i.pid" v-if="i.pid>14 &&i.pid<18">
                    <a href="#">
                        <div class="com-left">
                            <img :src="i.pic">
                        </div>
                        <div class="com-right">
                            <p>“</p>
                            <p>{{i.title}}</p>
                            <p>
                                <span class="span1">
                                    <img src="../../../public/img/small1.jpg" alt="">
                                </span>
                                <span class="span2">
                                    <span>{{i.subtitle}}</span>
                                    <span>★★★★★</span>
                                </span>
                            </p>  
                        </div>
                        
                    </a>
                </mt-swipe-item>
            </mt-swipe>
            
 
        </div>
        <!-- ending -->
        <div class="end">
            <img src="http://127.0.0.1:3030/img/index/5F.jpg" alt="">
            <div>完美的旅行，从入住开始</div>    
        </div>
        <!-- 备案 -->
        <div class="end-extra">
            <div class="extra">京ICP备16017121号-3 京ICP证 160773号 
                <img src="https://z1.muscache.cn/airbnb/static/china/public_security_bureau_logo-5d90debd8b3d783447eeffa635df1972.png" alt=""> 
                <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502032345" target="_blank">京公网安备 11010502032345号
                </a> 
            </div>
            <div class="extra">© Airbnb, Inc.</div> 
        </div>
    </div>
   
</template>
<script>
    export default{
        data(){
            return{
                list:[],
                msg:""
            }
        },
        methods:{
            getImage(){
                var url="http://127.0.0.1:3030/indexImg";
                this.axios.get(url).then(res=>{
                    //console.log(res);
                    this.list=res.data
                })
            },
            search(){
                var msg=this.msg
                //console.log(msg)
                if(msg!=""){
                  this.$router.push("/product/"+msg);
                }
            },
            handleclick(id){
                //console.log(id)
                    this.$router.push("/hdetail/"+id)
            }
        },
        created(){
            this.getImage();
            var that=this
            document.onkeydown=function(e){
                var key=window.event.keyCode
                if(key==13){
                    that.search()
                   
                }
            }
        }
       
    }
</script>
<style>
    #app-homeContainer .head-bg{
        width:375px;
        height:300px;
        background: url("../../../public/img/bg.jpg") no-repeat;
        background-size:cover;
        position: relative;
    }
    #app-homeContainer .head-bg .mui-input-row{
        width:327px;
        height:40px;
        position: absolute;
        left:23px;
        top:248px;
    }
    #app-homeContainer .head-bg .mui-input-row input[type='search']{
        background: white;
        margin: 0;
        height:40px;
    }
    #app-homeContainer .index-section,#app-homeContainer .hotLocal,#app-homeContainer .pay,#app-homeContainer .comment,#app-homeContainer .end{
        margin-left:15px;
    }
   /* 10宫格 */
    #app-homeContainer .index-section{
        margin-top:26px;
        width:327px;
        height:192px;
        position: relative;
    }
    #app-homeContainer .index-section .mui-content{
        height:144px;
    }
    #app-homeContainer div.index-section div:first-child,#app-homeContainer div.hotLocal div.hot,#app-homeContainer div.comment div.com-title{
        width:327px;
        margin-bottom: 16px;
        font-size: 1.3em ;
        font-weight: 400 ;
        padding-left:10px;
    } 
    #app-homeContainer div.index-section .mui-grid-view.mui-grid-9{
        border:0;
        margin:0;
        background: white;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        height:144px;
    }
    #app-homeContainer div.index-section .mui-grid-view.mui-grid-9 .mui-media{
        border:0;
        margin:0;
        padding:0;
        height:64px;
        width:20%;
        margin-bottom: 16px;
    }
    #app-homeContainer div.index-section .mui-grid-view.mui-grid-9 .mui-media a{
        padding:0;
        height:64px;
        width:44px;
        margin:0 auto;
    }
    #app-homeContainer .mui-content .mui-media a img{
        width:44px;
        height:44px;
        border-radius: 50%;
    } 
    #app-homeContainer .mui-content .mui-media a .mui-media-body{
        margin-top:-2px;
        font-size:12px;  
    }
    /* 热门房源 */
    #app-homeContainer .hotLocal{
        width:327px;
        margin:0 auto;
        margin-top:16px;
    }
    #app-homeContainer .hotLocal .mui-card{
        margin-top:16px;
    }
    #app-homeContainer .hotLocal .mui-card img{
        width:327px;
        height: 218px;  
    }
    #app-homeContainer .hotLocal .mui-card .mui-card-content-inner p{
        margin-top: -5px;
        
    }
    #app-homeContainer .hotLocal .mui-card .mui-card-content-inner p:nth-child(1){
        font-size: 12px;
        color: #572533;
    }
    #app-homeContainer .hotLocal .mui-card .mui-card-content-inner p:nth-child(2){
        font-size: 17px;
        color: #484848;
        font-weight: 700;
    }
    #app-homeContainer .hotLocal .mui-card .mui-card-content-inner p:nth-child(3){
        font-size: 15px;
        color: #484848;
        font-weight: 300;
    }
    #app-homeContainer .hotLocal .mui-card .mui-card-content-inner p:nth-child(4) span:first-child{
        font-size: 14px;
        color: #008489;
        padding-left: 5px;
    }
    #app-homeContainer .hotLocal .mui-card .mui-card-content-inner p:nth-child(4) span:last-child{
        font-size: 14px;
        color: #484848;
        padding-left: 5px;
    }
    /* 支付方式 */
    #app-homeContainer .pay{
        width:327px;
        height: 95px;
        margin:48px auto;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #app-homeContainer .pay img{
        width:36px;
        height: 36px;
        margin-left:28px;
    }
    #app-homeContainer .pay p{
        font-size:12px;
        margin-bottom: 0;
        text-align: center;
    }
    #app-homeContainer .pay p:first-of-type{
        font-weight: 800;
        color:#484848
    }
    /* 评论 */
    #app-homeContainer .comment{
        width:327px;
        height: 208px;
        margin:48px auto;
    }
    #app-homeContainer .comment .mint-swipe{
        width:327px;
        height: 160px;
    }
    #app-homeContainer .comment div.mint-swipe-items-wrap a{
        /* display: inline-block; */
        padding:0;
        height: 160px;
        width:327px;
        display: flex;
    }
    #app-homeContainer .comment div.mint-swipe-items-wrap a div.com-left{
        margin-right: 10px;
    }
    #app-homeContainer .comment div.mint-swipe-items-wrap a div.com-left,div.com-left img{
        width:171.5px;
        height: 160px;
    }
    #app-homeContainer .comment div.mint-swipe-items-wrap a div.com-right{
        width:157px;
        height: 160px;
        position: relative;
    }
    #app-homeContainer .comment div.mint-swipe-items-wrap a div.com-right p:nth-child(1){
        width:20px;
        height:40px;
        position: absolute;
        line-height: 40px;
        font-size: 48px;
        color: #CACACA;
    }
    #app-homeContainer .comment div.mint-swipe-items-wrap a div.com-right p:nth-child(2){
        position: absolute ;
        top: 30px;
        height: 61px;
        margin-bottom: 0;
        font-size: 12px;
        color: #767676;
    }
    #app-homeContainer .comment div.mint-swipe-items-wrap a div.com-right p:nth-child(3){
        position: absolute;
        top: 118px ;
        display: inline-block;
        width:86px;
        height: 37px;
        margin-bottom: 0;
    }
    #app-homeContainer div.com-right p:nth-child(3) .span1,#app-homeContainer div.com-right p:nth-child(3) .span1 img{
        width: 28px;
        height: 28px;
    }
    #app-homeContainer div.com-right p:nth-child(3) .span1 img{
        margin-bottom: 5px;
    }
    #app-homeContainer div.com-right p:nth-child(3) .span2{
        width: 58px;
        height: 37px;
        display: inline-block;
        padding-left: 8px
    }
    #app-homeContainer div.com-right p:nth-child(3) .span2 span:last-child{
        color:#008489;
    }
    #app-homeContainer .end{
        width:327px;
        height:165px;
        margin:0 auto;
        position: relative;
    }
    #app-homeContainer .end img{
        width:327px;
        height:165px;
    }
    #app-homeContainer .end div{
        position: absolute;
        font-size: 18px;
        font-weight: 500;
        color: #ffffff;
        top: 55px;
        left: 0px;
        right: 0px;
        margin: auto;
        width: 200px;
    }
    /* 备案 */
    #app-homeContainer .end-extra{
        vertical-align: middle;
        height: 75px;
        width:327px;
        margin:48px auto;
    } 
    #app-homeContainer .end-extra .extra{
        font-weight: 600 ;
        margin: 0px;
        word-wrap: break-word;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: normal;
        color: #767676;
    }
    
</style>