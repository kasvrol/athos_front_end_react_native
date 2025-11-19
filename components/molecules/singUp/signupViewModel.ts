import { useEffect, useState } from 'react'
import { SingUpModelViewProps } from '@/utils/types/user'
import { postInformationUser } from '@/middleware/usuario/singup'
import { router } from 'expo-router'

export function useSignupViewModel({
  onPress,
  setCurrentStep,
  currentStep,
}: SingUpModelViewProps) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (user: any) => {
    const result = await postInformationUser(user)
    return result
  }

  const handleNext = async () => {
    setSubmitError(null)

    if (currentStep < 3) {
      onPress()
      return
    }

    if (currentStep == 3) {
      const result = onPress()
      if (result) {
        await handleSubmit({...result })
      }
      return
    }
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
    isButtonDisabled,
    setIsButtonDisabled,
    handleNext,
    handleBack,
  }
}
