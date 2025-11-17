import { Calendar, Shield, Trophy } from '@tamagui/lucide-icons'
import { Link } from 'expo-router'
import { Text, XStack, YStack } from 'tamagui'
import dayjs from 'dayjs'
import { Campeonato } from '@/utils/interfaces/campeonatos'

const statusMap = {
  INSCRICOES_ABERTAS: 'Inscrições Abertas',
  INSCRICOES_FECHADAS: 'Inscrições Fechadas',
  EM_ANDAMENTO: 'Em Andamento',
  FINALIZADO: 'Finalizado',
  CANCELADO: 'Cancelado',
}

interface CardCampeonatoProps {
  campeonato: Campeonato
}

export const CardCampeonato = ({ campeonato }: CardCampeonatoProps) => {
  return (
    <Link href={`/(tabs)/campeonatos/${campeonato.id}`} asChild>
      <YStack
        tag="Pressable"
        backgroundColor={'$background'}
        gap={'$3'}
        marginVertical={'$3'}
        padding={'$4'}
        marginHorizontal={'$2'}
        borderWidth={1}
        borderColor={'white'}
        borderRadius={'$4'}
        pressStyle={{ backgroundColor: '$backgroundPress' }}
      >
        <Text
          fontSize="$5"
          textAlign="center"
          fontWeight={'500'}
          color={'$borderColorFocus'}
          marginBottom={'$1'}
        >
          {campeonato.nome}
        </Text>
        <YStack width={'100%'} gap={'$4'}>
          <XStack alignItems="center" gap="$2" justifyContent="space-between">
            <XStack alignItems="center" gap="$2">
              <Trophy fontSize="$1" color={'$borderColorFocus'} />
              <Text fontSize="$4">{campeonato.esporte}</Text>
            </XStack>
            <XStack alignItems="center" gap="$2">
              <Shield fontSize="$1" color={'$borderColorFocus'} />
              <Text fontSize="$4">{statusMap[campeonato.status]}</Text>
            </XStack>
          </XStack>
          <XStack alignItems="center" gap="$2" justifyContent="space-between">
            <XStack alignItems="center" gap="$2">
              <Calendar fontSize="$1" color={'$borderColorFocus'} />
              <Text fontSize="$4">Início: {dayjs(campeonato.dataInicio).format('DD/MM/YYYY')}</Text>
            </XStack>
            <Text fontSize="$4">
              Equipes: {campeonato.equipesInscritas}/{campeonato.maxEquipes}
            </Text>
          </XStack>
        </YStack>
      </YStack>
    </Link>
  )
}
