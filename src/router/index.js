//配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routers'
Vue.config.productionTip = false
Vue.use(VueRouter);

//备份VueRouter原型对象push方法
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
//第一个参数：告诉原来的push方法往哪里跳转
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}

VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.apply(this,[location,resolve,reject])
    }else{
        originReplace.apply(this,[location,()=>{},()=>{}])
    }
}

export default new VueRouter({
    routes,
    //滚动行为
    scrollBehavior(to,from,savedPosition){
        return{y:0}
    }
})