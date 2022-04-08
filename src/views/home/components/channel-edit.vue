<!--
 * @Description:弹出层频道组件
 * @Author: 执手天涯
 * @Date: 2022-04-08 08:59:12
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-04-08 11:20:48
 * @version: 1.0
-->
<template>
  <div class="channel-edit">
    <!-- 我的频道 -->
    <van-cell :border="false">
      <div class="title-text" slot="title">我的频道</div>
      <van-button
        type="danger"
        class="edit-btn"
        plain
        round
        size="mini"
        @click="isEdit = !isEdit"
        >{{ isEdit ? "完成" : "编辑" }}</van-button
      >
    </van-cell>
    <!-- 宫格组件 -->
    <van-grid class="my-grid" :gutter="10">
      <van-grid-item
        class="graid-item"
        v-for="(channel, index) in Mychannels"
        :key="index"
        @click="onMyChannelClick(channel, index)"
      >
        <!-- 编辑按钮 -->
        <van-icon
          name="clear"
          v-show="isEdit && !fiexChannel.includes(channel.id)"
          slot="icon"
        ></van-icon>
        <span
          class="text"
          :class="{ active: index === activeIndex }"
          slot="text"
          >{{ channel.name }}</span
        >
      </van-grid-item>
    </van-grid>

    <!-- 频道推荐 -->
    <van-cell :border="false">
      <div class="title-text" slot="title">频道推荐</div>
    </van-cell>
    <!-- 宫格组件 -->
    <van-grid class="recommed-grid" direction="horizontal" :gutter="10">
      <van-grid-item
        icon="plus"
        class="graid-item"
        v-for="(channel, index) in recommendChannels"
        :key="index"
        :text="channel.name"
        @click="addChannel(channel)"
      />
    </van-grid>
  </div>
</template>

<script>
import { getAllChannelsAPI } from '@/api/index.js'
export default {
  props: {
    Mychannels: {
      type: Array,
      required: true
    },
    activeIndex: {
      type: Number,
      required: true
    }
  },
  name: 'ChannelEdit',
  created () {
    // 获取所有频道数据
    this.loadAllChannels()
  },
  data () {
    return {
      // 所有的频道数据
      allChannels: [],
      isEdit: false,
      fiexChannel: [0] // 不允许删除
    }
  },
  methods: {
    //   加载所有的频道列表
    async loadAllChannels () {
      try {
        const { data } = await getAllChannelsAPI()
        this.allChannels = data.data.channels
      } catch (error) {
        this.$toast('获取推荐列表失败！')
      }
    },
    // 添加频道
    addChannel (channel) {
      this.Mychannels.push(channel)
    },

    // 点击我的频道两种操作
    onMyChannelClick (channel, index) {
      if (this.isEdit) {
        if (this.fiexChannel.includes(channel.id)) {
          this.$toast('该频道不能删除!')
          return
        }
        // 编辑状态，移除我的频道
        if (index <= this.activeIndex) {
          this.$emit('updateActive', this.activeIndex - 1, true)
        }
        this.Mychannels.splice(index, 1)
      } else {
        // 跳转首页中的我的频道，子组件向夫组件传递数值
        this.$emit('updateActive', index, false)
      }
    }
  },
  computed: {
    // 计算出推荐频道数据
    recommendChannels () {
      return this.allChannels.filter((channel) => {
        return !this.Mychannels.find((mychannels) => {
          return mychannels.id === channel.id
        })
      })
      //   const CommendChannels = []
      //   this.allChannels.forEach((channel) => {
      //     // 利用find遍历对比数组，返回一个布尔值
      //     const res = this.Mychannels.find((mychannel) => {
      //       return (mychannel.id = channel.id)
      //     })
      //     // 如果我的频道中没有该频道
      //     if (!res) {
      //       CommendChannels.push(channel)
      //     }
      //   })
      //   // 返回计算结果
      //   return CommendChannels
    }
  }
}
</script>
<style scoped lang='less'>
.channel-edit {
  padding: 85px 0px;
  // 标题样式
  .title-text {
    font-size: 32px;
    color: #333;
  }
  // 编辑按钮
  .edit-btn {
    width: 104px;
    height: 48px;
    text-align: center;
    font-size: 26px;
    color: #f85959;
    border: 1px solid #f85959;
  }
  // 我的频道图标
  /deep/.my-grid {
    .graid-item {
      .van-icon-clear {
        position: absolute;
        right: -10px;
        top: -10px;
        font-size: 30px;
        color: #cacaca;
        z-index: 5;
      }
    }
    // 去掉定位
    .van-grid-item__icon-wrapper {
      position: unset;
    }
  }
  // 宫格样式
  /deep/.graid-item {
    width: 160px;
    height: 86px;
    border: none;
    .van-grid-item__content {
      background-color: #f4f5f4;
      white-space: nowrap;
      .van-grid-item__text,
      .text {
        font-size: 28px;
        color: #222;
        margin-top: 2px;
        margin-left: 6px;
      }
      .active {
        color: red;
      }
      // 推荐频道图标
      .van-icon-plus {
        font-size: 28px;
      }
    }
  }
}
</style>
