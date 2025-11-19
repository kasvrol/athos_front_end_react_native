import React from 'react'
import { ScrollView, Text, YStack } from 'tamagui'
import { ModelViewThirdPage } from './ModelViewManterUsuarioStep3'
import { ManterUsuarioViewProps } from '@/utils/types/user'
import CheckEsportesScreen from '@/components/molecules/checkEsportes/CheckEsportesScreen'
import SignupScreen from '@/components/molecules/singUp/singUpView'

export default function ManterUsuarioStep3Screen({
  setCurrentStep,
  currentStep,
  values,
  setValues,
}: ManterUsuarioViewProps) {
  const { selectedSports, sportList, handleSubmit, isLoading, setSelectedSports } =
    ModelViewThirdPage({
      setCurrentStep,
      currentStep,
      values,
      setValues,
    })

  const props = {
    onPress: handleSubmit,
    isLoading,
    values,
    setValues,
    setCurrentStep,
    currentStep,
  }

  return (
    <SignupScreen {...props}>
      <Text color="$colorFocus" fontWeight="600" mb="$2" fontSize="$6" textAlign="center">
        Selecione ao menos um esporte do seu interesse
      </Text>
      <ScrollView
        height={250}
        nestedScrollEnabled={true}
        borderColor="$borderColor"
        borderRadius="$4"
        borderWidth={2}
        padding={'$2'}
      >
        <CheckEsportesScreen
          setSelectedSports={setSelectedSports}
          selectedSports={selectedSports}
        />
      </ScrollView>
    </SignupScreen>
  )
}
