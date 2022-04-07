/*
 * @Description:时间处理工具
 * @Author: 执手天涯
 * @Date: 2022-04-07 23:37:00
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-04-07 23:54:01
 * @version: 1.0
 */
import Vue from 'vue'
import dayjs from 'dayjs'
// 加载中文语言包
import 'dayjs/locale/zh-cn'

import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)
// 定义一个全局的过滤器
Vue.filter('relativeTime', value => {
  return dayjs().to(dayjs('2022'))
})
