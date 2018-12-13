<template>
  <div id="app">
    <!-- <div id="nav">
			  <img src="../../airbnb-serve/public/img/icon_副本_副本.png"  @click="handleClick">	
				<mt-popup v-model="popupVisible" position="right" :modal=false id="a3" >
					<p>首页</p  @click.native="handleClick1">
					<p>登录</p>
				</mt-popup>
    </div> -->
		<router-view/>
		<nav class="mui-bar mui-bar-tab" v-if="$store.state.showBottomNav">
			<router-link class="mui-tab-item "  to="/home" :class="path=='home'?'mui-active':''">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
			<router-link class="mui-tab-item" to="/list" :class="path=='list'?'mui-active':''">
				<span class="mui-icon mui-icon-extra mui-icon-extra-heart"></span>
				<span class="mui-tab-label">心愿单</span>
			</router-link>
			<router-link class="mui-tab-item" to="/story" :class="path=='story'?'mui-active':''">
				<span class="mui-icon mui-icon-extra mui-icon-extra-holiday"></span>
				<span class="mui-tab-label">故事</span>
			</router-link>
			<router-link class="mui-tab-item" to="/address" :class="path=='address'?'mui-active':''">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">收件箱</span>
			</router-link>
			<router-link class="mui-tab-item" to="/user" :class="path=='user'?'mui-active':''">
				<span class="mui-icon mui-icon-person"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
  </div>
</template>
<script>
	export default{
			name:'app',
			data(){
					return{
						// popupVisible:false,
						path:""
					}
			},
			methods:{
				// handleClick:function(){
				// 	this.popupVisible=true
					
				// },
				// handleClick1:function(){
				// 	this.popupVisible=false;
				// }
			
			},
			created() {
				this.path=this.$route.name
			
			},
			watch:{
				$route(to,from){
					this.path=to.name
				}
			}
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background: white;
}
#app .mui-bar-tab{
  background: white;
}
#app .mui-bar-tab .mui-tab-item.mui-active{
  color:rgba(230, 63, 90, 0.979);
}
#nav img{
	/* width:34px;
	height: 34px; */
}
/* #a3{
	width:375px;
	height:660px;
} */
</style>
