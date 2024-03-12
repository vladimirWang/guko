/**
 * @param {Array} notices - 传入消息列表数组
 * @param {number} [interval] - 消息停留的时间间隔,单位为ms
 * @param {string} [direction] - 消息移动的方向,取值有 up,dowm,left,right
 */
import React, { useState, useEffect } from "react"
import "./notice-message.moudle.less"

// 接受三个参数，消息列表数组、时间间隔、方向
const NoticeMessage = ({ notices, interval, direction }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    // 设置定时器,根据传入的interval确定消息更改的时间
    const timer = setInterval(() => {
      // 设置要展示的公告的index
      setCurrentIndex((prevIndex) => {
        // 判断公告移动的方向
        if (direction === "left") {
          return prevIndex === 0 ? notices.length - 1 : prevIndex - 1
        } else if (direction === "right") {
          return prevIndex === notices.length - 1 ? 0 : prevIndex + 1
        } else if (direction === "up") {
          return prevIndex === 0 ? notices.length - 1 : prevIndex - 1
        } else if (direction === "down") {
          return prevIndex === notices.length - 1 ? 0 : prevIndex + 1
        }
      })
    }, interval)
    // 清除定时器
    return () => clearInterval(timer)
  }, [notices.length, interval, direction])

  return (
    <div className="wrap">
      <div
        className={`notice-container ${direction} `}
        style={{ animationDuration: `${interval}ms` }}
      >
        {notices.length > 0 && (
          <span className="notice">{notices[currentIndex]}</span>
        )}
      </div>
    </div>
  )
}
export default NoticeMessage
