/**
 * Cell 组件用于展示一个带图标、标题和副标题的单元格
 * @param {Object} data - 包含 Cell 相关信息的对象
 * @param {string} [cellClassName] - 自定义样式类名(可选)
 * @param {string} data.icon - 图标
 * @param {string} data.title - 标题
 * @param {string} [data.subTitle] - 副标题（可选）
 * @param {boolean} [data.showRedDot] - 是否显示小红点（可选）
 * @param {boolean} [data.showArrowIcon] - 是否显示右箭头（可选）
 * @param {Function} data.onClick - 点击事件处理函数
 * @returns {JSX.Element} - 返回渲染的 JSX
 */

import React from "react";
import "./index.less";
import RedDot from "../../assets/red_dot@3x.png";
import ArrowIcon from "../../assets/arrow_right_grey@3x.png";

function Cell({ data }) {
  // 从 data 对象中提取图标、标题、副标题、是否显示小红点、是否显示箭头、点击事件和自定义样式类名
  const {
    icon,
    title,
    subTitle = "",
    showRedDot = false,
    showArrowIcon = false,
    cellClassName = "",
    onClick,
  } = data;

  return (
    <div className={`cell ${cellClassName}`} onClick={onClick}>
      <div className="left">
        {icon && <img src={icon} alt="" className="icon" />}
        <span className="title">{title}</span>
      </div>
      <div className="right">
        {subTitle && <span className="sub_title">{subTitle}</span>}
        {showRedDot && <img src={RedDot} alt="" className="red_dot" />}
        {showArrowIcon && <img src={ArrowIcon} alt="" className="arrow_icon" />}
      </div>
    </div>
  );
}

export default Cell;
