<template>
    <div id="storyContainer">
      <div class=title>故事</div>
      <div class="Snavbar">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">房源</mt-tab-item>
          <mt-tab-item id="2">景点</mt-tab-item>
          <mt-tab-item id="3">美食</mt-tab-item>
          <mt-tab-item id="4">文化</mt-tab-item>
          <mt-tab-item id="5">活动</mt-tab-item>
          <mt-tab-item id="6">店铺</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected"  >
          <mt-tab-container-item id="1" >
            <mt-cell v-for="i of list " v-if="i.family_id==1" :key="i.pid" >
              <div class="content1">
                <img :src="i.sm" @click="getDetail(i.pid)" />
                <p>{{i.title}}</p>
              </div>
              <div class="content2">
                <span>{{i.smtitle}}</span>
                <span>{{i.subtitle}}</span>
              </div>
              <div class="content3">
                <img src="../../../public/img/small1.jpg" />
                <img src="../../../public/img/goods.png" />
                <span>{{i.good}}</span>
                <img src="../../../public/img/commit.png" />
                <span>{{i.commit}}</span>
              </div> 
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="2" >
              <mt-cell v-for="i of list" v-if="i.family_id==2" :key="i.pid" >
                <div class="content1">
                  <img :src="i.sm" @click="getDetail(i.pid)" />
                  <p>{{i.title}}</p>
                </div>
                <div class="content2">
                  <span>{{i.smtitle}}</span>
                  <span>{{i.subtitle}}</span>
                </div>
                <div class="content3">
                  <img src="../../../public/img/small1.jpg" />
                  <img src="../../../public/img/goods.png" />
                  <span>{{i.good}}</span>
                  <img src="../../../public/img/commit.png" />
                  <span>{{i.commit}}</span>
                </div> 
              </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="3" >
              <mt-cell v-for="i of list" v-if="i.family_id==3" :key="i.pid">
                <div class="content1">
                  <img :src="i.sm" @click="getDetail(i.pid)" />
                  <p>{{i.title}}</p>
                </div>
                <div class="content2">
                  <span>{{i.smtitle}}</span>
                  <span>{{i.subtitle}}</span>
                </div>
                <div class="content3">
                  <img src="../../../public/img/small1.jpg" />
                  <img src="../../../public/img/goods.png" />
                  <span>{{i.good}}</span>
                  <img src="../../../public/img/commit.png" />
                  <span>{{i.commit}}</span>
                </div> 
              </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="4" >
              <mt-cell v-for="i of list" v-if="i.family_id==4" :key="i.pid" >
                <div class="content1">
                  <img :src="i.sm" @click="getDetail(i.pid)" />
                  <p>{{i.title}}</p>
                </div>
                <div class="content2">
                  <span>{{i.smtitle}}</span>
                  <span>{{i.subtitle}}</span>
                </div>
                <div class="content3">
                  <img src="../../../public/img/small1.jpg" />
                  <img src="../../../public/img/goods.png" />
                  <span>{{i.good}}</span>
                  <img src="../../../public/img/commit.png" />
                  <span>{{i.commit}}</span>
                </div> 
              </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="5" >
              <mt-cell v-for="i of list" v-if="i.family_id==5" :key="i.pid">
                <div class="content1">
                  <img :src="i.sm" @click="getDetail(i.pid)" />
                  <p>{{i.title}}</p>
                </div>
                <div class="content2">
                  <span>{{i.smtitle}}</span>
                  <span>{{i.subtitle}}</span>
                </div>
                <div class="content3">
                  <img src="../../../public/img/small1.jpg" />
                  <img src="../../../public/img/goods.png" />
                  <span>{{i.good}}</span>
                  <img src="../../../public/img/commit.png" />
                  <span>{{i.commit}}</span>
                </div> 
              </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="6" >
              <mt-cell v-for="i of list" v-if="i.family_id==6" :key="i.pid">
                <div class="content1">
                  <img :src="i.sm" @click="getDetail(i.pid)" />
                  <p>{{i.title}}</p>
                </div>
                <div class="content2">
                  <span>{{i.smtitle}}</span>
                  <span>{{i.subtitle}}</span>
                </div>
                <div class="content3">
                  <img src="../../../public/img/small1.jpg" />
                  <img src="../../../public/img/goods.png" />
                  <span>{{i.good}}</span>
                  <img src="../../../public/img/commit.png" />
                  <span>{{i.commit}}</span>
                </div> 
              </mt-cell>
          </mt-tab-container-item>
        </mt-tab-container>   
      </div> 
    </div>
</template>
<script>
  export default{
    data(){
      return{ 
        selected: '1',
        list:[]
      }
    },
    methods:{
        getImage(){
          var url="http://127.0.0.1:3030/storyImg";
          this.axios.get(url).then(res=>{
              //console.log(res);
              this.list=res.data
        })
      },
      getDetail(id){
        //参数:商品的id
        this.$router.push("/sdetail/"+id); //router 跳转
        //console.log(id)
      }
      
    },
    created(){
      this.getImage()
    },
    
  }
   
</script>
<style>
    #storyContainer{
      background: white;
      width:327px;
      margin: 0 auto;
    }
    #storyContainer .title{
      font-weight: 800;
      margin: 0px ;
      word-wrap: break-word ;
      font-size: 24px ;
      line-height: 30px ;
      letter-spacing: normal ;
      text-transform: undefined ;
      color: #484848 ;
      padding-top:20px ;
      padding-bottom:20px ;
      padding-left: 6px;
    }
    #storyContainer .mint-navbar .mint-tab-item{
      color:black;
      
    }
    #storyContainer .mint-navbar .mint-tab-item .mint-tab-item-label{
      font-weight:bold;
      font-size: 16px;
    }
    #storyContainer .mint-navbar a.is-selected {
      color: #008489;
      border-bottom: 3px solid #008489;
      margin-bottom: 0px;
    }
    #storyContainer .Snavbar{
      margin-bottom: 50px;
    }
    #storyContainer .mint-tab-container{
       margin-top:20px;
    }
    #storyContainer .mint-tab-container-item{
      display: flex;
      flex-wrap: wrap;
    }
    #storyContainer .mint-cell .mint-cell-wrapper{
       padding:0 5px;
    }
    #storyContainer .mint-cell .mint-cell-wrapper .mint-cell-value{
      width:150px;
      height: 230px;
      display:flex;
      flex-direction: column;
      margin-bottom:10px;
    } 
    #storyContainer .mint-cell .mint-cell-value .content1{
      position: relative;
    }
    #storyContainer .mint-cell .mint-cell-value .content1 img{
      width:150px;
      height: 150px;
      border-radius: 5px;
    }
    #storyContainer .mint-cell .mint-cell-value .content1 p{
      position: absolute;
      bottom: 10px;
      right:10px;
      border-radius: 5px;
      width:40px;
      height: 26px;
      line-height: 26px;
      text-align: center;
      margin-bottom:0;
      background: #FFFFFF;
      color:#484848;
      font-weight: bold
    }
    #storyContainer .mint-cell .mint-cell-value .content2{
      margin-top: 8px;
      line-height: 18px;
      max-height: 36px 
    }
    #storyContainer .mint-cell .mint-cell-value .content2 span{
      margin: 0px ;
      word-wrap: break-word ;
      font-size: 14px ;
      line-height: 18px ;
      letter-spacing: normal ;
      color: #484848 ;
      font-weight: normal ;
      display: inline ;
    }
    #storyContainer .mint-cell .mint-cell-value .content2 span:first-child{
     font-weight: 800 ;
     padding-right:5px;
    }
    #storyContainer .mint-cell .mint-cell-value .content3{
      width:150px;
      height: 24px;
      margin-top: 4px;
      margin-left: -1.6px;
    }
    #storyContainer .mint-cell .mint-cell-value .content3 img:first-child{
      width:20px;
      height: 20px;
    }
    #storyContainer .mint-cell .mint-cell-value .content3 img{
      margin-right:8px;
    }
    #storyContainer .mint-cell .mint-cell-value .content3 img:not(first-child){
      width:15px;
      height: 15px;
      margin-left:8px;
    }
    #storyContainer .mint-cell .mint-cell-value .content3 span{
      font-size: 12px;
    }
</style>