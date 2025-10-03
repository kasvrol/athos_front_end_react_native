import { getAdress, getBairros } from '@/middleware/usuario/singup'
import { cidades } from '@/mock/cidades'
import { useState } from 'react'

export const ModelViewSecondPage = () => {
  const [dataCEP, setDataCEP] = useState<any>(null)
  const [cep, setCEP] = useState<null | string>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [bairros, setBairros] = useState<any[]>([])
  const [error, setError] = useState<null | string>(null)
  const [selectedBairros, setSelectedBairros] = useState<string[]>([])

  const toggleBairro = (bairroName: string) => {
    const isSelected = selectedBairros.includes(bairroName)

    if (isSelected) {
      setSelectedBairros(current => current.filter(name => name !== bairroName))
    } else {
      setSelectedBairros(current => [...current, bairroName])
    }
  }

  const buscarBairros = async (ibgeCode: string) => {
    //const response = await getBairros(ibgeCode)

    if (true) {
      setBairros(cidades)
      return null
    }

    setError('Erro ao buscar bairros da sua região. Tente novamente mais tarde.')
  }

  const transformAdressData = async (cep: string) => {
    setIsLoading(true)
    const response: any = await getAdress(cep)

    if (response) {
      setDataCEP(response)
      await buscarBairros(response.ibge)
      setIsLoading(false)
      return null
    }

    setIsLoading(false)
    setError('Erro ao buscar seu CEP. Tente novamente mais tarde.')
  }

  const handleCEP = async (value?: any) => {
    setCEP(value)
    const cepArray = value
      .trim()
      .replace(/[^\w\s]/gi, '')
      .split('')

    if (cepArray.length == 8) {
      transformAdressData(
        cepArray
          .join()
          .replace(/[^\w\s]/gi, '')
          .trim(),
      )
    }
  }

  const isButtonDisabled = isLoading

  return {
    isLoading,
    handleCEP,
    toggleBairro,
    cep,
    dataCEP,
    bairros,
    selectedBairros,
    error,
  }
}
