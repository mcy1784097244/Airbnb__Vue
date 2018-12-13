<template>
    <div id="hostproduct">
        <!-- 产品列表 -->
        <div class="hotLocal">
                <div class="hot">热门房源</div>
                <a  v-for="i of list" >
                    <div class="mui-card" @click="handleclick(i.pid)">
                        <mt-swipe :auto="4000">
                            <mt-swipe-item><img :src="i.sm"></mt-swipe-item>
                            <mt-swipe-item><img :src="i.md"></mt-swipe-item>
                            <mt-swipe-item><img :src="i.lg"></mt-swipe-item>
                        </mt-swipe>
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
                </a>
        </div>
        
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list:[],
               
            }
        },
        methods:{
            search(){
                var url="http://127.0.0.1:3030/search?msg=";
                var msg=this.$route.params.msg
                console.log(msg)
                this.axios.get(url+msg).then(res=>{
                    //console.log(res)
                      this.list=res.data
                      
                })
            },
            handleclick(id){
                //console.log(id)
                    this.$router.push("/hdetail/"+id)
            }
        },
        created(){
            this.search()
        }
    }
</script>
<style>
        /* 产品列表 */

    #hostproduct .hotLocal{
        width:327px;
        margin:0 auto;
        margin-bottom: 55px;
    }
    #hostproduct .hotLocal .hot{
        padding-top:20px;
        font-size: 20px;
        padding-left:5px;
    }
    #hostproduct .hotLocal .mui-card{
        margin-top:16px;
    }
    #hostproduct .hotLocal .mui-card img{
        width:327px;
        height: 218px;  
    }
    #hostproduct .hotLocal .mui-card .mui-card-content-inner p{
        margin-top: -5px;
        
    }
    #hostproduct .hotLocal .mui-card .mui-card-content-inner p:nth-child(1){
        font-size: 12px;
        color: #572533;
    }
    #hostproduct .hotLocal .mui-card .mui-card-content-inner p:nth-child(2){
        font-size: 17px;
        color: #484848;
        font-weight: 700;
    }
    #hostproduct .hotLocal .mui-card .mui-card-content-inner p:nth-child(3){
        font-size: 15px;
        color: #484848;
        font-weight: 300;
    }
    #hostproduct .hotLocal .mui-card .mui-card-content-inner p:nth-child(4) span:first-child{
        font-size: 14px;
        color: #008489;
        padding-left: 5px;
    }
    #hostproduct .hotLocal .mui-card .mui-card-content-inner p:nth-child(4) span:last-child{
        font-size: 14px;
        color: #484848;
        padding-left: 5px;
    }
    #hostproduct .mint-swipe{
        height:200px;
    }
    
</style>