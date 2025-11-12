import React from 'react'
import { YStack, H2, Text } from 'tamagui'
import LayoutComponent from '@/components/atoms/layout'

export default function RecommendationsScreen() {
  return (
    <LayoutComponent>
      <YStack flex={1} alignItems="center" justifyContent="center" padding="$4" space="$3">
        <H2 color="$color10">Recomendações</H2>
        <Text color="$color" fontSize="$5" textAlign="center">
          Esta tela exibirá recomendações personalizadas. (Conteúdo a implementar)
        </Text>
      </YStack>
    </LayoutComponent>
  )
}
