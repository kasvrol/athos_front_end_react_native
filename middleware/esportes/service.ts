
import { Sport } from '@/utils/interfaces/esportes'
import { api } from '../services/api'

export const getAllEsportes = async (): Promise<Sport[]> => {
  try {  
    const response = await api.get('/api/esportes/')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar esportes:', error)
    throw error
  }
}