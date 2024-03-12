import React from 'react'
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import IndexRoute from './router'
import styles from './app.module.less'
import { Button, TabBar } from 'antd-mobile'
import { AppOutline, MessageOutline, UnorderedListOutline, UserOutline, StarOutline } from 'antd-mobile-icons'

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value) => {
    navigate(value)
  }
  const tabs = [
    { name: '首页', path: '/home', icon: <AppOutline /> },
    { name: '优惠', path: '/discounts', icon: <MessageOutline /> },
    { name: '卡管理', path: '/bankCard', icon: <UnorderedListOutline /> },
    { name: '财富', path: '/finance', icon: <StarOutline /> },
    { name: '我的', path: '/mine', icon: <UserOutline /> },
  ]

  return (
    <div>
      <div className={styles.outlet}>{IndexRoute()}</div>
      <div className={styles.tabbar}>
        <TabBar activeKey={pathname} onChange={setRouteActive}>
          {tabs.map((item) => (
            <TabBar.Item key={item.path} icon={item.icon} title={item.name} />
          ))}
        </TabBar>
      </div>
    </div>
  )
}
export default App
