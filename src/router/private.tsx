import React, { PropsWithChildren, useEffect } from 'react'
import { userProfile } from '../api/user'
import { useNavigate } from 'react-router-dom'
import { Toast } from 'antd-mobile'
import { removeToken } from '../utils/token'
import { useUserStore } from '../store/user'

export default function Private(props: PropsWithChildren) {
  const { username, updateUserInfo } = useUserStore()
  const navigate = useNavigate()
  const loadUserProfile = () => {
    userProfile()
      .then((res) => {
        //   console.log(res.status, '---user profile')
        if (res.status === 401) {
          Toast.show('token过期,请重新登录')
          removeToken()
          navigate('/login')
          return Promise.reject()
        } else {
          // console.log(res., '---user')
          return res.json()
        }
      })
      .then((res) => {
        console.log(res, '----拿到响应')
        updateUserInfo(res.user)
      })
  }
  useEffect(() => {
    loadUserProfile()
  }, [])
  return (
    <div>
      <h3>{username}</h3>
      {props.children}
    </div>
  )
}
