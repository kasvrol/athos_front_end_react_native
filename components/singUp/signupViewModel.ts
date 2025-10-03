import { useState } from 'react'

export function useSignupViewModel() {
  const [currentStep, setCurrentStep] = useState(1)
  const [thereIsUser, setThereIsUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [values, setValues] = useState(null)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleNext = async () => {
    setSubmitError(null)
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
      return null
    } 

    //criarUsuario
    //atualizar usuario
  }

  const handleBack = () => {
    setSubmitError(null)
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return {
    currentStep,
    isLoading,
    submitError,
    values,
    thereIsUser,
    isButtonDisabled,
    setIsButtonDisabled,
    handleNext,
    handleBack,
    setIsLoading,
    setValues,
  }
}
