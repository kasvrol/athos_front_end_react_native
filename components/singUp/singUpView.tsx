import React, { Dispatch, ReactNode } from 'react'
import { YStack, XStack, Button } from 'tamagui'
import { useSignupViewModel } from './signupViewModel'
import { UserInformations } from '@/utils/interfaces/user'
import { RunningPlayer } from '../loading/runner'
import { router } from 'expo-router'
import { CanceledButton } from '../atoms/buttons/canceledButton'
import { SingUpViewProps } from '@/utils/types/user'

export default function SignupScreen(props: SingUpViewProps) {
  const { currentStep, isThereUser, handleNext, handleBack, setIsButtonDisabled } =
    useSignupViewModel({
      onPress: props.onPress,
      values: props.values,
      setValues: props.setValues,
      currentStep: props.currentStep,
      setCurrentStep: props.setCurrentStep,
    })

  return (
    <YStack>
      <YStack>
        {props.children}
        {props.isLoading && <RunningPlayer />}
      </YStack>
      <XStack width="100%" justifyContent="flex-end" marginVertical="$5">
        <CanceledButton
          disabled={props.isLoading}
          onPress={handleBack}
          width="50%"
          message="Voltar"
          display={currentStep === 1 && !isThereUser ? 'none' : 'flex'}
        />
        <Button
          disabled={props.isLoading}
          onPress={handleNext}
          height="$10"
          width="50%"
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
