import { api } from '@/middleware/services/api';
import { create } from 'zustand'

interface Notification {
  id: string;
  titulo: string;
  mensagem: string;
  lida: boolean;
  data: string;
}

interface NotificationState {
  notifications: Notification[]
  unreadCount: number
  fetchNotifications: () => Promise<void>
  markAsRead: (id: string) => void
}

export const useNotificationStore = create<NotificationState>((set, get) => ({
  notifications: [],
  unreadCount: 0,

  fetchNotifications: async () => {
    try {
      const response = await api.get('/api/notificacoes/')
      const data = response.data
      set({ 
          notifications: data,
          unreadCount: data.filter((n: Notification) => !n.lida).length
      })
    } catch (error) {
      console.error('Erro ao buscar notificações', error)
    }
  },

  markAsRead: async (id) => {
      // Opcional: Chamar endpoint de marcar como lida se existir
      // await api.put(`/api/notificacoes/${id}/lida`)
      
      set(state => {
          const updated = state.notifications.map(n => 
              n.id === id ? { ...n, lida: true } : n
          )
          return {
              notifications: updated,
              unreadCount: updated.filter(n => !n.lida).length
          }
      })
  }
}))