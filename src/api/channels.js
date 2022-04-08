/*
 * @Description:频道请求模块
 * @Author: 执手天涯
 * @Date: 2022-04-08 09:59:19
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-04-08 21:54:16
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

/**
 * 添加用户频道
 * @param {用户频道对象} channel
 * @returns
 */
export const addUserChannel = (channel) => {
  return request({
    method: 'PATCH',
    url: '/app/v1_0/user/channels',
    data: {
      channels: [channel]
    }
  })
}

/**
 * 删除用户指定频道
 * @param {指定频道id} channelId
 * @returns
 */
export const deleteUserChannel = (channelId) => {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/user/channels/${channelId}`
  })
}
