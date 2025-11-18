import React, { useEffect, useState } from 'react'
import { H2, ScrollView, Text, XStack, YStack } from 'tamagui'
import LayoutComponent from '@/components/atoms/layout'
import { mockCampeonatos } from '@/mock/campeonatos'
import { BasketballLoading } from '@/components/atoms/loading/basketball'
import HeaderEventosCampeonatosView from '@/components/organisms/headerEventosCampeonatos'
import { Trophy } from '@tamagui/lucide-icons'
import { ExternalPathString, RelativePathString } from 'expo-router'
import { Campeonato } from '@/utils/interfaces/campeonatos'
import { CardCampeonato } from '@/components/organisms/cardCampeonato'

export default function ListarCampeonatos() {
  const [campeonatos, setCampeonatos] = useState<Campeonato[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    setIsLoading(true)
    setError('')
    setCampeonatos(mockCampeonatos)
    setIsLoading(false)
  }, [])

  return (
    <LayoutComponent>
      <YStack flex={1}>
        <XStack justifyContent="center" alignItems="center" gap={'$3'} marginBottom={20}>
          <H2 color="$color10" fontFamily={'$body'} fontWeight={'700'} textAlign="center">
            Campeonatos
          </H2>
          <Trophy color="$color10" />
        </XStack>
        <HeaderEventosCampeonatosView
          routerButton={'/(tabs)/campeonatos/criarCampeonato' as RelativePathString | ExternalPathString}
          titleButton="CRIAR CAMPEONATO"
        />

        {isLoading && <BasketballLoading />}

        {error && <Text color="$borderColorError">{error}</Text>}

        {!isLoading && !error && (
          <ScrollView>
            {campeonatos && campeonatos.length > 0 ? (
              campeonatos.map(camp => <CardCampeonato key={camp.id} campeonato={camp} />)
            ) : (
              <Text color="$color" fontSize="$5" textAlign="center">
                Nenhum campeonato encontrado.
              </Text>
            )}
          </ScrollView>
        )}
      </YStack>
    </LayoutComponent>
  )
}
