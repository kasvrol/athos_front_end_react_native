import { getAdress, getBairros } from '@/middleware/usuario/singup'
import { bairrosCuritiba } from '@/mock/bairrosCuritiba'
import { ManterUsuarioViewProps } from '@/utils/types/user'
import { useState } from 'react'

export const ManterUsuarioStep2 = ({
  setCurrentStep,
  currentStep,
  values,
  setValues,
}: ManterUsuarioViewProps) => {
  const [dataCEP, setDataCEP] = useState<any>(null)
  const [cep, setCEP] = useState<null | string>(null)
  const [bairros, setBairros] = useState<any[]>([])
  const [error, setError] = useState<null | string>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedBairros, setSelectedBairros] = useState<string[]>([])

  const buscarBairros = async (ibgeCode: string) => {
    //const response = await getBairros(ibgeCode)

    if (true) {
      setBairros(bairrosCuritiba)
      return null
    }

    //setIsButtonDisabled(true)
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

    //setIsButtonDisabled(true)
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

  const handleSubmit = () => {
    if (!selectedBairros.length) {
      setError('Selecione ao menos um bairro')
      return null
    }

    setValues({ ...values, bairros: selectedBairros })
    setError(null)
    setCurrentStep(currentStep + 1)
    return true
  }

    //setIsButtonDisabled(selectedBairros.length == 0)

  return {
    handleCEP,
    handleSubmit,
    setSelectedBairros,
    cep,
    dataCEP,
    bairros,
    selectedBairros,
    isLoading,
    error,
  }
}
