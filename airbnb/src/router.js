import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

//1.引入自定义组件
import homeContainer from "./components/tabbar/homeContainer.vue"
import wishList from "./components/tabbar/wishList.vue"
import addressContainer from "./components/tabbar/addressContainer.vue"
import storyContainer from "./components/tabbar/storyContainer.vue"
import storyDetail from "./components/story/storyDetail.vue"
import Login from "./components/login/login.vue"
import Usercenter from "./components/tabbar/usercenter.vue"
import Hostproduct from './components/host/hostproduct.vue'
import Hdetail from './components/host/hdetail.vue'
import Register from './components/login/register.vue'

Vue.use(Router)


//2.配置访问自定义组件路径
export default new Router({
  //mode: 'history',
  //base: process.env.BASE_URL,
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',name:'home',component:homeContainer},
    {path:'/list',name:'list',component:wishList,meta:{login: true}},
    {path:'/address',name:'address',component:addressContainer},
    {path:'/story',name:'story',component:storyContainer},
    {path:'/sdetail/:id',name:'sdetail',component:storyDetail,meta:{ login: true}},
    {path:'/login',name:'login',component:Login},
    {path:'/user',name:'user',component:Usercenter},
    {path:'/product/:msg',name:'product',component:Hostproduct},
    {path:'/hdetail/:pid',name:'hdetail',component:Hdetail,meta:{login: true}},
    {path:'/register',name:'register',component:Register},
  ]
})


