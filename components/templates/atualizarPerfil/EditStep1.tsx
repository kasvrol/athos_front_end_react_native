import { Input, Label, XStack, YStack, Square } from 'tamagui'
import { Eye, EyeOff } from '@tamagui/lucide-icons'
import EditProfileLayout from '@/components/templates/atualizarPerfil/EditProfileLayout'
import { ManterUsuarioViewProps } from '@/utils/types/user'
import { ModelViewLogin } from '@/components/organisms/ManterUsuarioStep1/ModelViewManterUsuarioStep1'

export default function EditStep1({ setCurrentStep, currentStep, values, setValues }: ManterUsuarioViewProps) {

  const {
    nomeRef,
    emailRef,
    senhaRef,
    erro,
    showPassword,
    setShowPassword,
    handleSubmit,
    isLoading
  } = ModelViewLogin({ setCurrentStep, currentStep, values, setValues })

  return (
    <EditProfileLayout isLoading={isLoading} onPress={handleSubmit}>
      <YStack gap={'$3'}>
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
            defaultValue={values?.nome ?? ''} // Garante valor inicial
            onChangeText={text => { nomeRef.current = text }}
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
            onChangeText={text => { emailRef.current = text }}
          />
        </YStack>
        <YStack>
          <Label htmlFor="senha">Senha</Label>
          <XStack alignItems="center" borderWidth={1} borderColor={erro && !senhaRef.current ? '$borderColorError' : '$backgroundFocus'} borderRadius="$4">
            <Input
              id="senha"
              height="$9"
              flex={1}
              borderWidth={0}
              backgroundColor="transparent"
              color="white"
              onChangeText={text => { senhaRef.current = text }}
              secureTextEntry={!showPassword}
            />
            <Square onPress={() => setShowPassword(!showPassword)} padding="$2" marginRight="$1">
              {showPassword ? <EyeOff color="$color" /> : <Eye color="$color" />}
            </Square>
          </XStack>
        </YStack>
      </YStack>
    </EditProfileLayout>
  )
}