import React from 'react'
import { YStack, Checkbox, Text, XStack, Label, ScrollView } from 'tamagui'
import { ModelViewThirdPage } from './ModelViewManterUsuarioStep3'
import { UserInformations } from '@/utils/interfaces/user'
import { ManterUsuarioViewProps } from '@/utils/types/user'
import SignupScreen from '@/components/singUp/singUpView'

export default function ManterUsuarioStep3Screen({
  setCurrentStep,
  currentStep,
  values,
  setValues,
}: ManterUsuarioViewProps) {
  const { toggleSport, selectedSports, sportList, handleSubmit, isLoading } = ModelViewThirdPage({
    setCurrentStep,
    currentStep,
    values,
    setValues,
  })

  const props = {
    onPress: handleSubmit,
    isLoading,
    values,
    setValues,
    setCurrentStep,
    currentStep,
  }

  return (
    <SignupScreen {...props}>
      <Text color="$colorFocus" fontWeight="600" mb="$2" fontSize="$6" textAlign="center">
        Selecione ao menos um esporte do seu interesse
      </Text>
      <ScrollView>
        <XStack gap="$3" flexWrap="wrap" justifyContent="flex-start">
          {sportList.map(sport => {
            const isChecked = selectedSports.includes(sport.name)

            return (
              <XStack
                key={sport.id}
                onPress={() => toggleSport(sport.name)}
                alignItems="center"
                gap="$3"
                paddingVertical="$2"
                paddingHorizontal="$3"
                borderRadius="$4"
                borderWidth={1}
                borderColor={isChecked ? '$colorFocus' : '$borderColor'}
                backgroundColor={isChecked ? '$backgroundFocus' : 'transparent'}
                pressStyle={{ backgroundColor: '$backgroundHover' }}
              >
                <Checkbox
                  id={sport.name}
                  checked={isChecked}
                  onCheckedChange={() => toggleSport(sport.name)}
                  size="$4"
                >
                  <Checkbox.Indicator />
                </Checkbox>
                <Label htmlFor={sport.name}>{sport.name}</Label>
              </XStack>
            )
          })}
        </XStack>
      </ScrollView>
    </SignupScreen>
  )
}
