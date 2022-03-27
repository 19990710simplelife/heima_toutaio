/*
 * @Description:工程的入口文件
 * @Autor: 执手天涯
 * @Date: 2022-03-27 19:51:35
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-03-27 22:13:46
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局引入vant组件库
import Vant from 'vant'
import 'vant/lib/index.css'
// 加载全局样式
import '@/styles/index.less'
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
