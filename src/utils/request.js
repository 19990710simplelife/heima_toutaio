/*
 * @Description:封装一个请求模块
 * @Autor: 执手天涯
 * @Date: 2022-03-27 22:47:46
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-03-27 22:51:20
 */
import axios from 'axios'

const request = axios.create({
  // 配置请求的基准路径
  baseURL: 'http://ttapi.research.itcast.cn'
})

export default request
