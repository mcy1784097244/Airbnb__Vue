<template>
    <div id="addrContainer">
        <div>收件箱</div>
        <div>您没有未读消息</div>
        <div>您已经读完所有的消息</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list:[]
            }
        },
        methods:{
            getImage(){
                var url="http://127.0.0.1:3030/storyImg";
                this.axios.get(url).then(res=>{
                    console.log(res);
                    this.list=res.data
                })
            },
        },
        created(){
            this.getImage()
        }

    }
</script>
<style>
    *{
       margin:0;
       padding:0;
   }
   #addrContainer{
       width:327px;
       height: 670px;
       background: white;
       position: relative;
   }
   #addrContainer div:nth-child(1){
       padding:48px 15px;;
       font-size: 26px;
       font-weight: 700;
   }
   #addrContainer div:nth-child(2){
         font-size: 16px;
         padding-left:15px;
         height:40px;
   }
   #addrContainer div:nth-child(3){
         font-size: 16px;
         height:40px;
         width:200px;
         position:absolute;
         top:50%;
         left:50%;
         margin-left: -80px;
         margin-top: -20px;
   }
</style>