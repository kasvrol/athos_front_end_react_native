import { esportes } from '@/mock/esportes'
import { useEffect, useState } from 'react'

export const ModelViewThirdPage = () => {
  const [selectedSports, setSelectedSports] = useState<string[]>([])
  const [sportList, setSportList] = useState<any[]>([])

  useEffect(() => {
    // const buscarEsportes = getSports()
    // if(buscarEsportes.length){
    //   setSportList(buscarEsportes.length)
    // }else{
    //   setErrorMap('Erro em buscar esportes. Por favor, tente novamente em breve.')
    // }
    setSportList(esportes)
  }, [])

  const toggleSport = (sportName: string) => {
    const isSelected = selectedSports.includes(sportName)

    if (isSelected) {
      setSelectedSports(current => current.filter(name => name !== sportName))
    } else {
      setSelectedSports(current => [...current, sportName])
    }
  }

  // const isButtonDisabled = isLoading

  return {
    toggleSport,
    selectedSports,
    sportList,
  }
}
