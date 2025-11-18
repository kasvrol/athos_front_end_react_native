import React, { useEffect, useState } from 'react'
import { YStack, XStack, Text, Button, ScrollView, H3 } from 'tamagui'
import LayoutDefault from '@/components/atoms/layoutDefault'
import { Bell, CheckCircle } from '@tamagui/lucide-icons'
import * as Notifications from 'expo-notifications'

interface NotificacaoItem {
  id: string
  titulo: string
  mensagem: string
  data: string
}

export default function NotificacoesScreen() {
  const [listaNotificacoes, setListaNotificacoes] = useState<NotificacaoItem[]>([])

  async function testarNotificacaoSistema() {
    try {
      console.log("Tentando agendar notificação...");
      
      // Verifica permissões antes de agendar
      const settings = await Notifications.getPermissionsAsync();
      if (!settings.granted && !settings.ios?.status) {
        console.log("Permissão de notificação NÃO concedida!");
        alert("Você precisa permitir notificações nas configurações do celular.");
        return;
      }

      const id = await Notifications.scheduleNotificationAsync({
        content: {
          title: "🏀 Partida Confirmada!",
          body: 'Sua equipe "Trovão Azul" joga amanhã às 19h.',
          sound: true, 
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
          seconds: 2,
          repeats: false,
        },
      });
      console.log("Notificação agendada com ID:", id);
      alert("Agendado! Aguarde 2 segundos.");
    } catch (error) {
      console.error("Erro ao agendar:", error);
      alert("Erro ao agendar notificação (veja o console)");
    }
  }

  return (
    <LayoutDefault>
      <YStack gap="$4" marginTop={50}>
        <XStack justifyContent="center" alignItems="center" gap="$3">
            <H3 color="$color10" fontWeight={'700'}>Notificações</H3>
            <Bell color="$color10" />
        </XStack>

        <Button 
            onPress={testarNotificacaoSistema}
            backgroundColor="$color9" 
            color="$background"
            fontWeight="bold"
        >
            TESTAR NOTIFICAÇÃO DO SISTEMA (2s)
        </Button>

        <Text fontSize="$5" fontWeight="600" marginTop="$4">
            Recentes
        </Text>

        <ScrollView>
            <YStack gap="$3">
                <YStack 
                    padding="$3" 
                    borderWidth={1} 
                    borderColor="$borderColor" 
                    borderRadius="$4"
                    backgroundColor="$backgroundPress"
                >
                    <XStack justifyContent="space-between" marginBottom="$2">
                        <Text fontWeight="bold" color="$color9">Convite de Equipe</Text>
                        <Text fontSize="$2" color="$color5">10:30</Text>
                    </XStack>
                    <Text color="$color">Você foi convidado para o time "Os Velozes".</Text>
                </YStack>

                <YStack 
                    padding="$3" 
                    borderWidth={1} 
                    borderColor="$borderColor" 
                    borderRadius="$4"
                    backgroundColor="$backgroundPress"
                >
                    <XStack justifyContent="space-between" marginBottom="$2">
                        <Text fontWeight="bold" color="$color9">Campeonato Iniciado</Text>
                        <Text fontSize="$2" color="$color5">Ontem</Text>
                    </XStack>
                    <Text color="$color">A Copa Athos de Futebol 7 começou!</Text>
                </YStack>
            </YStack>
        </ScrollView>
      </YStack>
    </LayoutDefault>
  )
}