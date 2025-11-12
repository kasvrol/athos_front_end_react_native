import React, { Dispatch, ReactNode } from 'react'
import { YStack, XStack, Button, Text } from 'tamagui'
import { useSignupViewModel } from './signupViewModel'
import { UserInformations } from '@/utils/interfaces/user'
import { router } from 'expo-router'
import { SingUpViewProps } from '@/utils/types/user'
import { CanceledButton } from '@/components/atoms/buttons/canceledButton'
import { BasketballLoading } from '@/components/atoms/loading/basketball'

export default function SignupScreen(props: SingUpViewProps) {
  const { currentStep, isThereUser, handleNext, handleBack, setIsButtonDisabled } =
    useSignupViewModel({
      onPress: props.onPress,
      values: props.values,
      setValues: props.setValues,
      currentStep: props.currentStep,
      setCurrentStep: props.setCurrentStep,
    })

  if (props.isLoading) {
    return (
      <YStack justifyContent="center">
        <BasketballLoading />
      </YStack>
    )
  }

  return (
    <YStack>
      <YStack>{props.children}</YStack>
      <XStack width="100%" justifyContent="flex-end" marginVertical="$5">
        <CanceledButton
          disabled={props.isLoading}
          onPress={handleBack}
          width="48%"
          message="Voltar"
          display={currentStep === 1 && !isThereUser ? 'none' : 'flex'}
        />
        <Button
          disabled={props.isLoading}
          onPress={handleNext}
          height="$10"
          width="48%"
          minWidth="$minWidth"
          backgroundColor="$backgroundFocus"
          fontSize="$5"
          fontWeight="600"
        >
          Próximo
        </Button>
      </XStack>
      <XStack>
        <Button
          disabled={props.isLoading}
          height="$10"
          width="100%"
          minWidth="$minWidth"
          backgroundColor="$background"
          fontSize="$5"
          fontWeight="600"
          color="$color10"
          onPress={() => router.push('/login')}
          display={currentStep !== 1 || isThereUser ? 'none' : 'flex'}
        >
          Já tem uma conta? Faça login
        </Button>
      </XStack>
    </YStack>
  )
}
