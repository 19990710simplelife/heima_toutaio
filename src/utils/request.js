/*
 * @Description:封装一个请求模块
 * @Autor: 执手天涯
 * @Date: 2022-03-27 22:47:46
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-03-30 21:20:33
 */
import axios from 'axios'
import store from '@/store/index.js'
const request = axios.create({
  // 配置请求的基准路径
  baseURL: 'http://api-toutiao-web.itheima.net'
})

// 请求拦截器
// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // config 本次请求的配置对象
  const {
    user
  } = store.state
  if (user && user.data.token) {
    config.headers.Authorization = `Bearer ${user.data.token}`
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
export default request
