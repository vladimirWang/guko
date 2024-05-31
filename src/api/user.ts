import http from '../utils/http'
import { getToken } from '../utils/token'

console.log(http, '---http---')
export function userLogin(data: any) {
  console.log('1')
  return http.post('/user/login', data)
  // return http.get('/book/list', data)
}

export function userProfile() {
  const token = getToken()
  console.log('1', token)
  // return http.get('/user/profile')
  return fetch('/api/user/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  // .then((res) => res.json())
  // return http.get('/book/list', data)
}

export function testJwt() {
  return http.post('/user/login', { username: 'maria', password: 'guess' })
}
