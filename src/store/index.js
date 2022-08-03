import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//引入小仓库
import home from './home'
import search from './search'
import detail from './detail'

export default new Vuex.Store({
    //vuex模块化开发
    modules:{
        home,
        search,
        detail
    }
})