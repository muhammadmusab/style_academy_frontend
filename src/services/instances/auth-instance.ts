import { API_BASE_URL } from '@/constants'
import { HttpService } from '../http.service'

export const authInstance = new HttpService(API_BASE_URL!, {
  useRefreshToken: false, // not using refresh token in this project, instead using accessToken
  attachToken: false,
});
