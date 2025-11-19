import { api } from "../services/api"

interface AvaliacaoDTO {
  avaliadoId: string | number
  eventoId: string | number
  nota: number
  comentario: string
}

export const enviarAvaliacao = async (dados: AvaliacaoDTO) => {
  try {
    const response = await api.post('/api/avaliacoes/', dados)
    return response.data
  } catch (error) {
    console.error('Erro ao enviar avaliação:', error)
    throw error
  }
}