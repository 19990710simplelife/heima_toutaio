<!--
 * @Description: 我的信息页面
 * @Autor: 执手天涯
 * @Date: 2022-03-30 14:59:37
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-04-06 08:34:38
-->
<template>
  <div class="my-constainer">
    <!-- 已登录的头部信息 -->
    <div v-if="user" class="header user-info">
      <!-- 基础信息 -->
      <div class="base-info">
        <div class="left">
          <van-image round class="avator" fit="cover" :src="userInfo.photo" />
          <!-- 文字 -->
          <span class="name">{{ userInfo.name }}</span>
        </div>
        <div class="right">
          <van-button size="mini" round>编辑资料</van-button>
        </div>
      </div>

      <!-- 数据信息 -->
      <div class="base-stats">
        <div class="data-item">
          <span class="count">{{ userInfo.art_count }}</span>
          <span class="text">头条</span>
        </div>
        <div class="data-item">
          <span class="count">{{ userInfo.follow_count }}</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">{{ userInfo.fans_count }}</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">{{ userInfo.like_count }}</span>
          <span class="text">获赞</span>
        </div>
      </div>
    </div>

    <!-- 未登录状态的头部 -->
    <div v-else class="header not-login">
      <div class="login-btn" @click="$router.push('/login')">
        <img class="mobile-img" src="~@/assets/mobile.png" alt="" />
        <span class="text">登录 / 注册</span>
      </div>
    </div>

    <!-- 导航 -->
    <van-grid clickable class="grid-nav" :column-num="2">
      <van-grid-item class="grid-item">
        <i slot="icon" class="iconfont icon-shoucang"></i>
        <span class="text" slot="text">收藏</span>
      </van-grid-item>

      <van-grid-item class="grid-item">
        <i slot="icon" class="iconfont icon-lishi"></i>
        <span class="text" slot="text">历史</span>
      </van-grid-item>
    </van-grid>

    <!-- 消息通知，小智同学 退出登录-->
    <van-cell title="消息通知" is-link />
    <van-cell title="小智同学" is-link />
    <van-cell
      v-if="user"
      @click="loginOut"
      title="退出登录"
      clickable
      class="lgout-cell"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfoAPI } from '@/api/index.js'
export default {
  name: 'MyIndex',
  // 注册组件
  components: {},
  // 定义props
  props: {},
  // 数据对象
  data () {
    return {
      // 用户信息读一下
      userInfo: {}
    }
  },
  // 计算属性
  computed: {
    ...mapState(['user'])
  },
  // 侦听器
  watch: {},
  // 生命周期创建阶段
  created () {
    // 如果用户登录了，请求加载用户信息
    if (this.user) {
      this.loadUserInfo()
    }
  },
  // 生命周期挂载阶段
  mounted () {},
  // 方法
  methods: {
    /**
     * 加载用户信息
     */
    async loadUserInfo () {
      try {
        const res = await getUserInfoAPI()
        this.userInfo = res.data.data
      } catch (error) {
        this.$toast('获取数据失败！，请稍后重试')
      }
    },

    /**
     * 退出登录
     */
    loginOut () {
      // 提示框
      this.$dialog
        .confirm({
          title: '确认退出吗?'
        })
        // 确认退出
        .then(() => {
          this.$store.commit('setUser', null)
        })
        // 取消
        .catch(() => {})
    }
  }
}
</script>
<style scoped lang='less'>
.my-constainer {
  // 顶部背景设置
  .header {
    height: 361px;
    background: url("~@/assets/banner.png");
    background-size: cover;
  }

  // 未登录样式设计
  .not-login {
    display: flex;
    justify-content: center;
    align-content: center;
    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      .mobile-img {
        width: 132px;
        height: 132px;
      }
      .text {
        font-size: 28px;
        margin-top: 15px;
        color: #fff;
      }
    }
  }

  // 用户登录后用户信息样式
  .user-info {
    // 用户信息样式设置
    .base-info {
      height: 231px;
      padding: 76px 32px 23px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        .avator {
          width: 132px;
          height: 132px;
          margin-right: 23px;
          border: 4px solid #fff;
        }
        .name {
          font-size: 30px;
          color: #fff;
        }
      }
    }
    // 数据信息样式设置
    .base-stats {
      display: flex;
      .data-item {
        flex: 1;
        height: 130px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #fff;
        .count {
          font-size: 36px;
        }
        .text {
          font-size: 23px;
        }
      }
    }
  }

  // 宫格导航样式
  .grid-nav {
    .grid-item {
      height: 141px;
      i.iconfont {
        font-size: 45px;
      }
      .icon-shoucang {
        color: #eb5253;
      }
      .icon-lishi {
        color: #ff9d1d;
      }
      span.text {
        font-size: 28px;
      }
    }
  }
  // 退出登录
  .lgout-cell {
    text-align: center;
    margin-top: 9px;
    color: #d86262;
  }
}
</style>
