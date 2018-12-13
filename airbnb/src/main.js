import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(Vuex)
//1.
//引入Mint-ui css文件
import 'mint-ui/lib/style.css'
//引入mui css文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
// import mui from './lib/mui/js/mui.js'
// Vue.prototype.mui = mui
// import './lib/mui/css/mui.min.css'
//完整引入mint-ui组件库
import MintUI from "mint-ui"
Vue.use(MintUI)

//2.
//引入axios
import axios from 'axios'
axios.defaults.withCredentials=false
Vue.prototype.axios=axios


router.beforeEach((to, from, next) => { 
  //to即将进入的目标路由对象，from当前导航正要离开的路由， next : 下一步执行的函数钩子
  if(to.path === '/login') { next() } // 如果即将进入登录路由，则直接放行
   else {   //进入的不是登录路由
       if(to.meta.login && !localStorage.getItem('newName')) {next({ path: '/login' })}
     //下一跳路由需要登录验证，并且还未登录，则路由定向到 登录路由
     else { next() }}
    //如果不需要登录验证，或者已经登录成功，则直接放行
})








new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
