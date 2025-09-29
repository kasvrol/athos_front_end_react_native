import { TamaguiProvider, Theme } from 'tamagui'
import config from '../tamagui.config'
import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen';

export const unstable_settings = {
  initialRouteName: 'login',
};

SplashScreen.preventAutoHideAsync();

export default function App() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  const error = ''

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={'dark_cyberLime'}>
        <Stack>
                     {/* A tela de login não terá um cabeçalho visível. */}
           <Stack.Screen name="login" options={{ headerShown: false }} />

           {/* A tela de cadastro terá um cabeçalho com título e botão de voltar. */}
           <Stack.Screen name="signup" options={{ title: 'Cadastro' }} />

           {/*
               O "(tabs)" é uma tela especial que contém sua própria navegação (as abas).
               Também escondemos o cabeçalho dela para que o layout das abas controle tudo.
             */}
           <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

           {/* Tela Modal (opcional, do template) */}
           <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
      </Theme>
    </TamaguiProvider>
  )
}
