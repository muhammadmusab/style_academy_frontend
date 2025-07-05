'server-only'

import { cookies } from 'next/headers'
import { ACCESS_TOKEN_COOKIE_KEY } from '@/constants'

export const isAuth = () => {
  const cookieStore = cookies()
  return cookieStore.get(ACCESS_TOKEN_COOKIE_KEY)
}
