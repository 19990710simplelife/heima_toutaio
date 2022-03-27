/*
 * @Description: PostCSS配置信息
 * @Autor: 执手天涯
 * @Date: 2022-03-27 22:27:57
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-03-27 22:43:45
 */
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue ({
        file
      }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}
