import { create } from 'zustand'
import { Sport } from '@/utils/interfaces/esportes'

interface SportStoreState {
  sports: Sport[]
  setSports: (sports: Sport[]) => void
}

export const useSportStore = create<SportStoreState>(set => ({
  sports: [],
  setSports: (sports) => set({ sports }),
}))