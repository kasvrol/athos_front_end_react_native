import { postInformationUser } from '@/middleware/usuario/singup'
import { esportes } from '@/mock/esportes'
import { ManterUsuarioViewProps } from '@/utils/types/user'
import { useEffect, useState } from 'react'

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
    //   setErrorMap('Erro em buscar esportes. Por favor, tente novamente em breve.')
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

  const handleSubmit = () => {
    if (selectedSports.length > 1) {
      return { ...props.values, sportList: selectedSports }
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
