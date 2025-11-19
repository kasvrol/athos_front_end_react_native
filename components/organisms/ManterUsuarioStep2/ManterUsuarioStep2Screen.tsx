import { YStack, Checkbox, Text, XStack, Form, Label, Input, ScrollView, Paragraph } from 'tamagui'
import { ManterUsuarioStep2 } from './ModelViewManterUsuarioStep2'
import { ManterUsuarioViewProps } from '@/utils/types/user'
import CheckBairros from '@/components/molecules/checkBairros/CheckBairrosScreen'
import SignupScreen from '@/components/molecules/singUp/singUpView'

export default function ManterUsuarioStep2Screen({
  setCurrentStep,
  currentStep,
  values,
  setValues,
}: ManterUsuarioViewProps) {
  const {
    bairros,
    handleCEP,
    cep,
    dataCEP,
    setSelectedBairros,
    selectedBairros,
    error,
    isLoading,
    handleSubmit,
    isButtonDisabled
  } = ManterUsuarioStep2({ setCurrentStep, currentStep, values, setValues })

  const props = {
    onPress: handleSubmit,
    isLoading,
    values,
    setValues,
    setCurrentStep,
    currentStep,
    isButtonDisabled
  }

  return (
    <SignupScreen {...props}>
      <ScrollView >
      <Text
        color="$color10"
        textAlign="center"
        fontSize="$6"
        fontFamily="$body"
        fontWeight="700"
        marginBottom="$4"
      >
        Digite seu CEP e buscaremos os bairros da sua cidade
      </Text>
      <Form gap="$3">
        <YStack gap="$1">
          <Label htmlFor="cep" color="$color">
            CEP:
          </Label>
          <Input
            id="cep"
            onChangeText={(text: string) => handleCEP(text)}
            value={cep || ''}
            height="$9"
            fontSize="$3"
            placeholder="00000000"
            borderColor="$borderColorFocus"
            autoComplete="postal-address"
            keyboardType="numeric"
            color="$color"
          />
          {/* {showError('name') && (
              <Text color="$red10" fontSize="$2" textAlign="center" paddingHorizontal="$2">
                {erros.name}
              </Text>
            )} */}
        </YStack>
        <YStack gap="$1">
          <Label htmlFor="city" color="$color">
            Cidade:
          </Label>
          <Input
            id="city"
            color="$color"
            fontSize="$3"
            value={dataCEP?.localidade}
            height="$9"
            placeholder="Cidade"
            disabled
          />
        </YStack>
      </Form>
      <Text fontWeight="500" mb="$2" fontSize="$4" textAlign="center" marginVertical="$4">
Selecione ao menos um bairro que você possui interesse em participar de equipes:
      </Text>

      {bairros.length > 0 && !isLoading && (
<ScrollView 
    height={250} 
    nestedScrollEnabled={true} 
   
              borderColor="$borderColor"
              borderRadius="$4"
              borderWidth={2}
              padding={'$2'}>

<CheckBairros
        bairros={bairros}
        selectedBairros={selectedBairros}
        setSelectedBairros={setSelectedBairros}
      />
              </ScrollView>

      )} 
      </ScrollView>
      
    </SignupScreen>
  )
}
