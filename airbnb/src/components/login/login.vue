<template>
    <div id="login">
        <h3>登录爱彼迎</h3>
        <h4>还没有账号？<router-link to="/register">注册</router-link></h4>
        <input type="text" placeholder="用户名" class="sname" v-model="uname" />
        <input type="password" placeholder="密码" class="supwd" v-model="upwd" />
        <div class="remember">
            <input type="checkbox">
            <span>记住我</span>
            <a href="#">忘记密码?</a>
        </div>
        <button type="button" @click="handleClick">登录</button>
        <div class="otherLogin"><span>使用其他方式登录</span></div>
        <div class="other">
            <img src="../../../public/img/wb.jpg" />
            <span>微博</span>
        </div>   
    </div>
</template>
<script>
    import {Toast} from 'mint-ui'
    export default{
        data(){
            return {
                uname:"",
                upwd:""
            }
        },
        methods:{
            handleClick(){
                var uname=this.uname
                var upwd=this.upwd
                if(!uname && !uname ){
                   Toast("用户名、密码不能为空");
                    return ;
                }
                var url="http://127.0.0.1:3030/login/signin"
                this.axios.post(url,`uname=${uname}&upwd=${upwd}`).then(res=>{
                    //console.log(res)
                    var uid=res.data.msg[0].uid
                    //console.log(uid)
                    if(res.data.ok==1){
                        localStorage.setItem('newName',uname);
                        localStorage.setItem('uid',uid);
                        // console.log(this.state.uname)
                        //  localStorage.setItem('token',res.data.ok)
                        Toast({
                                message: '即将返回首页',
                                position: 'middle',
                                duration: 1000
                            });
                            var that=this
                        setTimeout(function(){
                           that.$router.push('/home')
                        },1500)
                        
                    }else{
                        alert("用户名密码错误")
                    }
                })
            },
            getParams(){
                //获取路由带过的参数
                let routerParams=this.$route.query.name;
                //将数据放在当前组件的数据内
                this.msg=routerParams;
                console.log(routerParams)
            }

        },
        created() {
            this.$store.state.showBottomNav = false
        },
        destroyed(){
            this.$store.state.showBottomNav = true
        }
    }
</script>
<style>
    *{
        padding:0;
        margin: 0;
    }
    #login{
        width:311px;
        height: 667px;
        box-sizing: border-box;
        /* padding: 32px; */
        margin: 0 auto;
    }
    #login h3{
        margin-top:0;
        padding-top:40px;
        color: rgb(72, 72, 72);
        margin-bottom: 8px;
        font-size: 25px;
        line-height: 30px;
        letter-spacing: -0.6px
    }
    #login h4{
        margin-bottom: 24px;
        font-weight: normal ;
        overflow-wrap: break-word;
        font-size: 19px
    }
    #login h4 a{
        color: #008489;
    }
    #login input{
        border:1px solid rgba(0, 0, 0, 0.075);
    }
    #login .remember{ 
        height: 24px;
        margin-bottom: 15px;
    }
    #login .remember span{ 
        margin-left: 10px;  
    }
    #login .remember a{
        color: #008489;
        float:right;
    }
    #login button{
        height: 51px;
        width: 311px;
        background: rgb(255, 90, 95);
        color:white;
        font-size: 20px;
        font-weight: bold;
        border-radius: 5px;
        border: 0;
        margin-bottom: 10px;
    }
    #login .otherLogin {
        position: relative;
    }
    #login .otherLogin span{
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        display: block;
    }
    #login .otherLogin::before{
        content: "" ;
        position: absolute ;
        border-bottom: 1px solid rgb(228, 228, 228);
        top: 50% ;
        right: 70% ;
        width: 100px ;
    }
    #login .otherLogin::after{
        content: "" ;
        position: absolute ;
        border-bottom: 1px solid rgb(228, 228, 228);
        top: 50% ;
        left: 70% ;
        width: 100px ;
    }
    #login .other{
        margin-top: 15px;
        text-align: center
    }
    #login .other img{
        width:20px;
        height:20px;
        margin-right: 5px
    }    
    #login .other span{
        height:  25px;
        line-height: 25px;
        display: inline-block;
    }
</style>