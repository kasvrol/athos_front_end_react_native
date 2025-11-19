import React from 'react'
import { YStack, XStack, Text, Avatar, Button, H2, ScrollView, Separator } from 'tamagui'
import { User, Mail, MapPin, Trophy, Edit3 } from '@tamagui/lucide-icons'
import { useUserStore } from '@/store/UserStore'
import { useRouter } from 'expo-router'
import LayoutDefault from '@/components/atoms/layoutDefault'

export default function VisualizarPerfilTemplate() {
  const user = useUserStore(state => state.user)
  const router = useRouter()

  const userData = {
    nome: 'Usuário Athos',
    email: user?.email || 'usuario@athos.com',
    bairros: ['Centro', 'Água Verde'], // Exemplo
    esportes: ['Futebol', 'Basquete'], // Exemplo
  }

  return (
    <LayoutDefault>
      <YStack alignItems="center" gap="$4" marginTop={50} paddingBottom="$8">
        <YStack alignItems="center" gap="$3">
          <H2 color="$color10" fontWeight="bold">
            {userData.nome}
          </H2>
        </YStack>

        <Separator width="90%" borderColor="$borderColor" />

        <YStack width="100%" gap="$4" paddingHorizontal="$4">
          <XStack gap="$3" alignItems="center">
            <Mail color="$colorFocus" size={24} />
            <YStack>
              <Text color="$color5" fontSize="$3">
                E-mail
              </Text>
              <Text color="$color" fontSize="$5">
                {userData.email}
              </Text>
            </YStack>
          </XStack>

          <XStack gap="$3" alignItems="center">
            <MapPin color="$colorFocus" size={24} />
            <YStack flex={1}>
              <Text color="$color5" fontSize="$3">
                Bairros de Interesse
              </Text>
              <Text color="$color" fontSize="$5" flexWrap="wrap">
                {userData.bairros.join(', ')}
              </Text>
            </YStack>
          </XStack>

          <XStack gap="$3" alignItems="center">
            <Trophy color="$colorFocus" size={24} />
            <YStack flex={1}>
              <Text color="$color5" fontSize="$3">
                Esportes Favoritos
              </Text>
              <Text color="$color" fontSize="$5" flexWrap="wrap">
                {userData.esportes.join(', ')}
              </Text>
            </YStack>
          </XStack>
        </YStack>

        <Separator width="90%" borderColor="$borderColor" />

        <Button
          icon={Edit3}
          backgroundColor="$color9"
          color="$background"
          fontWeight="bold"
          width="90%"
          minHeight={'$minWidth'}
          minWidth={'$minWidth'}
          onPress={() => router.push('/(tabs)/menu/atualizarPerfil?id=${id}')}
          fontSize={'$4'}
        >
          EDITAR PERFIL
        </Button>
      </YStack>
    </LayoutDefault>
  )
}
