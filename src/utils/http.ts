import axios from 'axios'

const http = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

http.interceptors.response.use((resp) => {
  console.log(resp.status, '---resp')
  const status = resp.status
  if (status === 401) {
    window.location.href = '/login'
  }
  if (resp.config.url === '/user/login') {
    const token = resp.headers.token
    console.log('---token---', token)
    localStorage.setItem('token', token)
  }
  return resp.data
})

export default http
