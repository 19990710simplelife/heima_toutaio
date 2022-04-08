/*
 * @Description:管理所有的请求方法模块
 * @Autor: 执手天涯
 * @Date: 2022-03-28 16:16:38
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-04-08 10:01:22
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

import {
  getAllChannels
} from './channels'
// 用户相关的请求
export const loginAPI = login
export const getcodeAPI = getcode
export const getUserInfoAPI = getUserInfo
export const getUserChannelsAPI = getUserChannels

// 文章相关请求
export const getArticleListAPI = getArticleList

// 频道相关的列表
export const getAllChannelsAPI = getAllChannels
