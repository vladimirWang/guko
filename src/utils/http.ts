import axios from 'axios'

const http = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

http.interceptors.request.use((config) => {
  return config
})

http.interceptors.response.use((resp) => {
  return resp.data
})

export default http
