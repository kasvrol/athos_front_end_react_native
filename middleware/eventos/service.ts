import { api } from "../services/api";


export const getAllEventos = async () => {
  try {
    const response = await api.get('/api/eventos/');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar eventos:', error);
    throw error;
  }
};

export const createEvento = async (eventoData: any) => {
  try {
    const response = await api.post('/api/eventos/', eventoData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar evento:', error);
    throw error;
  }
};

export const participarEvento = async (inscricaoData: { eventoId: number }) => {
    try {
        const response = await api.post('/api/inscricoes/', inscricaoData);
        return response.data;
    } catch (error) {
        console.error('Erro ao se inscrever:', error);
        throw error;
    }
};

export const getMeusEventos = async (): Promise<any[]> => {
  try {
    const response = await api.get('/api/inscricoes/');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar histórico:', error);
    return [];
  }
};