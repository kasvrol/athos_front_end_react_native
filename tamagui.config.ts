import { createTamagui } from 'tamagui'
import { lightTheme, darkTheme } from './themes'

const config = createTamagui({
  theme: {
    custom_light: lightTheme,
    custom_dark: darkTheme,
  },
  themes: {
    custom_light: lightTheme,
    custom_dark: darkTheme,
  },
  defaultTheme: 'custom_light',
})

export type AppConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config
