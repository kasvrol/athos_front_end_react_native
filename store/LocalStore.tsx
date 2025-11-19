import { create } from 'zustand'

interface Bairro {
  id: number
  name: string
}

interface LocalStoreState {
  bairros: Bairro[]
  setBairros: (bairros: Bairro[]) => void
}

export const useLocalStore = create<LocalStoreState>(set => ({
  bairros: [],
  setBairros: (bairros) => set({ bairros }),
}))