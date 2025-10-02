import { Theme } from 'tamagui'
import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { Oswald_400Regular } from '@expo-google-fonts/oswald'
import { Provider } from '@/components/tamagui-provider'

export const unstable_settings = {
  initialRouteName: 'login',
}

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    Oswald_400Regular,
  })

  const error = ''

  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <Provider>
      <Theme name={'dark_cyberLime'}>
        <Stack>
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="singup" options={{ headerShown: false }} />

          {/*
               O "(tabs)" é uma tela especial que contém sua própria navegação (as abas).
               Também escondemos o cabeçalho dela para que o layout das abas controle tudo.
             */}
          {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}

          {/* Tela Modal (opcional, do template) */}
          {/* <Stack.Screen name="modal" options={{ presentation: 'modal' }} /> */}
        </Stack>
      </Theme>
    </Provider>
  )
}
