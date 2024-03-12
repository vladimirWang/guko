
import React from 'react';
import './index.less'
function BlockContent(props) {
  /**
   * 从父组件传过来的值：
   * 
   * @param {ReactNode} title - header 左边区域 
   * @param {ReactNode} extra - header 右边区域 
   * @param {string} wholeClassName - 组件整体自定义类名
   * @param {string} bodyClassName - body 自定义类名
   * @param {string} headerClassName - header 自定义类名
   * @param {(event) => void} onBodyClick - body 区域点击事件
   * @param {(event) => void} onClick - 卡片点击事件
   * @param {(event) => void} onHeaderClick - header 区域点击事件
   * 
   */
  const { title = '',extra,wholeClassName,bodyClassName,headerClassName,onBodyClick,onClick,onHeaderClick } = props
  
  return (
    // 整体样式
    <div className={`block_container ${wholeClassName}`} onClick={onClick}>
      {/* 头部 */}
      <div className={`block_container_header ${headerClassName}`}  onClick={onHeaderClick}>
        {title && (
          <span>
            {title}
          </span>
        )}
        {extra && (
          <div className='block_container_extra'>
            {extra}
          </div>
        )}
      </div>
      {/* content内容区 */}
      <div className={bodyClassName} onClick={onBodyClick}>
        {props.children}
      </div>
    </div>
  )
}


export default BlockContent;