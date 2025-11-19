import { registerUser } from '@/middleware/usuario/singup'
import { esportes } from '@/mock/esportes'
import { ManterUsuarioViewProps } from '@/utils/types/user'
import { router } from 'expo-router'
import { useEffect, useState } from 'react'
import { Alert } from 'react-native'

export const ModelViewThirdPage = (props: ManterUsuarioViewProps) => {
  const [selectedSports, setSelectedSports] = useState<string[]>([])
  const [sportList, setSportList] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    setIsLoading(true)
    // const buscarEsportes = getSports()
    // if(buscarEsportes.length){
    //   setSportList(buscarEsportes.length)
    // }else{
    //   setError('Erro em buscar esportes. Por favor, tente novamente em breve.')
    // }
    setSportList(esportes)
    setIsLoading(false)
  }, [])

  const toggleSport = (sportName: string) => {
    const isSelected = selectedSports.includes(sportName)

    if (isSelected) {
      let filtrarEsportes = selectedSports.filter(name => name !== sportName)
      setSelectedSports(filtrarEsportes)
    } else {
      let selecionarEsporte = [...selectedSports, sportName]
      setSelectedSports(selecionarEsporte)
    }
  }

  const handleSubmit = async () => {
    if (selectedSports.length > 1) {
      await registerUser({ ...props.values, sportList: selectedSports }
);

      // Sucesso!
      Alert.alert("Sucesso", "Conta criada com sucesso!");
      router.replace('/login'); 
    } else {
      setError('Selecione ao menos um esporte')
      return null
    }
  }

  return {
    toggleSport,
    handleSubmit,
    setSelectedSports,
    selectedSports,
    sportList,
    isLoading,
  }
}
