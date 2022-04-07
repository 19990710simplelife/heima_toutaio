/*
 * @Description:工程的入口文件
 * @Autor: 执手天涯
 * @Date: 2022-03-27 19:51:35
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-04-08 00:03:10
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局引入vant组件库
import Vant, {
  Lazyload
} from 'vant'
import 'vant/lib/index.css'
// 加载全局样式
import '@/styles/index.less'
// 导入动态设置rem基准值
import 'amfe-flexible'
// 加载日期处理配置文件
import '@/utils/dayjs.js'
Vue.use(Vant)
Vue.use(Lazyload)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
