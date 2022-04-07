<!--
 * @Description: 首页
 * @Autor: 执手天涯
 * @Date: 2022-03-30 14:55:52
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-04-07 22:15:45
-->
<template>
  <div class="home-container">
    <!-- 头部导航栏 -->
    <van-nav-bar fixed class="page-nav-bar">
      <van-button
        slot="title"
        type="info"
        size="small"
        icon="search"
        round
        class="search-btn"
        >搜索</van-button
      >
    </van-nav-bar>

    <!-- 频道列表 -->
    <van-tabs  class="channel-tabs" v-model="active" animated swipeable>
      <van-tab v-for="item in channels" :key="item.id" :title="item.name"
        ><ArticleList :channel="item"></ArticleList
      ></van-tab>
      <div slot="nav-right" class="hanburger-btn">
        <i class="iconfont icon-gengduo"></i>
      </div>
      <div slot="nav-right" class="placeholear"></div>
    </van-tabs>
  </div>
</template>

<script>
import { getUserChannelsAPI } from '@/api/index.js'
import ArticleList from './components/article-list.vue'
export default {
  name: 'HomeIndex',
  // 注册组件
  components: { ArticleList },
  // 定义props
  props: {},
  // 数据对象
  data () {
    return {
      active: 0,
      channels: [] // 频道列表
    }
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 生命周期创建阶段
  created () {
    this.loadChannels()
  },
  // 生命周期挂载阶段
  mounted () {},
  // 方法
  methods: {
    // 获取频道数据
    async loadChannels () {
      try {
        const { data } = await getUserChannelsAPI()
        this.channels = data.data.channels
      } catch (error) {
        this.$toast('获取频道数据失败')
      }
    }
  }
}
</script>

<style scoped lang='less'>
.home-container {
  padding-bottom: 100px;
  padding-top: 174px;
  // 导航栏样式
  /deep/.van-nav-bar__title {
    max-width: unset;
  }
  // 导航栏搜索样式
  .search-btn {
    width: 555px;
    height: 64px;
    background-color: #5babfa;
    border: none;
    font-size: 28px;
    .van-icon {
      font-size: 32px;
    }
  }

  // 频道列表样式
  /deep/.channel-tabs {
    .van-tabs__wrap {
      position: fixed;
      top: 92px;
      left: 0;
      right: 0;
      z-index: 1;
      height: 82px;
    }
    // 频道列表边框样式
    .van-tab {
      min-width: 200px;
      border-right: 1px solid #edeff3;
      border-bottom: 1px solid #edeff3;
      font-size: 30px;
      color: #777777;
    }
    // 选中颜色
    .van-tab--active {
      color: #333333;
    }
    //清除默认的边距
    .van-tabs__nav {
      padding-bottom: 0;
    }
    // 底部的下划线
    .van-tabs__line {
      width: 31px !important;
      height: 6px;
      background-color: #3296fa;
      bottom: 8px;
    }
    // 右侧的汉堡按钮
    .hanburger-btn {
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      opacity: 0.902;
      width: 66px;
      height: 82px;
      right: 0;
      i.iconfont {
        font-weight: 700;
        font-size: 33px;
      }
      &::before {
        content: "";
        position: absolute;
        left: 0;
        width: 2px;
        height: 80%;
        background: url("~@/assets/gradient-gray-line.png");
        background-size: contain;
      }
    }
    .placeholear {
      flex-shrink: 0;
      width: 66px;
      height: 82px;
    }
  }
}
</style>
