import { API_BASE_URL } from '@/constants'
import { HttpService } from '../http.service'

export const serviceInstance = new HttpService(API_BASE_URL!)
