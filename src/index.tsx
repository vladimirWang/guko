/*
 * @Author: wangxiaoyu006 wangxiaoyu006@chinasofti.com
 * @Date: 2024-03-12 21:23:38
 * @LastEditors: wangxiaoyu006 wangxiaoyu006@chinasofti.com
 * @LastEditTime: 2024-03-17 15:32:50
 * @FilePath: /guko/src/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import store from './store/index'
// import AuthRoute from './router/authRoute.jsx'
// import './index.less'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(<App />)
// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/login" element={<h3>login</h3>} />
//       <Route path="*" element={<Navigate to="/login" />} />
//     </Routes>
//   </BrowserRouter>,
// )
{
  /* <Provider store={store}> */
}
