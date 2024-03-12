import React from 'react'
import smileImg from './smileImg.png'
import './arcTabs.less'
const ArcTabs = props => {
  const {
    tabSet, // 数组渲染
    defaultActiveTab = 0, //设置默认选中值
    updateContent = '', // 修改容器样式
    activeTitle = '', // 修改选中字体样式
    onChange, // 切换tabs触发的方法
  } = props
  return (
    <div className="tabsContent">
      <div className={`'selectWrapper' ${updateContent}`}>
        {tabSet.map((item, index) => (
          <span
            key={index}
            className={index === defaultActiveTab ? `'selectItem_active' ${activeTitle}` : 'selectItem_basic'}
            onClick={() => onChange(item, index)}
          >
            {item.title}
            <div className="tab_img">
              <img src={smileImg} />
            </div>
          </span>
        ))}
      </div>
      <div>{tabSet[defaultActiveTab].content}</div>
    </div>
  )
}

export default ArcTabs
