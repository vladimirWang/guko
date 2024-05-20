import React, { PropsWithChildren } from 'react'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import { Button, TabBar } from 'antd-mobile'
import { AppOutline, MessageOutline, UnorderedListOutline, UserOutline, StarOutline } from 'antd-mobile-icons'
import styles from './layout.module.less'

const Layout = (props: PropsWithChildren) => {
  const { children } = props

  const location = useLocation()
  const navigate = useNavigate()
  const { pathname } = location

  const setRouteActive = (value: string) => {
    navigate(value)
  }
  const tabs = [
    { name: '精彩', path: '/moment', icon: <AppOutline /> },
    { name: '日记', path: '/diary', icon: <MessageOutline /> },
    // { name: '财富', path: '/treasure', icon: <StarOutline /> },
    { name: '我的', path: '/mine', icon: <UserOutline /> },
  ]
  //   return (
  //     <div>
  //       Layout
  //       {children}
  //     </div>
  //   )
  return (
    <div>
      {children}
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

export default Layout
