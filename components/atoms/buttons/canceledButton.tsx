import { Button } from 'tamagui'

interface CanceledButtonProps {
  disabled: boolean
  onPress: () => void
  width: string
  message: string
  display:
    | 'flex'
    | 'none'
    | 'unset'
    | 'inherit'
    | 'inline'
    | 'block'
    | 'contents'
    | 'inline-flex'
    | undefined
}

export const CanceledButton = (props: CanceledButtonProps) => {
  return (
    <Button
      disabled={props.disabled}
      onPress={props.onPress}
      height="$10"
      width={props.width}
      minWidth="$minWidth"
      backgroundColor="$borderColorError"
      fontSize="$5"
      fontWeight="600"
      marginRight="$4"
      display={props.display}
    >
      {props.message}
    </Button>
  )
}
