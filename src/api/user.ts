import http from '../utils/http'

console.log(http, '---http---')
export function userLogin(data: any) {
  console.log('1')
  return http.post('/auth/login', data)
  // return http.get('/book/list', data)
}

export function testJwt() {
  return http.post('/auth/login', { username: 'maria', password: 'guess' })
}
