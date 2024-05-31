import React, { PropsWithChildren, useEffect } from 'react'
import { userProfile } from '../api/user'
import { useNavigate } from 'react-router-dom'
import { Toast } from 'antd-mobile'
import { removeToken } from '../utils/token'

export default function Private(props: PropsWithChildren) {
  const navigate = useNavigate()
  const loadUserProfile = () => {
    userProfile().then((res) => {
      //   console.log(res.status, '---user profile')
      if (res.status === 401) {
        Toast.show('token过期,请重新登录')
        removeToken()
        navigate('/login')
      }
    })
  }
  useEffect(() => {
    loadUserProfile()
  }, [])
  return <div>{props.children}</div>
}
