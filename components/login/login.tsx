import { YStack, H1, Input, Button, Text, Spinner, XStack, useTheme, Paragraph, Square } from 'tamagui';
import { Eye, EyeOff } from '@tamagui/lucide-icons';
import { ModelViewLogin } from './ModelViewLogin';

export default function LoginScreen() {
    const {isButtonDisabled,
        password,
    showPassword,
    email,
    router,
    error,
    isLoading,
    theme,
    handleLogin,
    setShowPassword,
    setEmail,
    setPassword} = ModelViewLogin()
    return (
    // YStack é nosso container principal, organizando tudo verticalmente
    <YStack flex={1} justifyContent="center" padding="$4" gap="$4" backgroundColor="$background">
      
      {/* 1. Título e Subtítulo - Minimalista e Direto */}
      <YStack alignItems="center" gap="$2" marginBottom="$6">
        <H1 color="$color10">Bem-vindo(a)</H1>
        <Paragraph color="$color">
          Acesse com suas credenciais
        </Paragraph>
      </YStack>

      {/* 2. Formulário */}
      <YStack gap="$3">
        {/* Campo de E-mail */}
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

        {/* Campo de Senha com botão de visibilidade */}
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

        {/* 3. Exibição de Erros */}
        {error ? (
          <Text color="$red10" fontSize="$2" textAlign="center" paddingHorizontal="$2">
            {error}
          </Text>
        ) : null}

        {/* Botão de Entrar com Indicador de Loading */}
        <Button
          size="$4"
          backgroundColor={isButtonDisabled ? "$backgroundPress" : "$color9"}
          color={isButtonDisabled ? "$color" : "$background"}
          pressStyle={{
            backgroundColor: isButtonDisabled ? "$backgroundPress" : "$color10",
          }}
          onPress={handleLogin}
          disabled={isButtonDisabled}
          icon={isLoading ? () => <Spinner color={isButtonDisabled ? "$color" : "$background"} /> : undefined}
        >
          {isLoading ? 'Entrando...' : 'Entrar'}
        </Button>
      </YStack>
      
      {/* 4. Ações Secundárias */}
      <YStack gap="$2" alignItems="center" marginTop="$4">
         <Button chromeless onPress={() => alert('Link para "Esqueci minha senha"')} color="$color7">
            Esqueceu sua senha?
         </Button>
         <Button chromeless onPress={() => router.push('/signup')} color="$color10">
            Não tem uma conta? <Text fontWeight="bold">Cadastre-se</Text>
         </Button>
      </YStack>

    </YStack>
  );
}