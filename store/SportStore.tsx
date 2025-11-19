import { create } from 'zustand'
import { UserData } from '@/utils/interfaces/user'

interface UserStoreState {
  user: UserData | null
  setUser: (userData: UserData) => void
  clearUser: () => void
}

export const useUserStore = create<UserStoreState>(set => ({
  user: null,

  setUser: userData => set({ user: userData }),

  clearUser: () => set({ user: null }),
}))