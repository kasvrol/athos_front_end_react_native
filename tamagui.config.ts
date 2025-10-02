import { createFont, createTamagui, createTokens } from 'tamagui'
import { shorthands } from '@tamagui/shorthands'

const vibrantLime = '#aaee1f'
const deepBlue = '#0a53de'
const mutedCyan = '#5ea1aa'
const paleYellowGreen = '#e7fa84'
const errorRed = '#FF2C2C'

const darkBg = '#121212'
const darkBg2 = '#1E1E1E'
const darkBg3 = '#2a2a2a'

const tokens = createTokens({
  size: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 32,
    8: 40,
  },
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
  },
  fontSize: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
  },
  radius: {
    0: 0,
    1: 2,
    2: 4,
    3: 8,
    4: 12,
  },
  zIndex: {
    0: 0,
    1: 10,
    2: 20,
    3: 30,
    4: 40,
    5: 50,
  },
})

const bodyFont = createFont({
  family: 'Oswald, sans-serif',
  size: tokens.fontSize,
  transform: {
    6: 'uppercase',
    7: 'none',
  },
})

export const dark_cyberLime = {
  background: darkBg,
  backgroundHover: darkBg2,
  backgroundPress: darkBg3,
  backgroundFocus: darkBg2,
  color: '#FFFFFF',
  colorHover: paleYellowGreen,
  colorPress: paleYellowGreen,
  colorFocus: paleYellowGreen,
  colorTranslucent: '#FFFFFF99',
  borderColor: darkBg3,
  borderColorHover: mutedCyan,
  borderColorPress: vibrantLime,
  borderColorFocus: vibrantLime,
  colorError: errorRed,
  borderColorError: errorRed,
  backgroundError: '#FF9E99',
  shadowColor: '#000000',
  shadowColorHover: '#000000',
  color1: darkBg,
  color2: darkBg2,
  color3: darkBg3,
  color4: mutedCyan,
  color5: '#FFFFFF40',
  color6: '#FFFFFF60',
  color7: deepBlue,
  color8: '#FFFFFF',
  color9: vibrantLime,
  color10: paleYellowGreen,
  color11: vibrantLime,
  color12: paleYellowGreen,
}

const themes = {
  dark: dark_cyberLime,
  dark_cyberLime: dark_cyberLime,
}

export const config = createTamagui({
  themes,
  tokens,
  shorthands,
  fonts: {
    body: bodyFont,
  },
  media: {
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },
})

export type AppConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config
