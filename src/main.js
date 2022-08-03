import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
//全局注册
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
//引入路由
import router from '@/router'
//引入仓库
import store from './store'
import {reqCategoryList} from '@/api'
reqCategoryList()

import '@/mock/mockServe'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  router,
  //组件实例有一个$store属性
  store
}).$mount('#app')
