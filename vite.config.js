/* eslint-disable */
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
  console.log(mode, '--env')
  return envResolver[command]
})
