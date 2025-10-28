import React from 'react'
import { Text} from 'tamagui'
import { ModelViewThirdPage } from './ModelViewManterUsuarioStep3'
import { ManterUsuarioViewProps } from '@/utils/types/user'
import SignupScreen from '@/components/singUp/singUpView'
import CheckEsportesScreen from '@/components/atoms/checkEsportes/CheckEsportesScreen'

export default function ManterUsuarioStep3Screen({
  setCurrentStep,
  currentStep,
  values,
  setValues,
}: ManterUsuarioViewProps) {
  const { selectedSports, sportList, handleSubmit, isLoading, setSelectedSports } = ModelViewThirdPage({
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
      <CheckEsportesScreen setSelectedSports={setSelectedSports} selectedSports={selectedSports} sportList={sportList}/>
    </SignupScreen>
  )
}
