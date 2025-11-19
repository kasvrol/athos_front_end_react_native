import React, { useEffect, useState } from 'react'
import { H2, YStack, XStack, Text, Spinner, Button } from 'tamagui'
import LayoutDefault from '@/components/atoms/layoutDefault'
import { CardEvento } from '@/components/organisms/cardEvento'
import { CardCampeonato } from '@/components/organisms/cardCampeonato'
import { todosEventos } from '@/mock/eventosEsportivos'
import { mockCampeonatos } from '@/mock/campeonatos'
import { Star } from '@tamagui/lucide-icons'
import { useUserStore } from '@/store/UserStore'

enum TipoRecomendacao {
  EVENTOS = 'EVENTOS',
  CAMPEONATOS = 'CAMPEONATOS',
}

export default function RecommendationsScreen() {
  const user = useUserStore(state => state.user)
  const [isLoading, setIsLoading] = useState(true)

  const [activeTab, setActiveTab] = useState<TipoRecomendacao>(TipoRecomendacao.EVENTOS)

  const [eventosRecomendados, setEventosRecomendados] = useState<typeof todosEventos>([])
  const [campeonatosRecomendados, setCampeonatosRecomendados] = useState<typeof mockCampeonatos>([])

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setEventosRecomendados(todosEventos.slice(0, 5))
      setCampeonatosRecomendados([mockCampeonatos[0]])

      setIsLoading(false)
    }, 800)
  }, [user])

  return (
    <LayoutDefault>
      {/* Cabeçalho */}
      <XStack justifyContent="center" alignItems="center" gap="$3" marginTop={50} marginBottom={10}>
        <H2 color="$color10" fontFamily="$body" fontWeight="700" textAlign="center">
          Para Você
        </H2>
        <Star color="$color10" fill="currentColor" />
      </XStack>

      <XStack
        width={'100%'}
        alignItems="center"
        justifyContent="center"
        gap={'$2'}
        marginBottom="$4"
      >
        <Button
          backgroundColor={activeTab === TipoRecomendacao.EVENTOS ? '$color9' : '$color6'}
          borderWidth={1}
          borderRadius={'$4'}
          borderColor={'$color5'}
          width={'45%'}
          height={'$9'}
          fontSize={'$4'}
          fontWeight={'500'}
          color={'$color1'}
          onPress={() => setActiveTab(TipoRecomendacao.EVENTOS)}
        >
          EVENTOS
        </Button>
        <Button
          backgroundColor={activeTab === TipoRecomendacao.CAMPEONATOS ? '$color9' : '$color6'}
          borderWidth={1}
          borderRadius={'$4'}
          borderColor={'$color5'}
          width={'45%'}
          height={'$9'}
          fontSize={'$4'}
          fontWeight={'500'}
          color={'$color1'}
          onPress={() => setActiveTab(TipoRecomendacao.CAMPEONATOS)}
        >
          CAMPEONATOS
        </Button>
      </XStack>

      {isLoading ? (
        <YStack flex={1} justifyContent="center" alignItems="center" height={300}>
          <Spinner size="large" color="$color9" />
          <Text color="$color" marginTop="$4">
            Carregando recomendações...
          </Text>
        </YStack>
      ) : (
        <YStack gap="$4" paddingBottom="$8">
          {activeTab === TipoRecomendacao.EVENTOS && (
            <YStack gap="$3">
              {eventosRecomendados.length > 0 ? (
                eventosRecomendados.map((evento, index) => <CardEvento key={index} {...evento} />)
              ) : (
                <Text color="$color5" textAlign="center" marginTop="$4">
                  Nenhum evento recomendado encontrado.
                </Text>
              )}
            </YStack>
          )}

          {activeTab === TipoRecomendacao.CAMPEONATOS && (
            <YStack gap="$3">
              {campeonatosRecomendados.length > 0 ? (
                campeonatosRecomendados.map(camp => (
                  <CardCampeonato key={camp.id} campeonato={camp} />
                ))
              ) : (
                <Text color="$color5" textAlign="center" marginTop="$4">
                  Nenhum campeonato recomendado encontrado.
                </Text>
              )}
            </YStack>
          )}
        </YStack>
      )}
    </LayoutDefault>
  )
}
