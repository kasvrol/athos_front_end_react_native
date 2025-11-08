import { CardEvento } from '@/components/organisms/cardEvento'
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
  const [eventos, setEventos] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    setIsLoading(true)
    //const todosEventos = buscarEventos()
    setEventos(todosEventos)
    setIsLoading(false)
  }, [])

  return (
    <ScrollView>
      {secao === SecaoUsuario.ORGANIZADOR ? (
        <YStack>
          {!error && !isLoading && eventos.length > 0 ? (
            eventos.map((evento, index) => <CardEvento key={index} {...evento} />)
          ) : (
            <Text>Nenhum evento encontrado.</Text>
          )}
        </YStack>
      ) : (
        <YStack>
          {!error && !isLoading && eventos.length > 0 ? (
            eventos.map((evento, index) => <CardEvento key={index} {...evento} />)
          ) : (
            <Text>Nenhum evento encontrado.</Text>
          )}
        </YStack>
      )}
    </ScrollView>
  )
}
