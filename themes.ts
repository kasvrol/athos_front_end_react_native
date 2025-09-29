import { createTheme } from '@tamagui/core'

const base = {
  background: '#5ea1aa',
  backgroundHover: '#5ea1aa',
  backgroundPress: '#5ea1aa',
  backgroundFocus: '#5ea1aa',

  color: '#0a53de',
  colorHover: '#0a53de',
  colorPress: '#0a53de',
  colorFocus: '#0a53de',

  borderColor: '#aaee1f',
  borderColorHover: '#aaee1f',
  borderColorFocus: '#aaee1f',
  borderColorPress: '#aaee1f',

  placeholderColor: '#e7fa84',
}

export const lightTheme = createTheme({
  ...base,
  name: 'custom_light',
})

export const darkTheme = createTheme({
  ...base,
  background: '#0a53de',
  color: '#e7fa84',
  name: 'custom_dark',
})
