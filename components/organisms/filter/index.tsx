import { useState } from 'react'
import { Button, H4, Label, ScrollView, YStack, XStack, RadioGroup } from 'tamagui'
import { Calendar as CalendarIcon } from '@tamagui/lucide-icons'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { Platform } from 'react-native'
import CheckBairros from '@/components/molecules/checkBairros/CheckBairrosScreen'
import CheckEsportesScreen from '@/components/molecules/checkEsportes/CheckEsportesScreen'
import { bairrosCuritiba } from '@/mock/bairrosCuritiba'
import { esportes } from '@/mock/esportes'
import { RadioGroupItemWithLabel } from '@/components/atoms/radioGroup'

interface Filtros {
  data?: string
  locais: string[]
  esportes: string[]
}

interface BuscadorProps {
  onFiltrar: (filtros: Filtros) => void
  onLimpar: () => void
}

export function Buscador({ onFiltrar, onLimpar }: BuscadorProps) {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [selectedBairros, setSelectedBairros] = useState<string[]>([])
  const [selectedSports, setSelectedSports] = useState<string[]>([])

  const handleSearch = () => {
    onFiltrar({
      data: date ? date.toISOString().split('T')[0] : undefined,
      locais: selectedBairros,
      esportes: selectedSports,
    })
  }

  const handleClear = () => {
    setDate(undefined)
    setSelectedBairros([])
    setSelectedSports([])
    onLimpar()
  }

  return (
    <YStack
      padding="$4"
      borderRadius="$4"
      backgroundColor="$background"
      borderWidth={1}
      borderColor="$borderColor"
      gap="$4"
      elevation="$4"
      marginBottom="$4"
      zIndex={10}
      position="absolute"
    >
      <H4 fontWeight={'500'} color="$color2" textTransform="uppercase" textAlign="center">
        Filtrar Eventos
      </H4>

      <ScrollView maxHeight={400} showsVerticalScrollIndicator={false}>
        <YStack gap="$4">
          <YStack gap="$2">
            <RadioGroup aria-labelledby="Ordenar por:" defaultValue="data" name="form">
              <YStack width={300} alignItems="center" gap="$3">
                <RadioGroupItemWithLabel size={7} value="data" label="Data" fontSize="$3" />
                <RadioGroupItemWithLabel size={7} value="nome" label="Nome" fontSize="$3" />
              </YStack>
            </RadioGroup>
          </YStack>

          <YStack gap="$2">
            <Label fontFamily="$body" color="$color">
              Esportes
            </Label>
            <ScrollView
              height={350}
              nestedScrollEnabled={true}
              borderColor="$borderColor"
              borderRadius="$4"
              borderWidth={2}
              padding={'$2'}
            >
              <CheckEsportesScreen
                sportList={esportes}
                selectedSports={selectedSports}
                setSelectedSports={setSelectedSports}
              />
            </ScrollView>
          </YStack>

          <YStack gap="$2">
            <Label fontFamily="$body" color="$color">
              Bairros
            </Label>
            <ScrollView
              height={350}
              nestedScrollEnabled={true}
              borderColor="$borderColor"
              borderRadius="$4"
              borderWidth={2}
              padding={'$2'}
            >
              <CheckBairros
                bairros={bairrosCuritiba}
                selectedBairros={selectedBairros}
                setSelectedBairros={setSelectedBairros}
              />
            </ScrollView>
          </YStack>
        </YStack>
      </ScrollView>

      <XStack gap="$3" marginTop="$2">
        <Button
          flex={1}
          onPress={handleClear}
          backgroundColor="$backgroundPress"
          borderColor="$borderColorError"
          borderWidth={1}
          color="$colorError"
          fontWeight={'700'}
          height={'$9'}
          fontSize={'$4'}
        >
          LIMPAR
        </Button>
        <Button
          flex={1}
          onPress={handleSearch}
          backgroundColor="$color9"
          color="$background"
          height={'$9'}
          fontWeight={'700'}
          fontSize={'$4'}
        >
          BUSCAR
        </Button>
      </XStack>
    </YStack>
  )
}
