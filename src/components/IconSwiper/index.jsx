import React from 'react';
import {Swiper} from 'antd-mobile'
import styles from './icon-swiper.module.less'

export default function IconSwiper({data, swiperProps, perRowItemCount = 5, perPageRowCount = 2}) {
  const _data = data.reduce((a, c, i) => {
    const n = Math.floor(i / (perRowItemCount * perPageRowCount));
    if (a[n] === undefined) {
      a[n] = [c]
    } else {
      a[n].push(c)
    }
    return a;
  }, [])
  return (
    <Swiper {...swiperProps}>
      {
        _data.map((item, index) => (
          <Swiper.Item key={index}>
            <div className={styles['icon-swiper-item']} style={{gridTemplateColumns: Array(perRowItemCount).fill('1fr').join(" ")}}>
              {
                item.map((item2, index2) => {
                  return (
                    <div key={index2} className={styles['icon-swiper-item-container']}>
                      <img 
                        src={item2.icon} 
                        width={46} className={styles['icon-swiper-item-img']}/>
                      <div className={styles['icon-swiper-item-text']}>
                        {item2.text}
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </Swiper.Item>
        ))
      }
    </Swiper>
  )
}
