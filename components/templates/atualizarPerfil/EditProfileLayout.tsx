import React from 'react'
import { YStack, XStack, Button, ScrollView } from 'tamagui'
import { CanceledButton } from '@/components/atoms/buttons/canceledButton'
import { BasketballLoading } from '@/components/atoms/loading/basketball'
import { router } from 'expo-router'

interface EditLayoutProps {
  children: React.ReactNode
  onPress: () => void
  onBack?: () => void
  isLoading: boolean
  isLastStep?: boolean
}

export default function EditProfileLayout(props: EditLayoutProps) {
  if (props.isLoading) {
    return (
      <YStack justifyContent="center" flex={1}>
        <BasketballLoading />
      </YStack>
    )
  }

  return (
    <ScrollView flex={1} marginBottom={20}>
      <YStack flex={1}>{props.children}</YStack>

      <XStack width="100%" justifyContent="flex-end" marginVertical="$5">
        <CanceledButton
          disabled={props.isLoading}
          onPress={props.onBack || (() => router.back())}
          width="48%"
          message="Voltar"
          display={'flex'}
        />
        <Button
          disabled={props.isLoading}
          onPress={props.onPress}
          height="$10"
          width="48%"
          minWidth="$minWidth"
          backgroundColor="$color7"
          fontSize="$5"
          fontWeight="600"
        >
          {props.isLastStep ? 'Salvar' : 'Próximo'}
        </Button>
      </XStack>
    </ScrollView>
  )
}
