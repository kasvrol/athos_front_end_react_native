import { create } from 'zustand'
import { UserData } from '@/utils/interfaces/user'

interface UserStoreState {
  user: UserData | null
  token: string | null
  setUser: (userData: UserData) => void
  setToken: (token: string) => void 
  clearUser: () => void
}

export const useUserStore = create<UserStoreState>(set => ({
  user: null,
  token: null, 

  setUser: (userData) => set({ user: userData }),
  
  setToken: (token) => set({ token: token }),

  clearUser: () => set({ user: null, token: null }),
}))