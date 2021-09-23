import { SECOND } from '@/common/constants'
const devBaseUrl: string = ''
const prodBaseUrl: string = ''

export const BASE_URL: string = process.env.NODE_ENV === 'development' ? devBaseUrl : prodBaseUrl

export const TIMEOUT: number = SECOND * 10