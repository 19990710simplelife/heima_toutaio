<!--
 * @Description: 输出页面
 * @Autor: 执手天涯
 * @Date: 2022-03-30 14:42:57
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-04-07 19:48:28
-->

<template>
  <div class="layout-container">
      <router-view></router-view>
    <van-tabbar class="layout-tabbar" route>
      <van-tabbar-item to="/">
        <i slot="icon" class="iconfont icon-shouye"></i>
        <span class="text">首页</span>
      </van-tabbar-item>

      <van-tabbar-item to="/qa">
        <i slot="icon" class="iconfont icon-wenda"></i>
        <span class="text">问答</span>
      </van-tabbar-item>

      <van-tabbar-item to="/video">
        <i slot="icon" class="iconfont icon-shipin"></i>
        <span class="text">视频</span>
      </van-tabbar-item>

      <van-tabbar-item to="/my">
        <i slot="icon" class="iconfont icon-wode"></i>
        <span class="text">{{ $store.state.user ? "我的" : "未登录" }}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  // 注册组件
  components: {},
  // 定义props
  props: {},
  // 数据对象
  data () {
    return {}
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 生命周期创建阶段
  created () {},
  // 生命周期挂载阶段
  mounted () {},
  // 方法
  methods: {}
}
</script>
<style scoped lang='less'>
.layout-container {
  .layout-tabbar {
    i.iconfont {
      font-size: 40px;
    }
    span.text {
      font-size: 20px;
    }
  }
}
</style>
