/**
 * Pop 组件用于展示一个带标题、内容和按钮的弹窗
 * @param {string} modalType - 弹窗类型，默认为提示弹窗（不包含取消按钮和取消事件），可传入'confirm'切换为确认弹窗
 * @param {string} title - 弹窗的标题
 * @param {string} content - 弹窗内容
 * @param {string} confirmText - 确认按钮显示文字
 * @param {string} cancelText - 取消按钮显示文字
 * @param {Function} onConfirm - 确认按钮回调的函数
 * @param {Function} onCancel - 取消按钮回调的函数
 * @param {JSX.Element} triggerContent - 需要触发弹窗组件的元素或组件
 * @returns {JSX.Element} - 返回渲染的 JSX
 */
import React from 'react';  
import { Modal } from 'antd-mobile';  
import './modal.less'

function Pop({ modalType , title, content, confirmText = '确认', cancelText = '取消', onConfirm, onCancel, triggerContent }) {  
  const showModal = () => {  
    switch(modalType) {  
      case 'confirm':  
        Modal.confirm({  
          title,  
          content,  
          confirmText,  
          cancelText,  
          onConfirm,  
          onCancel,  
        });  
        break;  
      // 默认为提示弹窗 
      default:  
        Modal.alert({  
          title,  
          content,  
          confirmText,  
          onConfirm,  
        });  
    }  
  };  
  
  return (  
    // 自定义需要绑定弹窗的元素或组件
    <span onClick={showModal}>{triggerContent}</span>  
  );  
}  
  
export default Pop;