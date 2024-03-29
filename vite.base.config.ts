/*
 * @Author: wangxiaoyu006 wangxiaoyu006@chinasofti.com
 * @Date: 2024-03-12 21:29:32
 * @LastEditors: wangxiaoyu006 wangxiaoyu006@chinasofti.com
 * @LastEditTime: 2024-03-17 15:08:54
 * @FilePath: /guko/vite.base.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import px2viewport from 'postcss-px-to-viewport'
// const path = require('path')

export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src'),
  //   },
  // },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // additionalData: `@import "${path.resolve(__dirname, 'src/global.less')}";`
      },
    },
    postcss: {
      plugins: [
        require('postcss-px-to-viewport')({
          viewportWidth: 375, //视窗的宽度，对应的是我们设计稿的宽度，一般是750
          unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
          selectorBlackList: ['.ignore'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
          minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
          mediaQuery: false, // 允许在媒体查询中转换`px`
          landscape: false, // 是否处理横屏情况
        }),
      ],
    },
  },
})
