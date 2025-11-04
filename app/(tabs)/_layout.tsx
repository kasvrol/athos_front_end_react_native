// app/(tabs)/_layout.tsx
import React from 'react'
import { Tabs } from 'expo-router'
import { BarChart, CalendarSearch, Home, Menu, Star, Trophy } from '@tamagui/lucide-icons'

export default function TabLayout() {
  const activeColor = '#FFD700'
  const inactiveColor = '#FFFFFF'
  const backgroundColor = '#005A9C'

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: backgroundColor,
          borderTopColor: '#E0E0E0',
          borderTopWidth: 1,
        },
        tabBarInactiveTintColor: inactiveColor,
        tabBarActiveTintColor: activeColor,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="events"
        options={{
          title: 'Eventos',
          tabBarIcon: ({ color, size }) => <CalendarSearch color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="championships"
        options={{
          title: 'Campeonatos',
          tabBarIcon: ({ color, size }) => <Trophy color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="recommendations"
        options={{
          title: 'Recomendações',
          tabBarIcon: ({ color, size }) => <Star color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color, size }) => <Menu color={color} size={size} />,
        }}
      />
    </Tabs>
  )
}
