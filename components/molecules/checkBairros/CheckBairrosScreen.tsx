import { YStack, Checkbox, Text, XStack, Label, ScrollView, View } from 'tamagui'
import { CheckBairrosViewModel } from './CheckBairrosViewModel'
import { CheckBairrosInterface } from '@/utils/interfaces/bairros'

export default function CheckBairros({
  bairros,
  selectedBairros,
  setSelectedBairros,
}: CheckBairrosInterface) {
  const { toggleBairro } = CheckBairrosViewModel({ selectedBairros, setSelectedBairros })

  return (
    <View>
      {bairros?.length && (
        <YStack>
          <XStack gap="$3" flexWrap="wrap" justifyContent="flex-start">
            {bairros.map(bairro => {
              const isChecked = selectedBairros.includes(bairro.name)

              return (
                <XStack
                  key={bairro.id}
                  onPress={() => toggleBairro(bairro.name)}
                  alignItems="center"
                  gap="$3"
                  paddingVertical="$2"
                  paddingHorizontal="$3"
                  borderRadius="$4"
                  borderWidth={1}
                  borderColor={isChecked ? '$colorFocus' : '$borderColor'}
                  backgroundColor={isChecked ? '$color3' : 'transparent'}
                  pressStyle={{ backgroundColor: '$backgroundHover' }}
                >
                  <Checkbox
                    id={bairro.name}
                    checked={isChecked}
                    onCheckedChange={() => toggleBairro(bairro.name)}
                    size="$4"
                  >
                    <Checkbox.Indicator />
                  </Checkbox>
                  <Label htmlFor={bairro.name}>{bairro.name}</Label>
                </XStack>
              )
            })}
          </XStack>
        </YStack>
      )}
    </View>
  )
}
