import { SECOND } from '@/common/constants'
const devBaseUrl = ''
const prodBaseUrl = ''

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseUrl : prodBaseUrl

export const TIMEOUT = SECOND * 10