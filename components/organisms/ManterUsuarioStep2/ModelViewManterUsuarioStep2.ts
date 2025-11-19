import { getAdress, getBairros } from '@/middleware/usuario/singup'
import { bairrosCuritiba } from '@/mock/bairrosCuritiba'
import { ManterUsuarioViewProps } from '@/utils/types/user'
import { useEffect, useState } from 'react'

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

   const isButtonDisabled = selectedBairros.length === 0

  const buscarBairros = async (ibgeCode: string) => {
  try {
    const response = await getBairros(ibgeCode)
    
    if (response?.bairros) {
      setBairros(response.bairros)
      setError(null)
      return
    }
    
    setBairros(bairrosCuritiba)
  } catch (err) {
    setError('Erro ao buscar bairros da sua região. Tente novamente mais tarde.')
  }
}

 const transformAdressData = async (cep: string) => {
  setIsLoading(true)
  try {
    const response = await getAdress(cep)
    console.log(response)

    if (response?.ibge) {
      setDataCEP(response)
      setError(null)
      await buscarBairros(response.ibge)
    } else {
      setError('Erro ao buscar seu CEP. Tente novamente mais tarde.')
    }
  } catch (err) {
    setError('Erro ao buscar seu CEP. Tente novamente mais tarde.')
  } finally {
    setIsLoading(false)
  }
}

  const handleCEP = async (value?: any) => {
   setCEP(value)
  const cleaned = value.replace(/\D/g, '')

  if (cleaned.length == 8) {
      transformAdressData(
        cleaned
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
    isButtonDisabled
  }
}
