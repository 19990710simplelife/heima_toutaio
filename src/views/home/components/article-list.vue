<!--
 * @Description:文章列表组件
 * @Author: 执手天涯
 * @Date: 2022-04-07 19:27:21
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-04-07 23:57:47
 * @version: 1.0
-->
<template>
  <div class="article-list">
    <keep-alive>
      <van-pull-refresh
        success-duration="1500"
        v-model="isRefreshing"
        @refresh="onRefresh"
      >
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          :error.sync="error"
          error-text="请求失败，点击重新加载"
          :success-text="refreshSuccessText"
          @load="onLoad"
        >
          <ArticleItem
            v-for="(article, index) in list"
            :key="index"
            :article="article"
          ></ArticleItem>
        </van-list>
      </van-pull-refresh>
    </keep-alive>
  </div>
</template>

<script>
import { getArticleListAPI } from '@/api/index.js'
import ArticleItem from '@/components/article-item/index.vue'
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
      timestamp: null, // 时间戳
      error: false, // 错误提示
      isRefreshing: false, // 下拉刷新
      refreshSuccessText: '刷新成功！' // 刷新成功
    }
  },
  created () {},
  mounted () {},
  updated () {},
  methods: {
    // 获取列表数据
    async onLoad () {
      // 1、请求获取数据
      try {
        const { data } = await getArticleListAPI({
          channel_id: this.channel.id,
          timestamp: this.timestamp || 1556789000001,
          with_top: 0
        })
        const { results } = data.data

        // 2、将请求数据存放到list数组中
        this.list.push(...results)
        // 3、本此数据加载结束之后，设置加载状态为结束
        this.loading = false
        // 4、数据全部加载完成停止加载显示没有数据了
        if (results.length) {
          // 修改时间戳
          this.timestamp = data.data.pre_timestamp
        } else {
          // 关闭加载更多
          this.finished = true
        }
      } catch (error) {
        // 错误提示
        this.error = true
      }
    },
    // 下拉刷新
    async onRefresh () {
      // 获取新的数据
      try {
        const { data } = await getArticleListAPI({
          channel_id: this.channel.id,
          timestamp: 1556789000001,
          with_top: 1
        })
        const { results } = data.data
        this.list.unshift(...results)
        this.isRefreshing = false
        this.refreshSuccessText = `刷新成功，更新了${results.length}条数据！`
      } catch (error) {
        this.isRefreshing = false
        this.refreshSuccessText = '刷新失败！'
      }
    }
  },
  computed: {},
  watch: {},
  components: {
    ArticleItem
  }
}
</script>
<style scoped lang='less'>
.article-list {
  height: 80vh;
  overflow-y: auto;
}
</style>
