import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import home from '../components/tabbar/home.vue'
import shopcar from '../components/tabbar/shopcar.vue'
import user from '../components/tabbar/user.vue'
import newslist from '../components/news/newslist.vue'
import newsdetail from '../components/news/newsdetail.vue'

Vue.use(VueRouter)

const routes = [
  
  { 'path':'/',redirect:'/home'},
  { 'path':'/home','component':home },
  { 'path':'/shopcar','component':shopcar },
  { 'path':'/user','component':user },
  { 'path':'/newslist','component':newslist },
  { 'path':'/newsdetail:id','component':newsdetail },
]

const router = new VueRouter({
  routes
})

export default router
