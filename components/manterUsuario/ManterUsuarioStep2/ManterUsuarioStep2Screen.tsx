import { YStack, Checkbox, Text, XStack, Form, Label, Input, ScrollView, Paragraph } from 'tamagui'
import { ManterUsuarioStep2 } from './ModelViewManterUsuarioStep2'
import SignupScreen from '../../singUp/singUpView'
import { ManterUsuarioViewProps } from '@/utils/types/user'

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
    toggleBairro,
    selectedBairros,
    error,
    isLoading,
    handleSubmit,
  } = ManterUsuarioStep2({ setCurrentStep, currentStep, values, setValues })

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
            value={cep ? cep : ''}
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
      {bairros.length && (
        <YStack maxHeight="52%">
          <Text fontWeight="500" mb="$2" fontSize="$4" textAlign="center" marginVertical="$4">
            Selecione ao menos um bairro que você possui interesse em participar de equipes:
          </Text>
          <ScrollView>
            <XStack
              gap="$3"
              flexWrap="wrap"
              justifyContent="flex-start"
              borderColor="$borderColor"
              borderRadius="$4"
              borderWidth={2}
              padding="$2"
              height={260}
              overflow="scroll"
            >
              {bairros.map(bairro => {
                const isChecked = selectedBairros.includes(bairro.name)

                return (
                  <XStack
                    key={bairro.id}
                    onPress={() => toggleBairro(bairro.name)}
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
                      id={bairro.name}
                      checked={isChecked}
                      onCheckedChange={() => toggleBairro(bairro.name)}
                      size="$4"
                    >
                      <Checkbox.Indicator />
                    </Checkbox>
                    <Label htmlFor={bairro.name}>{bairro.name}</Label>
                  </XStack>
                )
              })}
            </XStack>
          </ScrollView>
        </YStack>
      )}
    </SignupScreen>
  )
}
