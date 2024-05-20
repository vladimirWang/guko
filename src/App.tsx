import React from 'react'
import {
  NavLink,
  Outlet,
  BrowserRouter,
  useNavigate,
  useLocation,
  Routes,
  Route,
  useRoutes,
  Navigate,
} from 'react-router-dom'
// import IndexRoute from './router'
import styles from './app.module.less'
import { Button, TabBar } from 'antd-mobile'
import { AppOutline, MessageOutline, UnorderedListOutline, UserOutline, StarOutline } from 'antd-mobile-icons'
import http from './utils/http'
import Moment from './pages/moment'
import Diary from './pages/diary'
import './common.less'
import routes from './router'
// console.log(IndexRoute, 'indexroutes')

// http.get('/user/login', { params: { username: 'john' } }).then((res) => {
//   console.log(res, '---login resp')
// })
function App() {
  const routerElement = useRoutes(routes)

  return (
    <div>
      {routerElement}
      {/* <div className={styles.outlet}>{element}</div> */}
      {/* <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/diary" element={<Diary />}></Route>
        <Route path="/moment" element={<Moment />}></Route>
        <Route path="/treasure" element={<Treasure />}></Route>
        <Route path="/mine" element={<Mine />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/404" element={<NotFound />}></Route>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes> */}
    </div>
  )
}
export default App
