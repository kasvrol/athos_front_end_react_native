import React from 'react'
import { YStack, Input, Label, Text, Form, XStack, H1, Square, Paragraph, H2 } from 'tamagui'
import { Eye, EyeOff } from '@tamagui/lucide-icons'
import { ModelViewFirstPage } from './ModelViewFirstPage'

const singUpHeader = () => {
  return (
    <Text color="$color10" textAlign="center" fontSize="$5" fontFamily="$body" fontWeight="700">
      Venha fazer parte desse grande time. Cadastre-se!
    </Text>
  )
}

export default function Step1() {
  const {
    showPassword,
    formValues,
    showConfirmPassword,
    erros,
    showError,
    handleBlur,
    setShowPassword,
    setShowConfirmPassword,
    handleChange,
    submitForm,
  } = ModelViewFirstPage()

  const isSingUp = true
  return (
    <YStack flex={1} justifyContent="center" padding="$4" gap="$4" backgroundColor="$background">
      {isSingUp ? singUpHeader() : null}
      <YStack gap="$3">
        <Form minWidth={300} gap="$3" onSubmit={submitForm}>
          <YStack gap="$1">
            <Label htmlFor="name" color="$color">
              Nome completo:
            </Label>
            <Input
              id="name"
              onChangeText={(text: string) => handleChange('name', text)}
              value={formValues.name}
              size="$4"
              placeholder="Fulano da Silva"
              autoComplete="name"
              borderColor="$borderColorFocus"
              onBlur={() => handleBlur('name')}
            />
            {showError('name') && (
              <Text color="$red10" fontSize="$2" textAlign="center" paddingHorizontal="$2">
                {erros.name}
              </Text>
            )}
          </YStack>
          <YStack gap="$1">
            <Label htmlFor="email" color="$color">
              E-mail:
            </Label>
            <Input
              id="email"
              onChangeText={(text: string) => handleChange('email', text)}
              value={formValues.email}
              size="$4"
              placeholder="fulano@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              borderColor="$borderColorFocus"
              onBlur={() => handleBlur('email')}
            />
            {showError('email') && (
              <Text color="$red10" fontSize="$2" textAlign="center" paddingHorizontal="$2">
                {erros.email}
              </Text>
            )}
          </YStack>
          <YStack gap="$1">
            <Label htmlFor="password" color="$color">
              Senha:
            </Label>
            <XStack alignItems="center" position="relative">
              <Input
                id="password"
                onChangeText={(text: string) => handleChange('password', text)}
                value={formValues.password}
                flex={1}
                size="$4"
                placeholder="********"
                secureTextEntry={!showPassword}
                autoComplete="new-password"
                borderColor="$borderColorFocus"
                onBlur={() => handleBlur('password')}
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
            {showError('password') && (
              <Text color="$red10" fontSize="$2" textAlign="center" paddingHorizontal="$2">
                {erros.password}
              </Text>
            )}
          </YStack>
          <YStack gap="$1">
            <Label htmlFor="confirmPassword" color="$color">
              Senha:
            </Label>
            <XStack alignItems="center" position="relative">
              <Input
                id="confirmPassword"
                flex={1}
                size="$4"
                placeholder="********"
                onChangeText={(text: string) => handleChange('senha', text)}
                value={formValues.confirmPassword}
                secureTextEntry={!showConfirmPassword}
                autoComplete="new-password"
                borderColor="$borderColorFocus"
                onBlur={() => handleBlur('confirmPassword')}
              />
              <Square
                position="absolute"
                right="$2.5"
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                padding="$2"
                pressStyle={{ opacity: 0.5 }}
              >
                {showConfirmPassword ? <EyeOff color="$color" /> : <Eye color="$color" />}
              </Square>
            </XStack>
            {showError('confirmPassword') && (
              <Text color="$red10" fontSize="$2" textAlign="center" paddingHorizontal="$2">
                {erros.confirmPassword}
              </Text>
            )}
          </YStack>
        </Form>
      </YStack>
    </YStack>
  )
}
