/*
 * @Description:用户请求相关模块
 * @Autor: 执手天涯
 * @Date: 2022-03-28 16:13:30
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-03-28 20:12:19
 */
import request from '@/utils/request'

/**
 * 封装一个登录的网络请求方法
 * @param {外界传递的参数} params
 * @returns
 */
export const login = data => {
  return request({
    url: '/mp/v1_0/authorizations',
    method: 'POST',
    data
  })
}

/**
 * 用户获取验证码的请求封装
 * @param {需要获取验证码的手机号}} mobile
 * @returns
 */
export const getcode = mobile => {
  return request({
    url: `/mp/v1_0/captchas/${mobile}`,
    method: 'GET'
  })
}
