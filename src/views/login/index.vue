<!--
 * @Description: 登录页面
 * @Autor: 执手天涯
 * @Date: 2022-03-27 22:58:15
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-03-30 21:22:55
-->
<template>
  <div class="login-container">
    <van-nav-bar class="page-nav-bar" title="登录">
      <!-- 左侧返回图标 -->
      <van-icon @click="$router.back()" slot="left" name="cross"></van-icon>
    </van-nav-bar>
    <van-form ref="loginForm" @submit="onSubmit">
      <!-- 用户名相关信息 -->
      <van-field
        type="number"
        maxlength="11"
        v-model="user.mobile"
        name="moblie"
        placeholder="请输入手机号"
        :rules="userFormRules.mobile"
      >
        <i slot="left-icon" class="iconfont icon-shouji"></i>
      </van-field>

      <!-- 验证码相关信息 -->
      <van-field
        type="number"
        maxlength="6"
        v-model="user.code"
        name="code"
        placeholder="请输入验证码"
        :rules="userFormRules.code"
      >
        <i slot="left-icon" class="iconfont icon-yanzhengma"></i>
        <template #button>
          <van-count-down
            v-if="isShowCountDown"
            :time="time"
            format="ss s"
            @finish="isShowCountDown = false"
          />
          <van-button
            v-else
            round
            class="send-sms-btn"
            size="small"
            type="default"
            native-type="button"
            @click="onSendSms"
            >发送验证码</van-button
          >
        </template>
      </van-field>

      <!-- 登录容器 -->
      <div class="login-btn-wrap">
        <van-button block type="info" class="login-btn" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
// 导入封装的API
import { loginAPI, getcodeAPI } from '@/api/index.js'
export default {
  name: 'LoginIndex',
  // 注册组件
  components: {},
  // 定义props
  props: {},
  // 数据对象
  data () {
    return {
      // 用户对象
      user: {
        mobile: '',
        code: ''
      },

      // 表单验证规则对象
      userFormRules: {
        mobile: [
          { required: true, message: '手机号不能为空' },
          {
            pattern: /^1[3|5|7|8]\d{9}$/,
            message: '手机号格式错误'
          }
        ],
        code: [
          { required: true, message: '验证码不能为空' },
          {
            pattern: /\d{6}/,
            message: '验证码格式错误'
          }
        ]
      },

      // 验证码倒计时
      time: 1000 * 60,

      // 控制是否显示倒计时
      isShowCountDown: false
    }
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
  methods: {
    /**
     * 点击发送验证码进行手机号验证
     */
    async onSendSms (phoneNumber) {
      try {
        await this.$refs.loginForm.validate('moblie')
      } catch (error) {
        return console.log('验证失败', error)
      }
      // 手机号验证通过显示倒计时
      this.isShowCountDown = true

      // 发送验证码
      try {
        await getcodeAPI(this.user.mobile)
        this.$toast('发送成功')
      } catch (error) {
        // 发送失败，关闭倒计时
        this.isShowCountDown = false
        if (error.response.status === 429) {
          this.$toast('您的请求过于平凡，请稍后重试')
        } else {
          this.$toast('发送失败,请稍后重试！')
        }
      }
    },

    /**
     * 表单登录提交事件
     */
    async onSubmit () {
      // 获取表单数据
      const user = this.user
      // 登录中提示
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration: 0
      })
      // 提交表单请求登录
      try {
        const loginRes = await loginAPI(user)
        this.$toast.success('登录成功!')
        this.$store.commit('setUser', loginRes.data)
        // 预留一个bug
        this.$router.back()
      } catch (error) {
        if (error.response.status === 400) {
          this.$toast.fail('手机号或验证码错误！')
        } else {
          this.$toast.fail('登录失败，请稍后重试', error)
        }
      }
    }
  }
}
</script>

<style scoped lang='less'>
.login-container {
  .iconfont {
    font-size: 37px;
  }
  .send-sms-btn {
    width: 152px;
    height: 46px;
    line-height: 46px;
    font-size: 22px;
    padding: 0;
    background-color: #ededed;
    color: #666;
  }
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
      border-radius: 10px;
    }
  }
}
</style>
