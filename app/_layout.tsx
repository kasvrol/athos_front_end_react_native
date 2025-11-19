import { Theme } from 'tamagui'
import { Slot, useRouter, useSegments } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { Oswald_400Regular } from '@expo-google-fonts/oswald'
import { Provider } from '@/components/tamagui-provider'
import { useUserStore } from '@/store/UserStore'
import '@/utils/notifications/notificationConfig';
import { usePushNotifications } from '@/hooks/usePushNotifications'

SplashScreen.preventAutoHideAsync()

function RootLayoutNav() {
  const user = useUserStore(state => state.user)
  const router = useRouter()
  const segments = useSegments()
  const { expoPushToken } = usePushNotifications();

  useEffect(() => {
    if(expoPushToken) console.log("Meu Token de Notificação:", expoPushToken);
  }, [expoPushToken]);

  useEffect(() => {
    if ((segments as string[]).length === 0) {
      return
    }

    const inAuthGroup = segments[0] === '(auth)'

    if (!user && !inAuthGroup) {
      router.replace('/(auth)/login')
    } else if (user && inAuthGroup) {
      router.replace('/(tabs)/eventos')
    }
  }, [user, segments])

  return <Slot />
}

export const unstable_settings = {
  initialRouteName: 'login',
}

export default function App() {
  const [loaded, error] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    Oswald_400Regular,
  })

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
        <RootLayoutNav />
      </Theme>
    </Provider>
  )
}
