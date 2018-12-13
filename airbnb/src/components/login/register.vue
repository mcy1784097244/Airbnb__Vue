<template>
    <div id="register">
        <h3>欢迎来到爱彼迎</h3>
        <h4>已有账号？<router-link to="/login">登录</router-link></h4>
        <input type="text" placeholder="请输入用户名" class="sname" v-model="uname" />
        <div class="remember" v-if="errUname ">
            <span>X</span>
            <span>用户名密码错误</span>
        </div>
        <input type="password" placeholder="请输入密码" class="supwd" v-model="upwd" @blur="handleName" />
        <input type="password" placeholder="请确认您的密码" class="supwd" v-model="supwd" />
        <div class="remember" v-if="errUpwd">
            <span>X</span>
            <span>密码错误</span>
        </div>
        <button type="button" >注册</button>
        <div class="otherLogin"><span>使用其他方式注册</span></div>
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
                errUname:true,  //用户名提示信息显示与否
                errUpwd:true,         //密码提示信息显示与否
                msgUname:"" ,  //用户名的信息提示
                msgUpwd:"",     //密码提示信息
                uname:"",
                upwd:"",
                supwd:""

            }
        },
        methods:{
            handleName(){
                console.log(2)
                var uname=this.uname
                var reg= /^[a-zA-Z][\w]{2,8}$/;
                if(uname!="" && reg.test(uname)){
                    console.log(1)
                }
            }

        }
              
    }
</script>
<style>
    *{
        padding:0;
        margin: 0;
    }
    #register{
        width:311px;
        height: 667px;
        box-sizing: border-box;
        margin: 0 auto;
    }
    #register h3{
        margin-top:0;
        padding-top:40px;
        color: rgb(72, 72, 72);
        margin-bottom: 8px;
        font-size: 25px;
        line-height: 30px;
        letter-spacing: -0.6px
    }
    #register h4{
        margin-bottom: 24px;
        font-weight: normal ;
        overflow-wrap: break-word;
        font-size: 19px
    }
    #register h4 a{
        color: #008489;
    }
    #register input{
        border:1px solid rgba(0, 0, 0, 0.075);
    }
    #register .remember{ 
        height: 20px;
        margin-bottom: 15px;
        font-size: 14px;
        color: #008489;
    }
    #register .remember span{ 
        margin-left: 10px;  
    }
    #register button{
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
    #register .otherLogin {
        position: relative;
    }
    #register .otherLogin span{
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        display: block;
    }
    #register .otherLogin::before{
        content: "" ;
        position: absolute ;
        border-bottom: 1px solid rgb(228, 228, 228);
        top: 50% ;
        right: 70% ;
        width: 100px ;
    }
    #register .otherLogin::after{
        content: "" ;
        position: absolute ;
        border-bottom: 1px solid rgb(228, 228, 228);
        top: 50% ;
        left: 70% ;
        width: 100px ;
    }
    #register .other{
        margin-top: 15px;
        text-align: center
    }
    #register .other img{
        width:20px;
        height:20px;
        margin-right: 5px
    }    
    #register .other span{
        height:  25px;
        line-height: 25px;
        display: inline-block;
    }
</style>