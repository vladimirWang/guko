/*
 * @Author: 张尧 zhangyao@chinasofti.com
 * @Date: 2024-03-08 10:50:26
 * @LastEditors: 张尧 zhangyao@chinasofti.com
 * @LastEditTime: 2024-03-12 15:44:10
 * @FilePath: \yunshanfu\src\router\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Discounts from '../pages/discounts'
import BankCard from '../pages/bankCard'
import Mine from '../pages/mine'
import FinanceSkeleton from '../pages/finance/components/FinanceSkeleton'
const skeletonItem = {
  finance: <FinanceSkeleton />, //财富骨架屏组件
}
//添加骨架屏方法
function LazyWrapper(path) {
  const Component = lazy(() => import(`../pages/${path}/index.jsx`))

  return (
    <Suspense fallback={skeletonItem[path]}>
      <Component />
    </Suspense>
  )
}

function IndexRoute() {
  return (
    <Routes>
      {/* 重定向 */}
      <Route path="/" element={<Home />}></Route>
      {/* 首页 */}
      <Route path="/home" element={<Home />}></Route>
      {/* 优惠 */}
      <Route path="/discounts" element={<Discounts />}></Route>
      {/* 卡管理 */}
      <Route path="/bankCard" element={<BankCard />}></Route>
      {/* 财富 */}
      <Route path="/finance" element={LazyWrapper('finance')}></Route>
      {/* 我的 */}
      <Route path="/mine" element={<Mine />}></Route>
    </Routes>
  )
}

export default IndexRoute
