import { useEffect, useState } from 'react'
import { SingUpModelViewProps } from '@/utils/types/user'

export function useSignupViewModel({
  onPress,
  values,
  setValues,
  setCurrentStep,
  currentStep,
}: SingUpModelViewProps) {
  const [isThereUser, setIsThereUser] = useState(null)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleNext = async () => {
    setSubmitError(null)

    if (currentStep < 3) {
      onPress()
      return
    }

    if (currentStep == 3 && isThereUser) {
      //atualizar usuario(values)
    }

    if (currentStep == 3 && !isThereUser) {
      //criarUsuario(values)
    }

    return
  }

  const handleBack = () => {
    setSubmitError(null)
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return {
    currentStep,
    submitError,
    isThereUser,
    isButtonDisabled,
    setIsButtonDisabled,
    handleNext,
    handleBack,
  }
}
