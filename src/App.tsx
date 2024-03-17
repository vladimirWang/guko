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

  const setRouteActive = (value: string) => {
    navigate(value)
  }
  const tabs = [
    { name: '精彩', path: '/moment', icon: <AppOutline /> },
    { name: '日记', path: '/diary', icon: <MessageOutline /> },
    { name: '财富', path: '/treasure', icon: <StarOutline /> },
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
