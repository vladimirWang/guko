/**
 * @param {string | number} data - 传入的数值
 * @param {boolean} [isLogin] - 是否为登录状态(可选)
 * @param {boolean} [flag] - 是否展示金额符号￥(可选)
 * @param {string} [cname] - 自定义样式类名(可选)
 */
import React from 'react'
import styles from './dataDisplay.module.less'

export const DataDisplay = (props) => {
  const { data, isLogin = true, flag = false, cname = '' } = props
  // 将数值拆分为整数和小数部分 以实现不同样式
  const intData = (num) => {
    let arr = (num + '').split('.')
    return arr
  }
  // 数据处理
  const processData = (data, flag) => {
    if (!data || data == 0) {
      return (
        <>
          {flag && <span>￥</span>}
          {/* 整数部分 */}
          <span className={styles.data_int}>{intData(data)[0]}</span>
          {/* 小数部分 */}
          {intData(data)[1] && <span className={styles.data_decimal}>{`.${intData(data)[1]}`}</span>}
        </>
      )
    } else if (Number(data) >= 10000) {
      // 数值超过一万（含一万）时的处理
      let valMore = intData(parseInt((Number(data) / 10000) * 10) / 10)
      return (
        <>
          {flag && <span>￥</span>}
          {/* 整数部分 */}
          <span className={styles.data_int}>{valMore[0]}</span>
          {/* 小数部分，不四舍五入 */}
          <span className={styles.data_decimal}>{`.${valMore[1]}万+`}</span>
        </>
      )
    } else {
      // 数值小于一万时的处理
      let valIn = intData(parseFloat(Number(data).toFixed(2)))
      return (
        <>
          {flag && <span>￥</span>}
          {/* 整数部分 */}
          <span className={styles.data_int}>{valIn[0]}</span>
          {/* 小数部分，少于两位原样输出，多于两位四舍五入、保留两位 */}
          {valIn[1] && <span className={styles.data_decimal}>{`.${valIn[1]}`}</span>}
        </>
      )
    }
  }
  return (
    <div className={`${styles.display_data} ${styles[cname]}`}>
      {isLogin ? processData(data, flag) : <span className={styles.data_int}>--</span>}
    </div>
  )
}
