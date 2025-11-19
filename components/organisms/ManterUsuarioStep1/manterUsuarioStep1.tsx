import { Input, Label, XStack, YStack, Text, Square, ScrollView } from 'tamagui'
import { ModelViewLogin } from './ModelViewManterUsuarioStep1'
import { router } from 'expo-router'
import { Eye, EyeOff } from '@tamagui/lucide-icons'
import { ManterUsuarioViewProps } from '@/utils/types/user'
import SignupScreen from '@/components/molecules/singUp/singUpView'

const MensagemErro = ({ texto }: { texto: string }) => (
  <XStack
    padding="$3"
    backgroundColor="$backgroundError"
    borderRadius="$4"
    borderWidth={1}
    borderColor="$borderColorError"
    marginVertical="$3"
  >
    <Text textAlign="center" color="$background" fontSize="$4" fontWeight="500">
      {texto}
    </Text>
  </XStack>
)

export default function ManterUsuarioStep1Screen({
  setCurrentStep,
  currentStep,
  values,
  setValues,
}: ManterUsuarioViewProps) {
  const {
    nomeRef,
    emailRef,
    senhaRef,
    erro,
    showPassword,
    setShowPassword,
    handleSubmit,
    isLoading,
  } = ModelViewLogin({ setCurrentStep, currentStep, values, setValues })

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
      <YStack>
        <Label htmlFor="nome">Nome</Label>
        <Input
          id="nome"
          height="$9"
          borderColor={erro && !nomeRef.current ? '$borderColorError' : '$backgroundFocus'}
          borderWidth={1}
          backgroundColor="transparent"
          color="white"
          autoCapitalize="words"
          defaultValue={values?.nome ?? ''}
          onChangeText={text => {
            nomeRef.current = text
          }}
        />
      </YStack>
      <YStack>
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          height="$9"
          borderColor={erro && !emailRef.current ? '$borderColorError' : '$backgroundFocus'}
          borderWidth={1}
          color="white"
          backgroundColor="transparent"
          keyboardType="email-address"
          defaultValue={values?.email ?? ''}
          autoCapitalize="none"
          onChangeText={text => {
            emailRef.current = text
          }}
        />
      </YStack>

      <YStack>
        <Label htmlFor="senha">Senha</Label>
        <XStack
          alignItems="center"
          borderWidth={1}
          borderColor={erro && !senhaRef.current ? '$borderColorError' : '$backgroundFocus'}
          borderRadius="$4"
        >
          <Input
            id="senha"
            height="$9"
            flex={1}
            borderWidth={0}
            backgroundColor="transparent"
            focusStyle={{
              borderWidth: 0,
            }}
            color="white"
            size="$9"
            fontSize="$3"
            defaultValue={values?.senha ?? ''}
            onChangeText={text => {
              senhaRef.current = text
            }}
            secureTextEntry={!showPassword}
            autoComplete="password"
          />
          <Square
            onPress={() => setShowPassword(!showPassword)}
            padding="$2"
            marginRight="$1"
            pressStyle={{ opacity: 0.5 }}
          >
            {showPassword ? <EyeOff color="$color" /> : <Eye color="$color" />}
          </Square>
        </XStack>
      </YStack>
      {erro && <MensagemErro texto={erro} />}
    </SignupScreen>
  )
}
