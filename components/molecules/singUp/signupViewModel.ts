import { useEffect, useState } from 'react'
import { SingUpModelViewProps } from '@/utils/types/user'
import { postInformationUser } from '@/middleware/usuario/singup'
import { router } from 'expo-router'

export function useSignupViewModel({
  onPress,
  values,
  setValues,
  setCurrentStep,
  currentStep,
}: SingUpModelViewProps) {
  const [isThereUser, setIsThereUser] = useState<any>(null)
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

    if (currentStep == 3 && isThereUser) {
      const result = onPress()
      if (result) {
        await handleSubmit({ ...isThereUser, ...result })
      }
      return
    }

    if (currentStep == 3 && !isThereUser) {
      const result = onPress()
      // if(result){
      //   await handleSubmit(result)
      // }
      router.push('/criarEvento')
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
