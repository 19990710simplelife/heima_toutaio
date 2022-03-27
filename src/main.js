/*
 * @Description:工程的入口文件
 * @Autor: 执手天涯
 * @Date: 2022-03-27 19:51:35
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-03-27 21:48:18
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载全局样式
import '@/styles/index.less'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
