/*
 * @Description:管理所有的请求方法模块
 * @Autor: 执手天涯
 * @Date: 2022-03-28 16:16:38
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-04-07 20:01:04
 */

import {
  login,
  getcode,
  getUserInfo,
  getUserChannels
} from './user.js'

import {
  getArticleList
} from './articles'
// 用户相关的请求
export const loginAPI = login
export const getcodeAPI = getcode
export const getUserInfoAPI = getUserInfo
export const getUserChannelsAPI = getUserChannels

// 文章相关请求
export const getArticleListAPI = getArticleList
