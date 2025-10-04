import ManterUsuarioStep1Screen from '@/components/manterUsuario/manterUsuarioStep1'
import { useEffect, useState } from 'react'
import { Text, YStack } from 'tamagui'

export default function Signup() {
  const [currentStep, setCurrentStep] = useState(1)
  const [values, setValues] = useState(null)

  useEffect(() => {
    // setValues()
    console.log('oi')
  }, [])

  return (
    <>
      {currentStep === 1 && (
        <YStack
          flex={1}
          justifyContent="center"
          paddingTop="$9"
          paddingHorizontal="$4"
          gap="$2"
          backgroundColor="$background"
          alignItems="flex-start"
          jc="flex-start"
        >
          <Text
            color="$color10"
            textAlign="center"
            fontSize="$6"
            fontFamily="$body"
            fontWeight="700"
          >
            Venha fazer parte desse grande time. Cadastre-se!
          </Text>
          <ManterUsuarioStep1Screen
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            values={values}
            setValues={setValues}
          />
        </YStack>
      )}
      {currentStep === 2 && (
        <ManterUsuarioStep1Screen
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          values={values}
          setValues={setValues}
        />
      )}
      {currentStep === 3 && (
        <ManterUsuarioStep1Screen
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          values={values}
          setValues={setValues}
        />
      )}
    </>
  )
}
