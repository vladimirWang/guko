import React, { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home'
import Diary from '../pages/diary'
import Moment from '../pages/moment'
import Mine from '../pages/mine'
import Treasure from '../pages/treasure'
import Login from '../pages/login'
import NotFound from '../pages/notFound'
// import FinanceSkeleton from '../pages/finance/components/FinanceSkeleton'
// const skeletonItem = {
//   finance: <FinanceSkeleton />, //财富骨架屏组件
// }
//添加骨架屏方法
// function LazyWrapper(path) {
//   const Component = lazy(() => import(`../pages/${path}/index.jsx`))

//   return (
//     <Suspense fallback={skeletonItem[path]}>
//       <Component />
//     </Suspense>
//   )
// }

function IndexRoute() {
  return (
    <Routes>
      {/* <Route path="/home" element={<Home />}></Route> */}
      <Route path="/diary" element={<Diary />}></Route>
      <Route path="/moment" element={<Moment />}></Route>
      <Route path="/treasure" element={<Treasure />}></Route>
      <Route path="/mine" element={<Mine />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/404" element={<NotFound />}></Route>
      <Route path="/" element={<Navigate to="/home" />}></Route>
      <Route path="*" element={<Navigate to="/404" />}></Route>
    </Routes>
  )
}

export default IndexRoute
