import { postUser } from '@/middleware/usuario/login'
import { useUserStore } from '@/store/UserStore'
import { UserData, UserLogin } from '@/utils/interfaces/user'
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

  const setUser = useUserStore(state => state.setUser)

  const handleLogin = async () => {
    setIsLoading(true)
    try {
      if (email === 'teste@teste.com' && password === '123456') {
        const mockUserData: UserData = {
          id: '123',
          nome: 'Usuário de Teste',
          email: email,
          ibgeCode: '4106902',
        }
        setUser(mockUserData)
        setIsLoading(false)
        router.push('/(tabs)/menu')
      } else {
        setIsLoading(false)
        setError('Senha ou e-mail inválido')
      }
      // const response = await postUser({ login: email, password });
      // if (response && response.data) {
      //   const userData: UserData = {
      //     id: response.data.id,
      //     nome: response.data.nome,
      //     email: response.data.email,
      //     ibgeCode: response.data.ibgeCode,
      //   };
      //   setUser(userData);
      //   setIsLoading(false);
      //   router.push('/(tabs)/menu');
      //   setError('')
      // } else {
      //   setIsLoading(false);
      //   setError('Senha ou e-mail inválidos. Tente novamente.');
      // }
    } catch (apiError) {
      console.error(apiError)
      setIsLoading(false)
      setError('Erro ao tentar login. Tente novamente.')
    }
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
