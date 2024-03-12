/*
 * @Description: 全局路由守卫
 * @Author: xialei
 * @Date: 2024-03-08 17:00:48
 * @LastEditTime: 2024-03-08 17:43:45
 * @LastEditors: xialei
 */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// 白名单列表
const allowList = ['/login', '/register'];


export default function AuthRoute(props) {
    
    const location = useLocation();
    // children 为子组件
    const { children } = props;
    // 根据 token 对路由进行权限校验
    let token = true;
    if (token && token !== 'undefined') {
        // 有 token 的状态下禁止用户回到登录页，重定向到首页
        if (location.pathname.includes('login')) {
            return <Navigate to={'/Home'}></Navigate>;
        } else {
            // 其他路由均可正常跳转
            return <>{children}</>;
        }
    } else {
        // 无 token 的状态下，如果要跳转的路由是白名单中的路由，正常跳转
        if (allowList.includes(location.pathname || '')) {
            return <>{children}</>;
        } else {
            // 无 token 且非白名单路由，跳转至原生登录页
            alert('跳转至原生登录页')
            // window.location.href = 'https://wwww.baidu.com'
        }
    }
}

