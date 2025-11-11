import { ReactNode } from 'react'
import { ScrollView } from 'tamagui'

type LayoutDefaultProps = {
  children: ReactNode
}

export default function LayoutDefault({ children }: LayoutDefaultProps) {
  return (
    <ScrollView
      flex={1}
      paddingVertical="$4"
      paddingHorizontal="$3"
      gap="$4"
      backgroundColor="$background"
      width={'100%'}
    >
      {children}
    </ScrollView>
  )
}
