import { ConfirmButton } from '@/components/atoms/buttons/confirmButton'
import { StatusEvento } from '@/utils/interfaces/eventos'
import { Check, StarFull, XCircle } from '@tamagui/lucide-icons'
import { Fragment } from 'react'
import { H3, YStack, Text, Button, Separator, XStack } from 'tamagui'

type Participants = {
  idParticipante: string
  nomeParticipante: string
  avaliacaoParticipante: number
}

interface ListarParticipantesProps {
  participants: Participants[]
  statusEvento: StatusEvento
}

export const ListarParticipantes = ({ participants, statusEvento }: ListarParticipantesProps) => {
  return (
    <YStack gap="$3" marginVertical="$3">
      <H3 size="$3" textAlign="center" fontSize={'$5'} fontWeight={'500'} marginVertical={'$3'}>
        {statusEvento === StatusEvento.OCORRENDO ? 'Participantes' : 'Querem participar do evento:'}
      </H3>
      {participants.map((p, index) => (
        <Fragment key={p.idParticipante}>
          {index > 0 && <Separator />}
          <XStack gap="$2" width={'100%'} justifyContent="space-between">
            <XStack gap="$2" alignItems="center">
              <Text fontSize="$4">{p.nomeParticipante}</Text>
              <XStack alignItems="center">
                <Text fontSize={'$4'} color={'$borderColorFocus'}>
                  {p.avaliacaoParticipante}
                </Text>
                <StarFull size={'$4'} color={'$borderColorFocus'} />
              </XStack>
            </XStack>

            {statusEvento === StatusEvento.OCORRENDO ? (
              <XStack gap={'$3'}>
                <Button minWidth={'$minWidth'} minHeight={'$minWidth'} backgroundColor={'$color4'}>
                  <Check />
                </Button>
                <Button
                  minWidth={'$minWidth'}
                  minHeight={'$minWidth'}
                  backgroundColor={'$borderColorError'}
                >
                  <XCircle />
                </Button>
              </XStack>
            ) : (
              <Button
                height={'$9'}
                minHeight={'$minWidth'}
                minWidth={'$minWidth'}
                fontSize={'$4'}
                backgroundColor={'$color4'}
              >
                CONFIRMAR <Check />
              </Button>
            )}
          </XStack>
        </Fragment>
      ))}
    </YStack>
  )
}
