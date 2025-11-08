import LayoutComponent from '@/components/atoms/layout'
import { BasketballLoading } from '@/components/atoms/loading/basketball'
import { CardEvento } from '@/components/organisms/cardEvento'
import HeaderEventosCampeonatosView from '@/components/organisms/headerEventosCampeonatos'
import { todosEventos } from '@/mock/eventosEsportivos'
import { useEffect, useState } from 'react'
import { H2, ScrollView, Text, YStack } from 'tamagui'

function ListarEventosView() {
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
    <ScrollView backgroundColor={'$background'} padding={'$2'}>
      <H2
        color="$color10"
        fontFamily={'$body'}
        fontWeight={'700'}
        textAlign="center"
        marginVertical={'$3'}
      >
        Lista de Eventos
      </H2>
      <YStack>
        <HeaderEventosCampeonatosView
          routerButton={'/(tabs)/criarEvento'}
          titleButton="CRIAR EVENTO"
        />
      </YStack>

      {isLoading && <BasketballLoading />}

      {error && <BasketballLoading />}
      <YStack>
        {!error && !isLoading && eventos.length > 0 ? (
          eventos.map((evento, index) => <CardEvento key={index} {...evento} />)
        ) : (
          <Text>Nenhum evento encontrado.</Text>
        )}
      </YStack>
    </ScrollView>
  )
}

export default ListarEventosView
