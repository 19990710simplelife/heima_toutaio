<!--
 * @Description: 根组件
 * @Autor: 执手天涯
 * @Date: 2022-03-27 19:51:35
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-03-27 22:45:51
-->
<template>
  <div id="app">
    <!-- 路由的出口 -->
    <router-view />
    <h1>黑马头条</h1>
    <div class="box">
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="less" scoped>
.box{
  width: 750px;
}
</style>
