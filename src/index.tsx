/*
 * @Author: wangxiaoyu006 wangxiaoyu006@chinasofti.com
 * @Date: 2024-03-12 21:23:38
 * @LastEditors: wangxiaoyu006 wangxiaoyu006@chinasofti.com
 * @LastEditTime: 2024-03-17 20:34:18
 * @FilePath: /guko/src/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import 'normalize.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App.tsx'
// import { Provider } from 'react-redux'
// import store from './store/index'
// import AuthRoute from './router/authRoute.jsx'
// import './index.less'

const root = ReactDOM.createRoot(document.getElementById('root')!)
// root.render(<App />)
root.render(
  <HashRouter>
    <App />
  </HashRouter>,
)
