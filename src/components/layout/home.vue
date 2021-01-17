<!--
 * @Description: vscode自带注释
 * @Version: 2.0
 * @Autor: lhl
 * @Date: 2020-10-20 23:03:13
 * @LastEditors: lhl
 * @LastEditTime: 2021-01-17 16:27:41
-->
<template>
  <div class="">
    <Header />
    <siderBar />
    <div class="right-view">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachePageList">
          <router-view :key="key" />
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import siderBar from "./siderBar";
export default {
  data(){
    return {
      cachePageList: []  // 缓存路由页面
    }
  },
  computed:{
    // 保证视图更新 情况：路由不变参数改变的情况下
    key(){
      return this.$route.fullPath 
    }
  },
  components: {
    Header,
    siderBar
  }
};
</script>

<style lang="scss"></style>
