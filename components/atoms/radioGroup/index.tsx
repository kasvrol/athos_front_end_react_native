import type { SizeTokens } from 'tamagui'
import { Label, RadioGroup, XStack } from 'tamagui'

export function RadioGroupItemWithLabel(props: {
  fontSize: string
  size: SizeTokens
  value: string
  label: string
}) {
  const id = `radiogroup-${props.value}`
  return (
    <XStack width={300} alignItems="center" gap="$4">
      <RadioGroup.Item value={props.value} id={id} size={props.size}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>
      <Label size={props.fontSize} htmlFor={id}>
        {props.label}
      </Label>
    </XStack>
  )
}
