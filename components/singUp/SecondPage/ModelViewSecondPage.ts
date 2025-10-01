import { getAdress, getBairros } from '@/middleware/usuario/singup'
import { useState } from 'react'

export const ModelViewSecondPage = () => {
  const [dataCEP, setDataCEP] = useState<any>(null)
  const [cep, setCEP] = useState<null | string>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [bairros, setBairros] = useState<any[]>([])
  const [error, setError] = useState<null | string>(null)

  const buscarBairros = async (ibgeCode: string) => {
    const response = await getBairros(ibgeCode)

    if (response && response?.result.length) {
      setBairros(response?.result)
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
    const cepArray = value.trim().split('').length()
    if (cepArray > 8) {
      transformAdressData(cepArray.join('')[0])
    }
  }

  const isButtonDisabled = isLoading

  return {
    isLoading,
    handleCEP,
    cep,
    dataCEP,
    bairros,
  }
}
