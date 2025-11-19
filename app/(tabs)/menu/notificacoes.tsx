import NotificacoesScreen from '@/components/templates/notificacoes'
import { useEffect } from 'react'

export default function VisualizarEventoPendente() {
  useEffect(() => {
    console.log('Notificacoes Screen mounted')
  }, [])
  return <NotificacoesScreen />
}
