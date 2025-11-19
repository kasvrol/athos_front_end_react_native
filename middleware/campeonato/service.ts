
import { Campeonato } from '@/utils/interfaces/campeonatos';
import { api } from '../services/api';

export const getAllCampeonatos = async (): Promise<Campeonato[]> => {
  try {
    const response = await api.get('/api/campeonatos/');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar campeonatos:', error);
    throw error;
  }
};

export const createCampeonato = async (campData: any) => {
    try {
      const response = await api.post('/api/campeonatos/', campData);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar campeonato:', error);
      throw error;
    }
};

export const createEquipe = async (equipeData: any) => {
    try {
        const response = await api.post('/api/equipes/', equipeData);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar equipe:', error);
        throw error;
    }
}