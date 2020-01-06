import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'
import { PullRefresh } from 'vant'


import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

Vue.config.productionTip = false

//定义全局时间转换过滤器
Vue.filter('dateFormat',function(dataStr,pattern = 'YYYY-MM-DD'){
   return moment(dataStr).format(pattern)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
