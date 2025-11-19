import LayoutDefault from '@/components/atoms/layoutDefault'
import { BasketballLoading } from '@/components/atoms/loading/basketball'
import { CardEvento } from '@/components/organisms/cardEvento'
import HeaderEventosCampeonatosView from '@/components/organisms/headerEventosCampeonatos'
import { todosEventos } from '@/mock/eventosEsportivos'
import { Medal } from '@tamagui/lucide-icons'
import { ExternalPathString, RelativePathString } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { H2, Text, XStack, YStack } from 'tamagui'
import { Modal } from 'react-native'
import { Buscador } from '@/components/organisms/filter'

function ListarEventosView() {
  const [todos, setTodos] = useState<any[]>([])
  const [eventosFiltrados, setEventosFiltrados] = useState<any[]>([])

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showFilter, setShowFilter] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    setTodos(todosEventos)
    setEventosFiltrados(todosEventos)
    setIsLoading(false)
  }, [])

  const handleFiltrar = (filtros: { data?: string; locais: string[]; esportes: string[] }) => {
    setIsLoading(true)

    const filtrados = todos.filter(evento => {
      const matchEsporte =
        filtros.esportes.length === 0 || filtros.esportes.includes(evento.esporte)

      const matchLocal =
        filtros.locais.length === 0 ||
        filtros.locais.some(bairro => evento.endereco.toLowerCase().includes(bairro.toLowerCase()))

      const matchData = !filtros.data || evento.data === filtros.data

      return matchEsporte && matchLocal && matchData
    })

    setEventosFiltrados(filtrados)
    setShowFilter(false)
    setIsLoading(false)
  }

  const handleLimpar = () => {
    setEventosFiltrados(todos)
    setShowFilter(false)
  }

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

      <YStack zIndex={10}>
        <HeaderEventosCampeonatosView
          routerButton={'/(tabs)/eventos/criarEvento' as RelativePathString | ExternalPathString}
          titleButton="CRIAR EVENTO"
          onToggleSearch={() => setShowFilter(true)}
        />
      </YStack>

      <Modal
        animationType="fade"
        transparent={true}
        visible={showFilter}
        onRequestClose={() => setShowFilter(false)}
      >
        <YStack
          flex={1}
          justifyContent="center"
          alignItems="center"
          backgroundColor="rgba(0,0,0,0.7)"
          padding="$4"
        >
          <Buscador onFiltrar={handleFiltrar} onLimpar={handleLimpar} />

          <Text onPress={() => setShowFilter(false)} color="white" marginTop="$4" fontWeight="bold">
            Fechar
          </Text>
        </YStack>
      </Modal>

      {isLoading ? (
        <BasketballLoading />
      ) : (
        <YStack flex={1}>
          {eventosFiltrados.length > 0 ? (
            eventosFiltrados.map((evento, index) => <CardEvento key={index} {...evento} />)
          ) : (
            <Text textAlign="center" marginTop="$4" fontSize="$5" color="$color">
              Nenhum evento encontrado com esses filtros.
            </Text>
          )}
        </YStack>
      )}
    </LayoutDefault>
  )
}

export default ListarEventosView
