import { EventoScreenProps } from '@/utils/interfaces/eventos'
import {
  BadgeDollarSign,
  CalendarDays,
  Dribbble,
  MapPinHouse,
  ScrollText,
  UserPen,
  Users2,
  Watch,
} from '@tamagui/lucide-icons'
import dayjs from 'dayjs'
import { YStack, XStack, Text } from 'tamagui'

export const EventScreen = ({ dadosEvento }: EventoScreenProps) => {
  return (
    <YStack gap={'$4'}>
      <Text
        fontSize="$5"
        fontWeight={'500'}
        color={'$borderColorFocus'}
        width={'100%'}
        textAlign="center"
      >
        {dadosEvento.titulo}
      </Text>
      <XStack alignItems="center" gap="$2" justifyContent="space-between">
        <XStack alignItems="center" gap="$2" justifyContent="flex-start">
          <Dribbble fontSize="$1" color={'$borderColorFocus'} />
          <Text textAlign="justify" fontSize="$4">
            {dadosEvento.esporte}
          </Text>
        </XStack>
        <XStack alignItems="center" gap="$2" justifyContent="flex-start">
          <BadgeDollarSign fontSize="$1" color={'$borderColorFocus'} />
          <Text textAlign="justify" fontSize="$4">
            Participação:{' '}
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
              dadosEvento.valor,
            )}
          </Text>
        </XStack>
      </XStack>
      <XStack alignItems="center" gap="$2" justifyContent="space-between">
        <XStack alignItems="center" gap="$2" justifyContent="flex-start">
          <CalendarDays fontSize="$1" color={'$borderColorFocus'} />
          <Text textAlign="justify" fontSize="$4">
            Data: {dayjs(dadosEvento.data).format('DD/MM/YYYY')}
          </Text>
        </XStack>
        <XStack alignItems="center" gap="$2" justifyContent="flex-start">
          <Watch fontSize="$1" color={'$borderColorFocus'} />
          <Text textAlign="justify" fontSize="$4">
            Horário: {dadosEvento.horario}
          </Text>
        </XStack>
      </XStack>
      <XStack alignItems="flex-start" gap="$2" justifyContent="flex-start">
        <ScrollText fontSize="$1" color={'$borderColorFocus'} />
        <Text textAlign="justify" width={'90%'} fontSize="$4">
          {dadosEvento.descricao}
        </Text>
      </XStack>

      <XStack alignItems="center" gap="$2" justifyContent="flex-start">
        <Users2 fontSize="$1" color={'$borderColorFocus'} />
        <Text textAlign="justify" width={'90%'} fontSize="$4">
          Quantidade de vagas: {dadosEvento.qtdVagas}
        </Text>
      </XStack>
      <XStack alignItems="center" gap="$2" justifyContent="flex-start">
        <UserPen fontSize="$1" color={'$borderColorFocus'} />
        <Text textAlign="justify" width={'90%'} fontSize="$4">
          Organizador: {dadosEvento.user}
        </Text>
      </XStack>
      <XStack alignItems="center" gap="$2">
        <MapPinHouse fontSize="$1" color={'$borderColorFocus'} />
        <Text textAlign="left" width={'90%'}>
          {dadosEvento.endereco}
        </Text>
      </XStack>
    </YStack>
  )
}
