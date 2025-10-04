import { ManterUsuarioViewProps } from '@/utils/types/user'
import { useRef, useState } from 'react'

export const ModelViewLogin = ({
  setCurrentStep,
  currentStep,
  values,
  setValues,
}: ManterUsuarioViewProps) => {
  const nomeRef = useRef<string>('')
  const emailRef = useRef<string>('')
  const senhaRef = useRef<string>('')

  const [erro, setErro] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleSubmit = () => {
    const nome = nomeRef.current
    const email = emailRef.current
    const senha = senhaRef.current

    console.log({ nome, email, senha })

    if (!nome.trim() || !email.trim() || !senha.trim()) {
      setErro('Todos os campos são obrigatórios.')
      return null
    }

    console.log('OIII 4')

    if (nome.length < 6) {
      setErro('O nome deve ter pelo menos 6 caracteres.')
      return null
    }

    console.log('OIII 1')

    if (!email.includes('@')) {
      setErro('Por favor, insira um e-mail válido.')
      return null
    }

    console.log('OIII 2')

    if (senha.length < 6) {
      setErro('A senha deve ter pelo menos 6 caracteres.')
      return null
    }

    console.log('OIII 3')

    setValues({ ...values, nome, email, senha })
    setErro(null)
    setCurrentStep(currentStep + 1)
    return true
  }

  return {
    nomeRef,
    emailRef,
    senhaRef,
    erro,
    isLoading,
    showPassword,
    values,
    setValues,
    setShowPassword,
    handleSubmit,
  }
}
