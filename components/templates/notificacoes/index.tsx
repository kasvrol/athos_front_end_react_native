import React, { useEffect, useState } from 'react'
import { YStack, XStack, Text, Button, ScrollView, H3 } from 'tamagui'
import LayoutDefault from '@/components/atoms/layoutDefault'
import { Bell, CheckCircle } from '@tamagui/lucide-icons'
import * as Notifications from 'expo-notifications'
import { useNotificationStore } from '@/store/NotificationStore'

interface NotificacaoItem {
  id: string
  titulo: string
  mensagem: string
  data: string
}

export default function NotificacoesScreen() {
  const { notifications, fetchNotifications } = useNotificationStore()
 
  useEffect(() => {
    fetchNotifications()
  }, [])

  return (
    <LayoutDefault>
      <YStack gap="$4" marginTop={50}>
        <XStack justifyContent="center" alignItems="center" gap="$3">
          <H3 color="$color10" fontWeight={'700'}>
            Notificações
          </H3>
          <Bell color="$color10" />
        </XStack>

         <YStack padding="$4" gap="$2">
        {notifications.map(notif => {
          return (
            <YStack gap="$3">
            <YStack
              padding="$3"
              borderWidth={1}
              borderColor="$borderColor"
              borderRadius="$4"
              backgroundColor="$backgroundPress"
            ><Text key={notif.id}>{notif.titulo}: {notif.mensagem}</Text> </YStack></YStack>)
        })}
      </YStack>
      </YStack>
    </LayoutDefault>
  )
}
