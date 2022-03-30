/*
 * @Description:管理所有的请求方法模块
 * @Autor: 执手天涯
 * @Date: 2022-03-28 16:16:38
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-03-30 20:15:45
 */

import {
  login,
  getcode,
  getUserInfo
} from './user.js'

export const loginAPI = login
export const getcodeAPI = getcode
export const getUserInfoAPI = getUserInfo
