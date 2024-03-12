/**
 * FinanceSkeleton 组件财富模块骨架屏组件
 * @returns {JSX.Element} - 返回渲染的 JSX
 */
import React from 'react'
import { Skeleton } from 'antd-mobile'
import { Grid } from 'antd-mobile'
import styles from './skeleton.module.less'
export default function FinanceSkeleton() {
  //生成功能区渲染循环数组
  const getFunctionList = () => {
    let iconNum = 10 //功能区图标个数
    let functionList = Array(iconNum)
      .fill(1)
      .map((i, index) => index + 1)
    return functionList
  }
  //渲染功能区骨架屏
  const listItems = getFunctionList().map((item) => (
    <Grid.Item className={styles.skeletonFunction} key={item}>
      <Skeleton animated className={styles.skeletonFunctionItem} />
    </Grid.Item>
  ))
  return (
    <div className={styles.skeleton}>
      <Skeleton animated className={styles.skeletonHead} />
      <Grid columns={5}>{listItems}</Grid>
      <Skeleton animated className={styles.skeletonHelper} />
      <Skeleton animated className={styles.skeletonHelper} />
    </div>
  )
}
