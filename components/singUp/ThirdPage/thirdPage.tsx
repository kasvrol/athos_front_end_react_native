import React from 'react'
import { YStack, Checkbox, Text, XStack, Label, ScrollView } from 'tamagui'
import { ModelViewThirdPage } from './ModelViewThirdPage'

export default function Step2() {
  const { toggleSport, selectedSports, sportList } = ModelViewThirdPage()

  return (
    <YStack flex={1} justifyContent="center" padding="$4" gap="$4" backgroundColor="$background">
      <Text color="$colorFocus" fontWeight="600" mb="$2" fontSize="$6" textAlign="center">
        Selecione ao menos um esporte do seu interesse
      </Text>
      <ScrollView>
        <XStack gap="$3" flexWrap="wrap" justifyContent="flex-start">
          {sportList.map(sport => {
            const isChecked = selectedSports.includes(sport.name)

            return (
              <XStack
                key={sport.id}
                onPress={() => toggleSport(sport.name)}
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
                  id={sport.name}
                  checked={isChecked}
                  onCheckedChange={() => toggleSport(sport.name)}
                  size="$4"
                >
                  <Checkbox.Indicator />
                </Checkbox>
                <Label htmlFor={sport.name}>{sport.name}</Label>
              </XStack>
            )
          })}
        </XStack>
      </ScrollView>
    </YStack>
  )
}
