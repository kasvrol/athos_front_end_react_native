import {
  YStack,
  H1,
  Input,
  Button,
  Text,
  Spinner,
  XStack,
  useTheme,
  Paragraph,
  Square,
} from 'tamagui'
import { Eye, EyeOff } from '@tamagui/lucide-icons'
import { ModelViewLogin } from './ModelViewLogin'

const mensagemErro = (error: string) => {
  return (
    <XStack
      alignItems="center"
      justifyContent="center"
      height="$5"
      position="relative"
      borderWidth={1}
      borderStyle="solid"
      borderColor="$borderColorError"
      borderRadius="$4"
      backgroundColor="$backgroundError"
    >
      <Text color="$colorError" fontSize="$4" fontWeight={500}>
        {error}
      </Text>
    </XStack>
  )
}

export default function LoginScreen() {
  const {
    isButtonDisabled,
    password,
    showPassword,
    email,
    router,
    error,
    isLoading,
    handleLogin,
    setShowPassword,
    setEmail,
    setPassword,
  } = ModelViewLogin()
  return (
    <YStack flex={1} justifyContent="center" padding="$4" gap="$4" backgroundColor="$background">
      <YStack alignItems="center" gap="$2" marginBottom="$6">
        <H1
          textAlign="center"
          color="$color10"
          fontSize="$4"
          fontFamily="$bodyFont"
          fontWeight="700"
        >
          Bem-vindo(a) ao Athos
        </H1>
      </YStack>
      <YStack gap="$3">
        <Input
          size="$4"
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          borderColor="$borderColorFocus"
        />
        <XStack alignItems="center" position="relative">
          <Input
            flex={1}
            size="$4"
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoComplete="password"
            borderColor="$borderColorFocus"
          />
          <Square
            position="absolute"
            right="$2.5"
            onPress={() => setShowPassword(!showPassword)}
            padding="$2"
            pressStyle={{ opacity: 0.5 }}
          >
            {showPassword ? <EyeOff color="$color" /> : <Eye color="$color" />}
          </Square>
        </XStack>
        {error ? <>{mensagemErro(error)}</> : null}
        <Button
          size="$4"
          fontFamily="$bodyFont"
          fontWeight="500"
          backgroundColor={isButtonDisabled ? '$backgroundPress' : '$color9'}
          color={isButtonDisabled ? '$color' : '$background'}
          pressStyle={{
            backgroundColor: isButtonDisabled ? '$backgroundPress' : '$color10',
          }}
          onPress={handleLogin}
          disabled={isButtonDisabled}
          icon={
            isLoading
              ? () => <Spinner color={isButtonDisabled ? '$color' : '$background'} />
              : undefined
          }
        >
          {isLoading ? 'Entrando...' : 'Entrar'}
        </Button>
      </YStack>
      <YStack gap="$2" alignItems="center" marginTop="$4">
        <Paragraph>Não tem uma conta?</Paragraph>
        <Button
          chromeless
          onPress={() => router.push('/signup')}
          size="$4"
          color="$color10"
          fontFamily="$bodyFont"
          fontWeight="500"
          disabled={isLoading}
        >
          Cadastre-se
        </Button>
      </YStack>
    </YStack>
  )
}
