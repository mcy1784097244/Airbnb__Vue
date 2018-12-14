<template>
    <div id="register">
        <h3>欢迎来到爱彼迎</h3>
        <h4>已有账号？<router-link to="/login">登录</router-link></h4>
        <input type="text" placeholder="请输入用户名" class="sname" v-model="uname" @blur="handleName" />
        <div class="remember" v-if="errUname ">
            <span>X</span>
            <span>{{msgUname}}</span>
        </div>
        <input type="password" placeholder="请输入密码" class="supwd" v-model="upwd" @blur="handleUpwd"  />
        <div class="remember" v-if="errUpwd">
            <span>X</span>
            <span>{{msgUpwd}}</span>
        </div>
        <input type="password" placeholder="请确认您的密码" class="supwd" v-model="supwd" @blur="handleSupwd" />
        <div class="remember" v-if="errSupwd">
            <span>X</span>
            <span>{{msgSupwd}}</span>
        </div>
        <button type="button" @click="handleclick">注册</button>
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
                errUname:false,  //用户名提示信息显示与否
                errUpwd:false,         //密码提示信息显示与否
                errSupwd:false,  
                msgUname:"" ,  //用户名的信息提示
                msgUpwd:"",     //密码提示信息
                msgSupwd:"", 
                uname:"",
                upwd:"",
                supwd:""

            }
        },
        methods:{
            // 用户名验证
            handleName(){
                var uname=this.uname
                var reg= /^[a-zA-Z][\w]{2,8}$/;
                if(uname!="" && reg.test(uname)){
                    this.errUname=false
                    var url="http://127.0.0.1:3030/register/checkUname?uname=";
                    this.axios.get(url+uname).then(res=>{
                        //console.log(res)
                        if(res.data==0){
                            Toast({
                                message: '用户名可以注册',
                                position: 'middle',
                                duration: 500
                            });
                        }else{
                            this.errUname=true
                            this.msgUname="用户名已注册"
                        }
                    })
                }else{
                    this.errUname=true
                    this.msgUname="用户名开头为字母,3到9位字母或数字"
                }
            },
            // 密码验证
            handleUpwd(){
                var upwd=this.upwd
                var reg=/^[\d]{6,10}$/;
                if(upwd!="" && reg.test(upwd)){
                    this.errUpwd=false
                }else{
                    this.errUpwd=true
                    this.msgUpwd="密码必须为6到10位数字"
                }
            },
            //密码确认
            handleSupwd(){
                var upwd=this.upwd
                var supwd=this.supwd
                if(supwd!="" && supwd===upwd){
                    this.errSupwd=false
                }else{
                    this.errSupwd=true
                    this.msgSupwd="重复密码与原密码不一致"
                }
            },

            //注册
            handleclick(){
                if((this.errUname)||(this.uname=="")){
                    this.errUname=true
                    this.msgUname="用户名有误"
                }else if(this.errUpwd ||( this.upwd=="")){
                    this.errUpwd=true
                    this.msgUpwd="密码有误"
                }else if(this.errSupwd || (this.supwd=="")){
                    this.errSupwd=true
                    this.msgSupwd="重复密码有误"
                }else if(this.upwd!==this.supwd){
                    this.errSupwd=true
                    this.msgSupwd="重复密码与原密码不一致"
                }else{
                    var url="http://127.0.0.1:3030/register/register"
                   this.axios.post(url,`uname=${this.uname}&upwd=${this.upwd}`).then(res=>{
                       console.log(res)
                       if(res.data.ok==1){
                            Toast({
                                message: '注册成功，即将返回登录页面',
                                position: 'middle',
                                duration: 1000
                            });
                            var that=this
                            setTimeout(function(){
                                that.$router.push('/login')
                            },1500)
                       }
                   })
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