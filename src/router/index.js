/*
 * @Description: 路由配置文件
 * @Version: 2.0
 * @Autor: lhl
 * @Date: 2020-10-20 22:04:24
 * @LastEditors: lhl
 * @LastEditTime: 2021-01-17 19:47:00
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashBoard',
    component: () => import(/* webpackChunkName: "home" */ '@/components/layout/home.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "dashBoard" */ '@/views/dashBoard/index.vue'),
      }
    ] 
  },
]

const router = new VueRouter({
  mode: 'history', // 需要后端支持
  // 应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 “/app/”
  base: process.env.BASE_URL,
  routes
})

export default router
