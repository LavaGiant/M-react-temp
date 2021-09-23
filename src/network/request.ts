import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { TIMEOUT, BASE_URL } from './config'

interface AxiosError extends Error {
  config: AxiosRequestConfig
  code?: string
  request?: any
  response?: AxiosResponse
  isAxiosError: boolean
}

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => config,
  (error: AxiosError): Promise<AxiosError> => Promise.reject(error),
)

instance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse<{ data: any }> => response.data,
  (error: AxiosError): Promise<AxiosError> => Promise.reject(error),
)

export default instance