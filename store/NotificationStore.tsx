import { create } from 'zustand'

type NotificationType = 'success' | 'error' | 'info' | 'warning'

interface NotificationState {
  visible: boolean
  message: string
  type: NotificationType
  showNotification: (message: string, type: NotificationType) => void
  hideNotification: () => void
}

export const useNotificationStore = create<NotificationState>((set) => ({
  visible: false,
  message: '',
  type: 'info',

  showNotification: (message, type) => {
    set({ visible: true, message, type })
    
    // Auto-hide após 3 segundos
    setTimeout(() => {
      set({ visible: false })
    }, 3000)
  },

  hideNotification: () => set({ visible: false }),
}))