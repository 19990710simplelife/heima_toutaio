/*
 * @Description:频道请求模块
 * @Author: 执手天涯
 * @Date: 2022-04-08 09:59:19
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-04-08 10:00:21
 * @version: 1.0
 */
import request from '@/utils/request'

/**
 * 获取所有频道列表
 * @returns
 */
export const getAllChannels = () => {
  return request({
    url: '/app/v1_0/channels',
    method: 'GET'
  })
}
