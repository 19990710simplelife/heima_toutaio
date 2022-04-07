<!--
 * @Description:文章列表项
 * @Author: 执手天涯
 * @Date: 2022-04-07 22:33:18
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-04-08 00:02:19
 * @version: 1.0
-->
<template>
  <!-- 文章项 -->
  <van-cell class="article-item">
    <!-- 标题 -->
    <div slot="title" class="title van-multi-ellipsis--l2">
      {{ article.title }}
    </div>
    <!-- 底部信息 -->
    <div slot="label" class="label">
      <!-- 图片信息 -->
      <div v-if="article.cover.type === 3" class="cover-wrap">
        <div
          class="cover-item"
          v-for="(img, index) in article.cover.images"
          :key="index"
        >
          <van-image lazy-load class="cover-item-img" fit="cover" :src="img" />
        </div>
      </div>
      <!-- 底部文字信息 -->
      <div class="label-info-wrap">
        <span>{{ article.aut_name }}</span>
        <span>{{ article.comm_count }} 评论</span>
        <span>{{ article.pubdate | relativeTime }}</span>
      </div>
    </div>
    <!-- 图片 -->
    <van-image
      slot="default"
      class="right-cover"
      fit="cover"
      lazy-load
      v-if="article.cover.type === 1"
      :src="article.cover.images[0]"
    />
  </van-cell>
</template>

<script>
export default {
  name: 'ArticleItem',
  // 自定义props
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped lang='less'>
.article-item {
  .title {
    font-size: 32px;
    color: #3a3a3a;
  }
  .van-cell__value {
    flex: unset;
    width: 232px;
    height: 246px;
    padding-left: 25px;
  }
  .right-cover {
    width: 232px;
    height: 146px;
  }
  .label-info-wrap span {
    font-size: 22px;
    color: #b4b4b4;
    margin-right: 25px;
  }

  .cover-wrap {
    display: flex;
    .cover-item {
      flex: 1;
      height: 146px;
      margin: 30px 0;
      &:not(:last-child) {
        padding-right: 4px;
      }
      .cover-item-img {
        width: 100%;
        height: 146px;
      }
    }
  }
}
</style>
