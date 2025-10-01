import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signupSchema, SignupFormData, step1Schema, step2Schema, step3Schema } from './SignupModel'

export function useSignupViewModel() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange', // Valida ao mudar o campo
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      selectedSports: [],
    },
  })

  const validateStep = async (step: number) => {
    let schema
    if (step === 1) schema = step1Schema
    else if (step === 2) schema = step2Schema
    else if (step === 3) schema = step3Schema
    else return false

    // Trigger valida apenas os campos do schema da etapa atual
    return await form.trigger(Object.keys(schema.shape) as (keyof SignupFormData)[])
  }

  const handleNext = async () => {
    setSubmitError(null)
    const isStepValid = await validateStep(currentStep)

    if (!isStepValid) return

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      // Na última etapa, o botão aciona o submit
      await form.handleSubmit(onSubmit)()
    }
  }

  const handleBack = () => {
    setSubmitError(null)
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true)
    setSubmitError(null)
    console.log('Dados do formulário:', data)

    try {
      // Simula chamada de API
      await new Promise(resolve => setTimeout(resolve, 2000))
      alert('Cadastro realizado com sucesso!')
      form.reset()
      setCurrentStep(1)
    } catch (error) {
      setSubmitError('Ocorreu um erro ao enviar o formulário. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    form,
    currentStep,
    isLoading,
    submitError,
    handleNext,
    handleBack,
  }
}
