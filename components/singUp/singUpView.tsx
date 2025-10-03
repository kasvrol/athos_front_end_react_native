import React from 'react'
import { YStack, XStack, Button, Spinner, Text, Theme } from 'tamagui'
import { useSignupViewModel } from './signupViewModel'
import Step1 from './FirstPage/firstPage'
import Step2 from './SecondPage/secondPage'
import Step3 from './ThirdPage/thirdPage'
import { UserInformations } from '@/utils/interfaces/user'
import { RunningPlayer } from '../loading/runner'
import { router } from 'expo-router'
import { CanceledButton } from '../atoms/buttons/canceledButton'

export default function SignupScreen() {
  const {
    currentStep,
    isLoading,
    submitError,
    thereIsUser,
    values,
    isButtonDisabled,
    handleNext,
    handleBack,
    setIsLoading,
    setValues,
    setIsButtonDisabled,
  } = useSignupViewModel()

  const props: UserInformations = {
    setIsLoading,
    setValues,
    values,
    setIsButtonDisabled,
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 {...props} />
      case 2:
        return <Step2 {...props} />
      case 3:
        return <Step3 {...props} />
      default:
        return null
    }
  }

  return (
    <YStack
      flex={1}
      height="100%"
      justifyContent="center"
      padding="$4"
      gap="$2"
      backgroundColor="$background"
      alignItems="flex-start"
    >
      <YStack>
        {renderStep()}
        {isLoading && <RunningPlayer />}
      </YStack>
      <XStack width="100%" justifyContent="flex-end" marginVertical="$5">
        <CanceledButton
          disabled={isLoading}
          onPress={handleBack}
          width="50%"
          message="Voltar"
          display={currentStep === 1 && !thereIsUser ? 'none' : 'flex'}
        />
        <Button
          disabled={isLoading}
          onPress={handleBack}
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
          disabled={isLoading}
          height="$10"
          width="100%"
          minWidth="$minWidth"
          backgroundColor="$background"
          fontSize="$5"
          fontWeight="600"
          color="$color10"
          display={currentStep !== 1 || thereIsUser ? 'none' : 'flex'}
        >
          Já tem uma conta? Faça login
        </Button>
      </XStack>
    </YStack>
  )
}
