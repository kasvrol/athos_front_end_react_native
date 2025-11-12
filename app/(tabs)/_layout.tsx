// app/(tabs)/_layout.tsx
import React from 'react'
import { Tabs } from 'expo-router'
import { CalendarSearch, Menu, Star, Trophy } from '@tamagui/lucide-icons'
import { useTheme, Text, YStack } from 'tamagui'

export default function TabLayout() {
  const theme = useTheme()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.background.val,
          borderTopColor: theme.borderColor.val,
          borderTopWidth: 3,
          height: 80,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.color9.val,
        tabBarInactiveTintColor: theme.color6.val,
      }}
    >
      <Tabs.Screen
        name="eventos"
        options={{
          title: 'Eventos',
          tabBarIcon: ({ color, size }) => (
            <YStack alignItems="center" justifyContent="center">
              <CalendarSearch color={color} size={size} />
            </YStack>
          ),
        }}
      />
      <Tabs.Screen
        name="campeonatos"
        options={{
          title: 'Campeonatos',
          tabBarIcon: ({ color, size }) => (
            <YStack alignItems="center" justifyContent="center">
              <Trophy color={color} size={size} />
            </YStack>
          ),
        }}
      />
      <Tabs.Screen
        name="recomendacoes"
        options={{
          title: 'Recomendações',
          tabBarIcon: ({ color, size }) => (
            <YStack alignItems="center" justifyContent="center">
              <Star color={color} size={size} />
            </YStack>
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <YStack alignItems="center" justifyContent="center">
              <Menu color={color} size={size} />
            </YStack>
          ),
        }}
      />
    </Tabs>
  )
}
