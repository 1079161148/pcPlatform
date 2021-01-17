/*
 * @Description: 项目入口文件
 * @Version: 2.0
 * @Autor: lhl
 * @Date: 2020-10-20 22:04:24
 * @LastEditors: lhl
 * @LastEditTime: 2020-12-28 22:58:27
 */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 磨人的HTML元素样式上提供了跨浏览器的高度一致性,相比于传统的CSS reset,Normalize.css是一种现代的、为HTML5[CSS reset]准备的优质替代方案
import 'normalize.css/normalize.css' 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
