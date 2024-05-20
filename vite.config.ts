/*
 * @Author: wangxiaoyu006 wangxiaoyu006@chinasofti.com
 * @Date: 2024-03-12 21:29:49
 * @LastEditors: wangxiaoyu006 wangxiaoyu006@chinasofti.com
 * @LastEditTime: 2024-03-17 15:29:40
 * @FilePath: /guko/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'
import viteBaseConfig from './vite.base.config'
import { loadEnv } from 'vite'

const envResolver = {
  serve: { ...viteBaseConfig, ...viteDevConfig },
  build: { ...viteBaseConfig, ...viteProdConfig },
}
// https://vitejs.dev/config/
/** @type import("vite").UserConfig */
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log(mode, env.NODE_ENV, '--env')
  return envResolver[command]
})
