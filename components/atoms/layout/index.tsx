import { ReactNode } from 'react'
import { YStack } from 'tamagui'

type AtualizarPerfilProps = {
  children: ReactNode
}

export default function LayoutComponent({ children }: AtualizarPerfilProps) {
  return (
    <YStack
      flex={1}
      paddingTop={100}
      paddingHorizontal="$4"
      gap="$2"
      backgroundColor="$background"
      alignItems="flex-start"
      jc="flex-start"
    >
      {children}
    </YStack>
  )
}
