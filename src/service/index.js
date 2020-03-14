import axios from 'axios'
const service = axios.create({
  baseURL: process.env.API_ROOT
})
service.interceptors.response.use(
  res => {
    if (res.data.code === 200) {
      return res.data
    } else {
      return Promise.reject(res.data)
    }
  },
  err => Promise.reject(err)
)
export default service
