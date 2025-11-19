import LayoutComponent from '@/components/atoms/layout'
import ManterUsuarioStep1Screen from '@/components/organisms/ManterUsuarioStep1/manterUsuarioStep1'
import ManterUsuarioStep2Screen from '@/components/organisms/ManterUsuarioStep2/ManterUsuarioStep2Screen'
import ManterUsuarioStep3Screen from '@/components/organisms/ManterUsuarioStep3/ManterUsuarioStep3Screen'
import { useEffect, useState } from 'react'
import { Text } from 'tamagui'

export default function Signup() {
  const [currentStep, setCurrentStep] = useState(1)
  const [values, setValues] = useState(null)

  useEffect(() => {
    // setValues({})
  }, [])

  return (
    <>
      {currentStep === 1 && (
        <LayoutComponent>
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
        </LayoutComponent>
      )}
      {currentStep === 2 && (
        <LayoutComponent>
          <ManterUsuarioStep2Screen
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            values={values}
            setValues={setValues}
          />
        </LayoutComponent>
      )}
      {currentStep === 3 && (
        <LayoutComponent>
          <ManterUsuarioStep3Screen
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            values={values}
            setValues={setValues}
          />
        </LayoutComponent>
      )}
    </>
  )
}
