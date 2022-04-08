/*
 * @Description:状态管理文件
 * @Autor: 执手天涯
 * @Date: 2022-03-27 19:51:35
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-04-08 17:04:52
 */
import Vue from 'vue'
import Vuex from 'vuex'
import {
  getItem,
  setItem
} from '@/utils/storage.js'
Vue.use(Vuex)

const TOKRN_KEY = 'TOUTIAO_USER'

export default new Vuex.Store({
  state: {
    // 一个用户对象，存储当前登录用户信息
    user: getItem(TOKRN_KEY)
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 为了防止刷新，丢失信息，我们将数据存储到本地
      setItem(TOKRN_KEY, state.user)
    }
  },
  actions: {},
  modules: {}
})
