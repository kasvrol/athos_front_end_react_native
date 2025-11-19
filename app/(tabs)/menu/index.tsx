import React from 'react'
import { YStack, ListItem, Separator, Text, XStack, H2 } from 'tamagui'
import { ExternalPathString, RelativePathString, useRouter } from 'expo-router'
import { History, Bell, User, Users } from '@tamagui/lucide-icons'
import LayoutDefault from '@/components/atoms/layoutDefault'

export default function MenuScreen() {
  const router = useRouter()

  const handleNavigation = (path: RelativePathString | ExternalPathString) => {
    router.push(path)
  }

  return (
    <LayoutDefault>
      <YStack flex={1} paddingTop="$4" gap="$3" alignItems="center">
        <XStack
          justifyContent="center"
          alignItems="center"
          gap={'$3'}
          marginBottom={20}
          marginTop={50}
        >
          <H2 color="$color10" fontFamily={'$body'} fontWeight={'700'} textAlign="center">
            Menu
          </H2>
        </XStack>

        <ListItem
          hoverTheme
          pressTheme
          title="Perfil"
          icon={<User size="$5" color="$colorFocus" />}
          onPress={() =>
            handleNavigation(
              '/(tabs)/menu/visualizarPerfil' as RelativePathString | ExternalPathString,
            )
          }
          paddingVertical="$3"
          paddingHorizontal="$4"
          backgroundColor="$background"
          borderBottomWidth={1}
          borderColor="$borderColor"
        />

        <ListItem
          hoverTheme
          pressTheme
          title="Minhas Equipes"
          icon={<Users size="$5" color="$colorFocus" />}
          onPress={() =>
            handleNavigation(
              '/(tabs)/menu/minhasEquipes' as RelativePathString | ExternalPathString,
            )
          }
          paddingVertical="$3"
          paddingHorizontal="$4"
          backgroundColor="$background"
          borderBottomWidth={1}
          borderColor="$borderColor"
        />

        <ListItem
          hoverTheme
          pressTheme
          title="Histórico de Jogos"
          icon={<History size="$5" color="$colorFocus" />}
          onPress={() =>
            handleNavigation('/(tabs)/menu/historico' as RelativePathString | ExternalPathString)
          }
          paddingVertical="$3"
          paddingHorizontal="$4"
          backgroundColor="$background"
          borderBottomWidth={1}
          borderColor="$borderColor"
        />

        <ListItem
          hoverTheme
          pressTheme
          title="Notificações"
          icon={<Bell size="$5" color="$colorFocus" />}
          onPress={() =>
            handleNavigation('/(tabs)/menu/notificacoes' as RelativePathString | ExternalPathString)
          }
          paddingVertical="$3"
          paddingHorizontal="$4"
          backgroundColor="$background"
          borderBottomWidth={1}
          borderColor="$borderColor"
        />
      </YStack>
    </LayoutDefault>
  )
}
