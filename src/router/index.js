/*
 * @Description: 路由相关信息文件
 * @Autor: 执手天涯
 * @Date: 2022-03-27 19:51:35
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-03-30 16:27:40
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/index.vue')
}, {
  path: '/',
  component: () => import('@/views/layout/index.vue'),
  children: [{
    path: '', // 默认子路由
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/qa',
    name: 'qa',
    component: () => import('@/views/question/index.vue')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('@/views/video/index.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('@/views/my/index.vue')
  }
  ]

}]

const router = new VueRouter({
  routes
})

export default router
