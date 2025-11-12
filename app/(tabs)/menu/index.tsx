import React from 'react'
import { YStack, ListItem, Separator, Text } from 'tamagui'
import { ExternalPathString, RelativePathString, useRouter } from 'expo-router'
import { History, Bell, User } from '@tamagui/lucide-icons'
import LayoutDefault from '@/components/atoms/layoutDefault'

export default function MenuScreen() {
  const router = useRouter()

  const handleNavigation = (path: RelativePathString | ExternalPathString) => {
    router.push(path)
  }

  return (
    <LayoutDefault>
      <YStack flex={1} paddingTop="$4" gap="$3" alignItems="center">
        <Text
          fontSize="$7"
          fontWeight="bold"
          color="$color10"
          marginBottom="$4"
          paddingHorizontal="$4"
        >
          Menu
        </Text>

        <ListItem
          hoverTheme
          pressTheme
          title="Perfil"
          icon={<User size="$5" color="$colorFocus" />}
          onPress={() =>
            handleNavigation('/visualizarPerfil' as RelativePathString | ExternalPathString)
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
          onPress={() => handleNavigation('/historico' as RelativePathString | ExternalPathString)}
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
            handleNavigation('/notificacoes' as RelativePathString | ExternalPathString)
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
