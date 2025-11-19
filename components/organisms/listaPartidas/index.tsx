import { CampeonatoStatus, Partida } from '@/utils/interfaces/campeonatos'
import dayjs from 'dayjs'
import { Fragment } from 'react'
import { Separator, XStack, YStack, Text, Button } from 'tamagui'

interface ListaPartida {
  partidas: Partida[]
  isOrganizador: boolean
  onEditPress: (partida: Partida) => void
}

export const ListaPartida = ({ partidas, isOrganizador, onEditPress }: ListaPartida) => (
  <YStack gap="$3" width="100%">
    {partidas.map((partida, index) => (
      <Fragment key={partida.id}>
        {index > 0 && <Separator />}
        <YStack
          padding="$3"
          borderWidth={1}
          borderColor={partida.status === CampeonatoStatus.FINALIZADO ? '$color5' : '$borderColor'}
          borderRadius="$4"
          gap="$2"
        >
          <Text fontSize="$3" color="$color5" textAlign="center">
            {partida.fase} - {dayjs(partida.data).format('DD/MM')} às {partida.horario}
          </Text>
          <XStack justifyContent="space-around" alignItems="center">
            <Text fontSize="$5" fontWeight="bold">
              {partida.equipe1.nome}
            </Text>
            <Text fontSize="$6" fontWeight="bold">
              {partida.status === CampeonatoStatus.FINALIZADO
                ? `${partida.placarEquipe1} x ${partida.placarEquipe2}`
                : 'VS'}
            </Text>
            <Text fontSize="$5" fontWeight="bold">
              {partida.equipe2.nome}
            </Text>
          </XStack>

            <Button
              size="$2"
              chromeless
              backgroundColor="$color4"
              color={'white'}
              borderRadius={'$3'}
              height={'$10'}
              minHeight={'$minWidth'}
              minWidth={'$minWidth'}
              fontSize={'$5'}
              fontWeight={'500'}
              onPress={() => onEditPress(partida)}
            >
              Editar Placar
            </Button>
        </YStack>
      </Fragment>
    ))}
  </YStack>
)
