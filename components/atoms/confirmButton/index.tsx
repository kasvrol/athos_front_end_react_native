import { ReactNode } from 'react'
import { Button } from 'tamagui'

interface ConfirmButtonProps {
  functionButton: () => void
  titleButton: string
  icon: ReactNode
}

export const ConfirmButton = ({ functionButton, titleButton, icon }: ConfirmButtonProps) => {
  return (
    <Button
      onPress={functionButton}
      height="$9"
      width="100%"
      minWidth="$minWidth"
      backgroundColor="$color7"
      fontSize="$5"
      fontWeight="600"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {titleButton}
      {icon}
    </Button>
  )
}
