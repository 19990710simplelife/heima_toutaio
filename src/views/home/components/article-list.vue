<!--
 * @Description:文章列表组件
 * @Author: 执手天涯
 * @Date: 2022-04-07 19:27:21
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-04-07 20:29:42
 * @version: 1.0
-->
<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :error.sync="error"
      error-text="请求失败，点击重新加载"
      @load="onLoad"
    >
      <van-cell
        v-for="(article, index) in list"
        :key="index"
        :title="article.title"
      />
    </van-list>
  </div>
</template>

<script>
import { getArticleListAPI } from '@/api/index.js'
export default {
  name: 'ArticleList',
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      list: [], // 存储列表数据的数组
      loading: false, // 控制loading的加载状态
      finished: false, // 控制加载结束状态
      timestamp: null,
      error: false
    }
  },
  created () {},
  mounted () {},
  updated () {},
  methods: {
    async onLoad () {
      // 1、请求获取数据
      try {
        const { data } = await getArticleListAPI({
          channel_id: this.channel.id,
          timestamp: this.timestamp || Date.now(),
          with_top: 0
        })
        const { results } = data.data
        // 2、将请求数据存放到list数组中
        this.list.push(...results)
        // 3、本此数据加载结束之后，设置加载状态为结束
        this.loading = false
        // 4、数据全部加载完成停止加载显示没有数据了
        if (results.length) {
          this.timestamp = data.data.pre_timestamp
        } else {
          this.finished = true
        }
      } catch (error) {
        this.error = true
      }
    }
  },
  computed: {},
  watch: {},
  components: {}
}
</script>
<style scoped lang='less'>
</style>
