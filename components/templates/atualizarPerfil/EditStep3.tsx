import React, { useState, useEffect } from 'react'
import { Text, YStack } from 'tamagui'
import CheckEsportesScreen from '@/components/molecules/checkEsportes/CheckEsportesScreen'
import EditProfileLayout from '@/components/templates/atualizarPerfil/EditProfileLayout'
import { ManterUsuarioViewProps } from '@/utils/types/user'
import { esportes } from '@/mock/esportes'

interface EditStep3Props extends ManterUsuarioViewProps {
  onFinalSubmit: () => void
}

export default function EditStep3({
  setCurrentStep,
  currentStep,
  values,
  setValues,
  onFinalSubmit,
}: EditStep3Props) {
  const [selectedSports, setSelectedSports] = useState<string[]>(values?.sportList || [])
  const [sportList, setSportList] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    setSportList(esportes)
    setIsLoading(false)
  }, [])

  const handleSave = () => {
    if (selectedSports.length < 1) {
      alert('Selecione ao menos um esporte')
      return
    }

    const finalValues = { ...values, sportList: selectedSports }
    setValues(finalValues)

    onFinalSubmit()
  }

  return (
    <EditProfileLayout
      isLoading={isLoading}
      onPress={handleSave}
      onBack={() => setCurrentStep(currentStep - 1)}
      isLastStep={true}
    >
      <Text color="$colorFocus" fontWeight="600" mb="$2" fontSize="$6" textAlign="center">
        Seus esportes de interesse
      </Text>

      <YStack maxHeight="75%">
        <CheckEsportesScreen
          setSelectedSports={setSelectedSports}
          selectedSports={selectedSports}
        />
      </YStack>
    </EditProfileLayout>
  )
}
