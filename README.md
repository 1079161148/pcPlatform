<!--
 * @Description: vscode自带注释
 * @Version: 2.0
 * @Autor: lhl
 * @Date: 2020-10-20 22:04:24
 * @LastEditors: lhl
 * @LastEditTime: 2021-01-17 20:50:11
-->
# vue2-admin-element

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 路由注意事项 
1. 默认hash history模式需要后端支持

2. 路由参数改变,视图不更新问题的解决
方式一：
watch: {
  '$route' (to, from) {
   // 监听路由的变化，做你想做的一些事情...
   // this.init()
  }
},

方式二：
beforeRouteUpdate (to, from, next) {
  // 做一些想要做的处理...
  this.xxx = xxx
  next() // 一定要有next
 },

 方式三：
 <router-view :key="$route.fullPath " />

### 路由懒加载方式 
第一种：vue的异步组件，require()方法。（按需加载）
component: resolve => require(['@/components/home'], resolve)

第二种：vue的异步组件+webpack的ensure()方法 
component: r => require.ensure([], () => r(require('@/components/home')), 'home')

第三种：(推荐) 懒加载和打包分离代码
// 没有指定webpackChunkName，每个组件打包成一个js文件。
/* const Home = () => import('@/components/home')
/* const Index = () => import('@/components/index')

// 指定了相同的webpackChunkName，会合并打包成一个js文件。
const Home = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/home')
const Index = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/index')

### 路由传参
1.params只能由name引入路由,query都可以
2.query相当于get请求，页面跳转的时候，可以在地址栏看到请求参数，而params相当于post请求，参数不会在地址栏中显示