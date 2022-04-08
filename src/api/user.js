/*
 * @Description:用户请求相关模块
 * @Autor: 执手天涯
 * @Date: 2022-03-28 16:13:30
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-04-08 10:01:02
 */
import request from '@/utils/request'

/**
 * 封装一个登录的网络请求方法
 * @param {外界传递的参数} data
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

/**
 * 用于获取用户自己的信息
 * @returns
 */
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user'
  })
}

/**
 *获取我的频道
 * @returns
 */
export const getUserChannels = () => {
  return request({
    url: '/app/v1_0/user/channels',
    method: 'GET'
  })
}
