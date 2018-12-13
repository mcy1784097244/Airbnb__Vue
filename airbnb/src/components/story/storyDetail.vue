<template>
    <div id="storyDetail" >
        <div class="first">
            <img src="../../../public/img/small1.jpg" />
            <div>
                <p>金逸</p>
                <p>
                    <span>{{smtitle}}</span>
                    <span>2周前</span>
                </p>
            </div>
        </div>
        <div class="second">
            <img :src="sm" alt="">
            <img :src="md" alt="">
            <img :src="lg" alt="">
        </div>
        <div class="third">
            <h2 >{{subtitle}}</h2>
            <div>
                <p class="msg">高新区住太久，远离了生活的烟火气。</p>
                <p class="msg">周六进城一环办事，索性定了一间民宿过夜。这家民宿位于梁家巷附近，出门直走就是人民中路，距离天府广场、太古里、宽窄巷子、锦里、杜甫草堂、文殊院都很近。</p>
                <p class="msg">公寓很干净，生活用品都很全，直接拎包入住。客厅挑高将近5m，大落地窗，一楼温馨可爱，空间利用极好，充满了北欧风和日系的元素；二楼简洁大方，低调不失奢华；楼上楼下使用了不同味道的香喷，空间切换感很强，超预期。</p>
                <p class="msg">下午，有很多阳光落进来，光线很棒，适合拍照。邀闺蜜到民宿，坐在窗边晒着太阳喝着咖啡，待到夕阳落下，再出门寻美食。饭后消食，夜游兰桂坊听听小曲，小酌几杯。回到公寓一起蜷进被窝，聊着聊着就睡着了，重温学生时代。</p>
                <p class="msg">第二天睡到自然醒，下楼尝试了房东推荐的猪肝面、老麻抄手、灌汤包、烧麦…挨个儿尝个遍，好隆重的Brunch。楼下随便进一家小店味道都不差，是小时候的味道。</p>
                <p class="msg">退房后，又去-1楼优选邻里超市买了下周的果蔬和日常用品，一站式购齐。超市的海鲜品种很多，可以买好后直接加工出来，在超市休息区用餐，我顺便买了一些海鲜回去尝试做料理。</p>
                <p class="msg">很治愈的周末，有种去了趟远方的感觉。不管是游客还是商务差旅，来这里一定不会失望。</p>
            </div>
        </div>
        <div class="four">
            <span>{{good}}人已赞</span>
            <span>举报</span>
        </div>
        
      
    </div>
</template>
<script>
    export default{
        data(){
            return {
                info:[],
                smtitle:"",
                sm:"",
                md:"",
                lg:"",
                good:"",
                subtitle:""
            }
        },
        methods:{
            getstoryInfo(){
                var url="http://127.0.0.1:3030/storylist?id=";
                var id=this.$route.params.id //商品列表的id
                this.axios.get(url+id).then(res=>{  
                    // console.log(res);
                     this.info=res.data[0];
                     this.sm=res.data[0].sm
                     this.md=res.data[0].md
                     this.lg=res.data[0].lg
                     this.good=res.data[0].good
                     this.subtitle=res.data[0].subtitle
                     this.smtitle=res.data[0].smtitle
                 })
             }
        },
        created() {
            this.$store.state.showBottomNav = false
            this.getstoryInfo()
        },
        destroyed(){
            this.$store.state.showBottomNav = true
        }
    }
</script>
<style>
    #storyDetail{
        background: white;
        height:2400px;
    }
    #storyDetail .first{
        margin: 0 0 10px 0;
        position:hidden;
        padding-left: 24px;
        padding-right: 24px;
        position: relative;
        display: flex;
        padding-top:10px;
        max-width: 743px;
    }
    #storyDetail .first img{
        width:38px;
        height: 38px;
    }
    #storyDetail .first div{
        padding-left: 12px;
        width:100px;
        height: 38px;
        color:#484848;
    }
    #storyDetail .first div p{
        margin-bottom:0px;
    }
    #storyDetail .first div span:first-child{
        margin-right:10px;
        font-weight: bold;
    }
    #storyDetail .second{
        display: flex;
        flex-direction: column;
    }
    #storyDetail .second img{
        max-width: 743px;
        width:375px;
        height:400px;
        vertical-align: middle;
        margin-bottom: 10px;
    }
    #storyDetail .third h2{
        color: #484848 ;
        font-weight: bold ;
        font-size: 24px ;
        margin: 1em 0px ;
        padding-left: 24px;
        padding-right: 24px
    }
    #storyDetail .third .msg{
        max-width: 743px;
        font-size: 16px ;
        font-weight: 300 ;
        line-height: 1.7em ;
        color: #565a5c ;
        margin: 1.7em 0px ;
        padding-left: 24px;
        padding-right: 24px
    }
    #storyDetail .four{
        max-width: 743px;
        width:327px;
        color:#008489;
        overflow: hidden;
    }
    #storyDetail .four span:first-child{
        float: left;
        padding-left: 24px;
    }
    #storyDetail .four span:last-child{
        float: right;
        color:#484848;
        /* padding-right: 24px; */
    }





</style>