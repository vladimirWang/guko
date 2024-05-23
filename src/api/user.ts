import http from '../utils/http'

console.log(http, '---http---')
export function userLogin(data: any) {
  return http.post('/user/login', data)
}
