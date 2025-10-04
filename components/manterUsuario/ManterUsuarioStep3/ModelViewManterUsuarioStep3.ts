import { esportes } from '@/mock/esportes'
import { ManterUsuarioViewProps } from '@/utils/types/user'
import { useEffect, useState } from 'react'

export const ModelViewThirdPage = (props: ManterUsuarioViewProps) => {
  const [selectedSports, setSelectedSports] = useState<string[]>([])
  const [sportList, setSportList] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

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
      props.setValues({ ...props.values, sportList: filtrarEsportes })
    } else {
      let selecionarEsporte = [...selectedSports, sportName]
      setSelectedSports(selecionarEsporte)
      props.setValues({ ...props.values, sportList: selecionarEsporte })
    }
  }

  const handleSubmit = () =>{ return null}

  return {
    toggleSport,
    handleSubmit,
    selectedSports,
    sportList,
    isLoading
  }
}
