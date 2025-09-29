// import React, { useEffect } from 'react';
// import { Stack } from 'expo-router';
// import { PaperProvider } from 'react-native-paper';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import 'react-native-reanimated';
// import FontAwesome from '@expo/vector-icons/FontAwesome';

// // Garante que a rota inicial do aplicativo seja sempre a tela de login.
// export const unstable_settings = {
//   initialRouteName: 'login',
// };

// // Previne a splash screen de fechar antes que as fontes e assets estejam carregados.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const [loaded, error] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//     ...FontAwesome.font,
//   });

//   useEffect(() => {
//     if (error) throw error;
//   }, [error]);

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//       <PaperProvider>
//         {/*
//           Esta é a nossa pilha de navegação principal.
//           Tudo aqui é uma "tela" em tela cheia.
//         */}
//         <Stack>
//           {/* A tela de login não terá um cabeçalho visível. */}
//           <Stack.Screen name="login" options={{ headerShown: false }} />

//           {/* A tela de cadastro terá um cabeçalho com título e botão de voltar. */}
//           <Stack.Screen name="signup" options={{ title: 'Cadastro' }} />

//           {/*
//               O "(tabs)" é uma tela especial que contém sua própria navegação (as abas).
//               Também escondemos o cabeçalho dela para que o layout das abas controle tudo.
//             */}
//           <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

//           {/* Tela Modal (opcional, do template) */}
//           <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
//         </Stack>
//       </PaperProvider>
//   );
// }

import { TamaguiProvider, Theme } from 'tamagui'
import config from '../tamagui.config'
import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'

export default function App() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  const theme = colorScheme === 'dark' ? 'custom_dark' : 'custom_light'

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={theme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
      </Theme>
    </TamaguiProvider>
  )
}
