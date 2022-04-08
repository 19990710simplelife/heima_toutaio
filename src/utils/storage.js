/*
 * @Description:封装本地存储模块
 * @Author: 执手天涯
 * @Date: 2022-04-08 16:55:30
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-04-08 17:02:21
 * @version: 1.0
 */

/**
 * 存储数据
 * @param {键值} key
 * @param {数据值} value
 */
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    // 进行数据转换
    value = JSON.stringify(value)
    window.localStorage.setItem(key, value)
  }
}

/**
 * 获取本地存储的数据
 * @param {键} key
 * @returns
 */
export const getItem = (key) => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

/**
 * 删除数据
 * @param {键值} key
 */
export const removeItem = key => {
  window.localStorage.removeItem(key)
}
