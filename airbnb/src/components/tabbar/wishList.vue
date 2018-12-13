<template>
    <div id="wish">
        <div id="wishlist" v-if="!isSelect">
            <div>心愿单</div>
            <div>您随时可以为下次旅行做好准备，轻点房源上的爱心标志，将您心仪的房源保存在这里</div>
            <div><router-link to="/home">查找房源</router-link></div>
        </div>
        <div id="list">
            <a  v-for="(i,index) of list"   :key="i.pid" class="wlist">
                <div class="mui-card" >
                    <router-link   :to="'/hdetail/'+i.pid">
                        <mt-swipe :auto="4000">
                            <mt-swipe-item><img :src="i.sm"></mt-swipe-item>
                            <mt-swipe-item><img :src="i.md"></mt-swipe-item>
                            <mt-swipe-item><img :src="i.lg"></mt-swipe-item>
                        </mt-swipe>
                    </router-link>
                    <div class="mui-card-content">
                        <div class="mui-card-content-inner">
                            <p>{{i.subtitle}}</p>
                            <p>￥{{i.price}}每晚</p>
                            <P>
                                <span>★★★★★</span> 
                                <span>{{i.commit}}</span> 
                            </P>   
                        </div>
                    </div>
                </div>
                <p class="mui-icon mui-icon-extra mui-icon-extra-heart-filled heart" @click="wcollect(i.pid,index)"></p>
            </a>
        </div>
    </div>
</template>
<script>
   import { MessageBox } from 'mint-ui';
   import { Toast } from 'mint-ui';
    export default{
        data(){
            return{
                isSelect:false,
                list:[],
            }
        },
        methods:{
            wcollect(e,index){
                var pid=e  //当前点击产品的pid
                var index=index
                //console.log(index)
                //console.log(this.list.splice(this.list[index],1))
                var uid=localStorage.getItem("uid")
                 MessageBox.confirm('', { 
                     message: '您确定从心愿单中删除？', 
                     title: '删除房源', 
                     confirmButtonText: '移除', 
                     cancelButtonText: '取消' 
                 }).then(action => { 
                     if (action == 'confirm') {     //确认的回调
                        //console.log(pid)
                          var url="http://127.0.0.1:3030/delete?pid=";
                          this.axios.get(url+pid+"&uid="+uid).then(res=>{
                               //console.log(res);
                               Toast({
                                message: '删除成功',
                                position: 'middle',
                                duration: 300
                               });
                               this.list.splice(this.list[index],1);
                               setTimeout(()=>{
                                   if(this.list.length==0){
                                   this.isSelect=false
                                  }
                               },400)
                           })
                     }
                }).catch(err => { 
                     if (err == 'cancel') {     //取消的回调
                        //console.log(1)
                     } 
                });

            }
            
        },
        created(){
            //this.list.$set(indexOfItem, newValue)
            var uid=localStorage.getItem("uid")
            var url="http://127.0.0.1:3030/list?uid="
            this.axios.get(url+uid).then(res=>{
                //console.log(res)
                if(res.data.length>0){
                     this.list=res.data
                     this.isSelect=true
                }else{
                    this.isSelect=false
                }
            })

        }
    }
</script>
<style>
   *{
       margin:0;
       padding:0;
   }
   #wish{
        height: 670px;
        margin-bottom: 40px;
   }
   #wishlist{
       width:327px;
       height: 670px;
       background: white;
       position: relative;
   }
   #wishlist div:nth-child(1){
       padding:48px 15px;;
       font-size: 26px;
       font-weight: 700;
   }
   #wishlist div:nth-child(2){
         font-size: 16px;
         padding-left:15px;
         height:40px;
   }
   #wishlist div:nth-child(3){
       position: absolute;
       bottom: 76px;
       left:64px;
   }
   #wishlist div:nth-child(3) a{
       color: white;
       background:  rgba(230, 63, 90, 0.979);
       border-radius: 5px;
       display: inline-block;
       width:250px;
       height: 40px;
       text-align: center;
       line-height:40px;
   }
   #list .mint-swipe{
       height: 200px;
   }
   #list .wlist{
       position: relative;
   }
   #list .wlist p.heart{
     color: rgba(230, 63, 90, 0.979);
     font-size: 30px;
     position: absolute;
     bottom:26px;
     left: 320px;
 
   }
</style>