/*
 * @Author: wangxiaoyu006 wangxiaoyu006@chinasofti.com
 * @Date: 2024-03-11 09:16:48
 * @LastEditors: wangxiaoyu006 wangxiaoyu006@chinasofti.com
 * @LastEditTime: 2024-03-12 16:21:30
 * @FilePath: /yunshanfu/src/components/IconSwiper/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { Swiper } from 'antd-mobile'
import styles from './iconSwiper.module.less'

export default function IconSwiper({ data, swiperProps, cols = 5, rows = 2 }) {
  const _data = data.reduce((a, c, i) => {
    const n = Math.floor(i / (cols * rows))
    if (a[n] === undefined) {
      a[n] = [c]
    } else {
      a[n].push(c)
    }
    return a
  }, [])
  return (
    <Swiper {...swiperProps}>
      {_data.map((item, index) => (
        <Swiper.Item key={index}>
          <div
            className={styles['icon-swiper-item']}
            style={{ gridTemplateColumns: Array(cols).fill('1fr').join(' ') }}
          >
            {item.map((item2, index2) => {
              return (
                <div key={index2} className={styles['icon-swiper-item-container']}>
                  <img src={item2.icon} width={46} height={46} className={styles['icon-swiper-item-img']} />
                  <div className={styles['icon-swiper-item-text']}>{item2.text}</div>
                </div>
              )
            })}
          </div>
        </Swiper.Item>
      ))}
    </Swiper>
  )
}
