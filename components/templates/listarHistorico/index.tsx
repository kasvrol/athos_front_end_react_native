import { CardEvento } from '@/components/organisms/cardEvento'
import { getMeusEventos } from '@/middleware/eventos/service'
import { todosEventos } from '@/mock/eventosEsportivos'
import { useEffect, useState } from 'react'
import { YStack, Text, ScrollView } from 'tamagui'

enum SecaoUsuario {
  PARTICIPANTE = 'PARTICIPANTE',
  ORGANIZADOR = 'ORGANIZADOR',
}

interface ListarHistoricoProps {
  secao: SecaoUsuario
}

export const ListarHistorico = ({ secao }: ListarHistoricoProps) => {
  const [historico, setHistorico] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchHistory = async () => {
        setIsLoading(true)
        try {
            const data = await getMeusEventos()
            setHistorico(data)
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }
    fetchHistory()
  }, [])

  return (
    <ScrollView>
      {secao === SecaoUsuario.ORGANIZADOR ? (
        <YStack>
          { !isLoading && historico.length > 0 ? (
            historico.map((evento, index) => <CardEvento key={index} {...evento} />)
          ) : (
            <Text>Nenhum evento encontrado.</Text>
          )}
        </YStack>
      ) : (
        <YStack>
          {!isLoading && historico.length > 0 ? (
            historico.map((evento, index) => <CardEvento key={index} {...evento} />)
          ) : (
            <Text>Nenhum evento encontrado.</Text>
          )}
        </YStack>
      )}
    </ScrollView>
  )
}
