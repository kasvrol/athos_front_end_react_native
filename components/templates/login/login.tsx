import { YStack, H1, Input, Button, Text, Spinner, XStack, Paragraph, Square, Label } from 'tamagui'
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
    <YStack
      flex={1}
      justifyContent="center"
      padding="$4"
      gap="$4"
      height="auto"
      backgroundColor="$background"
    >
      <YStack alignItems="center" gap="$2" marginBottom="$6">
        <H1 textAlign="center" color="$color10" fontSize="$11" fontFamily="$body" fontWeight="700">
          Bem-vindo(a) ao Athos
        </H1>
      </YStack>
      <YStack gap="$2" marginBottom="$3">
        <YStack gap="$1">
          <Label htmlFor="email">E-mail:</Label>
          <Input
            id="email"
            size="$9"
            fontSize="$3"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            borderColor="$borderColorFocus"
          />
        </YStack>
        <YStack gap="$1">
          <Label htmlFor="password">Senha:</Label>

          <XStack
            alignItems="center"
            borderWidth={1}
            borderColor="$borderColorFocus"
            borderRadius="$4"
            paddingLeft="$3"
          >
            <Input
              id="password"
              flex={1}
              borderWidth={0}
              backgroundColor="transparent"
              focusStyle={{
                borderWidth: 0,
              }}
              size="$9"
              fontSize="$3"
              value={password}
              onChangeText={setPassword}
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
      </YStack>
      {error ? <>{mensagemErro(error)}</> : null}
      <YStack gap="$5">
        <Button
          size="$9"
          fontFamily="$body"
          fontWeight="700"
          fontSize="$4"
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
        <YStack gap="$1" alignItems="center">
          <Paragraph fontFamily="$body" fontWeight="500">
            Não tem uma conta?
          </Paragraph>
          <Button
            chromeless
            onPress={() => router.push('/visualizarEvento')}
            size="$9"
            color="$color10"
            fontSize="$5"
            fontFamily="$body"
            fontWeight="700"
            disabled={isLoading}
            width="100%"
          >
            CADASTRE-SE
          </Button>
        </YStack>
      </YStack>
    </YStack>
  )
}
