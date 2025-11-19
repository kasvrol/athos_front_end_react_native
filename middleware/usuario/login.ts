
import { UserLogin } from '@/utils/interfaces/user'
import { api } from '../services/api'

export const postUser = async (loginData: UserLogin) => {
  try {
    const response = await api.post('/api/auth/login', loginData)
    return response.data 
  } catch (error) {
    console.error('Erro no login:', error)
    throw error
  }
}

export const getUserProfile = async () => {
  try {
    const response = await api.get('/api/perfil/')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar perfil:', error)
    throw error
  }
}