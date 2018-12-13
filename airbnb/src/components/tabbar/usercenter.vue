
<template>
    <div id="usercenter">
        <div class="dicon">
            <img src="../../../public/img/small1.jpg" alt="">
            <span>{{msg}}</span>
        </div>
        <mt-cell title="通知" to="//github.com" is-link></mt-cell>
        <mt-cell title="房源订单中心" to="//github.com" is-link></mt-cell>
        <mt-cell title="旅程" to="//github.com" is-link></mt-cell>
        <mt-cell title="邀请好友" to="//github.com" is-link></mt-cell>
        <mt-cell title="设置" to="//github.com" is-link></mt-cell>
        <mt-cell title="获取帮助" to="//github.com" is-link></mt-cell>
        <mt-cell title="了解如何出租" to="//github.com" is-link></mt-cell>
        <mt-cell title="发布房源" to="//github.com" is-link></mt-cell>
        <mt-cell title="向我们反馈" to="//github.com" is-link></mt-cell>
        <mt-button size="large"  class="btn" @click="signout">{{btn}}</mt-button>
    </div>
</template>


<script>
    export default{
        data(){
            return {
                msg:"未登录",
                btn:"登录"
            }
        },
        methods:{
            signout(){
                if(this.btn=="退出登录"){
                    this.msg=localStorage.getItem("newName")
                    localStorage.removeItem("newName");  
                    history.go(0)
                }else if(this.btn=="登录"){
                    this.$router.push('/login') 
                }
            }

        },
        created(){
            console.log(localStorage.getItem("newName"))
            if(localStorage.getItem("newName")){
                    this.msg=localStorage.getItem("newName")
                    this.btn="退出登录"
                }
        }
    }
</script>
<style>
   #usercenter .dicon{
       height:70px;

   }
   #usercenter .dicon img{
       padding-top:10px;
       padding-left: 10px;
   }
   #usercenter .dicon span{
      text-align: center;
      font-size: 20px;
      margin:0 auto;
      margin-left: 10px
   }
   #usercenter .btn{
       background: rgba(230, 63, 90, 0.979);    ;
       color:white;
       font-size:20px;
   }
</style>