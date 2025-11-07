import LayoutComponent from '@/components/atoms/layout'
import {
  BadgeDollarSign,
  CalendarDays,
  Dribbble,
  MapPinHouse,
  ScrollText,
  Watch,
} from '@tamagui/lucide-icons'
import { Button, H3, Text, XStack, YStack } from 'tamagui'

export type CardEventoProps = {
  titulo: string
  descricao: string
  esporte: string
  endereco: string
  valor: number
  data: string
  horario: string
}

export const CardEvento = ({
  titulo,
  descricao,
  esporte,
  valor,
  endereco,
  data,
  horario,
}: CardEventoProps) => {
  let arrayLittleDescription: string[] = descricao.split(' ')
  arrayLittleDescription = arrayLittleDescription.splice(0, 10)
  let littleDescription: string = arrayLittleDescription.join(' ')

  return (
    <YStack
      backgroundColor={'$background'}
      gap={'$3'}
      marginVertical={'$3'}
      padding={'$4'}
      marginHorizontal={'$2'}
      borderWidth={1}
      borderColor={'white'}
      borderRadius={'$4'}
    >
      <Text fontSize="$5" fontWeight={'500'} color={'$borderColorFocus'} marginBottom={'$1'}>
        {titulo}
      </Text>
      <YStack width={'100%'} gap={'$4'}>
        <XStack alignItems="center" gap="$2" justifyContent="space-between">
          <XStack alignItems="center" gap="$2" justifyContent="flex-start">
            <Dribbble fontSize="$1" color={'$borderColorFocus'} />
            <Text textAlign="justify" fontSize="$4">
              {esporte}
            </Text>
          </XStack>
          <XStack alignItems="center" gap="$2" justifyContent="flex-start">
            <BadgeDollarSign fontSize="$1" color={'$borderColorFocus'} />
            <Text textAlign="justify" fontSize="$4">
              Participação: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)}
            </Text>
          </XStack>
        </XStack>
        <XStack alignItems="center" gap="$2" justifyContent="space-between">
          <XStack alignItems="center" gap="$2" justifyContent="flex-start">
            <CalendarDays fontSize="$1" color={'$borderColorFocus'} />
            <Text textAlign="justify" fontSize="$4">
              Data: {data}
            </Text>
          </XStack>
          <XStack alignItems="center" gap="$2" justifyContent="flex-start">
            <Watch fontSize="$1" color={'$borderColorFocus'} />
            <Text textAlign="justify" fontSize="$4">
              Horário: {horario}
            </Text>
          </XStack>
        </XStack>
        <XStack alignItems="center" gap="$2" justifyContent="flex-start">
          <ScrollText fontSize="$1" color={'$borderColorFocus'} />
          <Text textAlign="justify" width={'90%'} fontSize="$4">{`${littleDescription}...`}</Text>
        </XStack>
      </YStack>

      <XStack alignItems="center" gap="$2">
        <MapPinHouse fontSize="$1" color={'$borderColorFocus'} />
        <Text textAlign="left" width={'90%'}>{endereco}</Text>
      </XStack>
      <Button
        width={'100%'}
        height={'$9'}
        fontSize={'$4'}
        fontWeight={'500'}
        backgroundColor={'$colorPress'}
        color={'$color1'}
      >
        VER MAIS
      </Button>
    </YStack>
  )
}
