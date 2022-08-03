<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {Header,Footer},
  mounted() {
    //派发一个action获取商品分类三级列表数据
    // 优化三级分类列表，只发一次请求
    this.$store.dispatch("categoryList");
  },
}
</script>

<style>
</style>
