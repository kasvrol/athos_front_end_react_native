import React, { useState, useEffect } from 'react'
import { YStack, Text, Form, Label, Input } from 'tamagui'
import CheckBairros from '@/components/molecules/checkBairros/CheckBairrosScreen'
import EditProfileLayout from '@/components/templates/atualizarPerfil/EditProfileLayout'
import { ManterUsuarioViewProps } from '@/utils/types/user'
import { getAdress } from '@/middleware/usuario/singup'
import { bairrosCuritiba } from '@/mock/bairrosCuritiba'

export default function EditStep2({
  setCurrentStep,
  currentStep,
  values,
  setValues,
}: ManterUsuarioViewProps) {
  const [dataCEP, setDataCEP] = useState<any>(null)
  const [cep, setCEP] = useState<string>(values?.cep || '')
  const [bairros, setBairros] = useState<any[]>([])
  const [selectedBairros, setSelectedBairros] = useState<string[]>(values?.bairros || [])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setBairros(bairrosCuritiba)

    if (values?.cep) {
      handleCEP(values.cep)
    }
  }, [])

  const transformAdressData = async (cepDigitado: string) => {
    setIsLoading(true)
    try {
      const response: any = await getAdress(cepDigitado)
      if (response) {
        setDataCEP(response)
      } else {
        setError('CEP não encontrado.')
      }
    } catch (e) {
      setError('Erro ao buscar CEP.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCEP = async (text: string) => {
    setCEP(text)
    const rawCep = text.replace(/[^\w\s]/gi, '')

    if (rawCep.length === 8) {
      await transformAdressData(rawCep)
    }
  }

  const handleSubmit = () => {
    if (!selectedBairros.length) {
      alert('Selecione ao menos um bairro')
      return
    }

    setValues({ ...values, cep, bairros: selectedBairros })

    setCurrentStep(currentStep + 1)
  }

  return (
    <EditProfileLayout
      isLoading={isLoading}
      onPress={handleSubmit}
      onBack={() => setCurrentStep(currentStep - 1)}
    >
      <Text
        color="$color10"
        textAlign="center"
        fontSize="$6"
        fontFamily="$body"
        fontWeight="700"
        marginBottom="$4"
      >
        Atualize sua localização
      </Text>

      <Form gap="$3">
        <YStack gap="$1">
          <Label htmlFor="cep" color="$color">
            CEP:
          </Label>
          <Input
            id="cep"
            onChangeText={handleCEP}
            value={cep}
            height="$9"
            fontSize="$3"
            placeholder="00000000"
            borderColor={error ? '$borderColorError' : '$borderColorFocus'}
            autoComplete="postal-address"
            keyboardType="numeric"
            color="$color"
            maxLength={8}
          />
          {error && (
            <Text color="$red10" fontSize="$3" marginVertical="$2">
              {error}
            </Text>
          )}
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="city" color="$color">
            Cidade:
          </Label>
          <Input
            id="city"
            color="$color"
            fontSize="$3"
            value={dataCEP?.localidade || ''}
            height="$9"
            placeholder="Cidade"
            disabled
            opacity={0.7}
          />
        </YStack>
      </Form>

      <CheckBairros
        message="Selecione os bairros de interesse:"
        bairros={bairros}
        selectedBairros={selectedBairros}
        setSelectedBairros={setSelectedBairros}
      />
    </EditProfileLayout>
  )
}
