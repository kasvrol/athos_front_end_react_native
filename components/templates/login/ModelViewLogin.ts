import { useState } from 'react'
import { useRouter } from 'expo-router'
import { postUser, getUserProfile } from '@/middleware/usuario/login'
import { getAllEsportes } from '@/middleware/esportes/service'
import { useUserStore } from '@/store/UserStore'
import { useSportStore } from '@/store/SportStore'
import { useLocalStore } from '@/store/LocalStore'
import { getBairros } from '@/middleware/usuario/singup'

export function useLoginModelView() {
  const router = useRouter()
  const { setUser, setToken } = useUserStore()
  const { setSports } = useSportStore()
  const { setBairros } = useLocalStore()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true)
    try {
      const tokenResponse = await postUser({ email, password })
      const tokenString = typeof tokenResponse === 'string' ? tokenResponse : tokenResponse.token
      setToken(tokenString)

      const userProfile = await getUserProfile()
      setUser(userProfile)

      const fetchEsportesPromise = getAllEsportes()
        .then(data => setSports(data))
        .catch(err => console.log("Erro ao carregar esportes", err))

      let fetchBairrosPromise = Promise.resolve()
      
      const ibgeCode = userProfile.ibge || userProfile.endereco?.ibge 
      
      if (ibgeCode) {
        fetchBairrosPromise = getBairros(ibgeCode)
          .then(data => setBairros(data))
          .catch(err => console.log("Erro ao carregar bairros", err))
      }

      await Promise.all([fetchEsportesPromise, fetchBairrosPromise])

      router.replace('/(tabs)/recomendacoes')
    } catch (error) {
      console.error(error)
      alert('Email ou senha inválidos ou erro no servidor.')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    handleLogin
  }
}