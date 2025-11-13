import LayoutDefault from '@/components/atoms/layoutDefault'
import { BasketballLoading } from '@/components/atoms/loading/basketball'
import { CardEvento } from '@/components/organisms/cardEvento'
import HeaderEventosCampeonatosView from '@/components/organisms/headerEventosCampeonatos'
import { todosEventos } from '@/mock/eventosEsportivos'
import { Medal } from '@tamagui/lucide-icons'
import { ExternalPathString, RelativePathString } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { H2, Text, XStack, YStack } from 'tamagui'

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
    <LayoutDefault>
      <XStack
        justifyContent="center"
        alignItems="center"
        gap={'$3'}
        marginBottom={20}
        marginTop={50}
      >
        <H2 color="$color10" fontFamily={'$body'} fontWeight={'700'} textAlign="center">
          Eventos
        </H2>
        <Medal color="$color10" />
      </XStack>
      <YStack>
        <HeaderEventosCampeonatosView
          routerButton={'/(tabs)/eventos/criarEvento' as RelativePathString | ExternalPathString}
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
    </LayoutDefault>
  )
}

export default ListarEventosView
