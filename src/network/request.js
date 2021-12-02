import axios from 'axios'
import { TIMEOUT, BASE_URL } from './config'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
})

instance.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
)

instance.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error),
)

export default instance