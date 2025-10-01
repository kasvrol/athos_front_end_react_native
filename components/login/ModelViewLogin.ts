import { postUser } from '@/middleware/usuario/login'
import { UserLogin } from '@/utils/interfaces/user'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { useTheme } from 'tamagui'

export const ModelViewLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const theme = useTheme()

  const handleLogin = async () => {
    setError('')
    setIsLoading(true)
    // const response = await postUser({login:email, password })
    // console.log(response)
    // if(response){
    //   setIsLoading(false);
    //   router.push('home/id=1111')
    // }
    setIsLoading(false)
    setError('Senha ou e-mail inválido')
  }

  const isButtonDisabled = !email || !password || isLoading

  return {
    isButtonDisabled,
    password,
    showPassword,
    email,
    error,
    router,
    isLoading,
    theme,
    handleLogin,
    setShowPassword,
    setEmail,
    setPassword,
  }
}
