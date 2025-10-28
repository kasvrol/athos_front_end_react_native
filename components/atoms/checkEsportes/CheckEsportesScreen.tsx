import React from 'react'
import { Checkbox, XStack, Label, ScrollView } from 'tamagui'
import { CheckEsportesViewModel } from './CheckEsportesViewModel'

export default function CheckEsportesScreen({
 sportList, selectedSports, setSelectedSports
}) {
  const { toggleSport } = CheckEsportesViewModel({selectedSports, setSelectedSports})

  return (
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
  )
}
