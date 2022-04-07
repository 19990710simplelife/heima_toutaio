/*
 * @Description:文章相关的请求
 * @Author: 执手天涯
 * @Date: 2022-04-07 19:57:47
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-04-07 20:00:08
 * @version: 1.0
 */
import request from '@/utils/request'

export const getArticleList = params => {
  return request({
    url: '/app/v1_1/articles',
    method: 'GET',
    params: params
  })
}
