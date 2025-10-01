import { UserLogin } from '@/utils/interfaces/user'
import axios from 'axios'

export const postUser = async (loginData: UserLogin) => {
  return await axios({
    method: 'post',
    url: '/user/12345',
    data: loginData,
  })
}
