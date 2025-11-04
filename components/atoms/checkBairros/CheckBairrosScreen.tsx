import { YStack, Checkbox, Text, XStack, Label, ScrollView, View } from 'tamagui'
import { CheckBairrosViewModel } from './CheckBairrosViewModel'
import { CheckBairrosInterface } from '@/utils/interfaces/bairros'

export default function CheckBairros({
  bairros,
  message,
  selectedBairros,
  setSelectedBairros,
}: CheckBairrosInterface) {
  const { toggleBairro } = CheckBairrosViewModel({ selectedBairros, setSelectedBairros })

  return (
    <View maxHeight="50%">
      {bairros?.length && (
        <YStack>
          {message && (
            <Text fontWeight="500" mb="$2" fontSize="$4" textAlign="center" marginVertical="$4">
              {message}
            </Text>
          )}
          <ScrollView>
            <XStack
              gap="$3"
              flexWrap="wrap"
              justifyContent="flex-start"
              borderColor="$borderColor"
              borderRadius="$4"
              borderWidth={2}
              padding="$2"
              height={260}
              overflow="scroll"
            >
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
                    backgroundColor={isChecked ? '$backgroundFocus' : 'transparent'}
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
          </ScrollView>
        </YStack>
      )}
    </View>
  )
}
