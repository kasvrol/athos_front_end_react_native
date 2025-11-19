import React, { useState, useEffect } from 'react'
import { Modal } from 'react-native'
import { YStack, XStack, Text, Button, Input, H3, Label, Switch } from 'tamagui'
import { CampeonatoStatus, Partida } from '@/utils/interfaces/campeonatos'
import { Save, X, CheckCircle2 } from '@tamagui/lucide-icons'

interface ModalGerenciarPartidaProps {
  visible: boolean
  onClose: () => void
  onSave: (partidaId: string, placar1: number, placar2: number, finalizado: boolean) => void
  partida: Partida | null
}

export const ModalGerenciarPartida = ({
  visible,
  onClose,
  onSave,
  partida,
}: ModalGerenciarPartidaProps) => {
  const [placar1, setPlacar1] = useState('')
  const [placar2, setPlacar2] = useState('')
  const [isFinalizado, setIsFinalizado] = useState(false)

  useEffect(() => {
    if (partida) {
      setPlacar1(partida.placarEquipe1?.toString() ?? '0')
      setPlacar2(partida.placarEquipe2?.toString() ?? '0')
      setIsFinalizado(partida.status === CampeonatoStatus.FINALIZADO)
    }
  }, [partida])

  const handleSave = () => {
    if (partida) {
      onSave(partida.id, parseInt(placar1) || 0, parseInt(placar2) || 0, isFinalizado)
      onClose()
    }
  }

  if (!partida) return null

  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={onClose}>
      <YStack
        flex={1}
        justifyContent="center"
        alignItems="center"
        backgroundColor="rgba(0,0,0,0.8)"
        padding="$4"
      >
        <YStack
          width="100%"
          maxWidth={350}
          backgroundColor="$background"
          borderRadius="$4"
          padding="$4"
          gap="$4"
          borderWidth={1}
          borderColor="$borderColor"
        >
          <XStack justifyContent="flex-end" alignItems="center" width={'100%'}>
            <Button
              height={'$minWidth'}
              width={'$minWidth'}
              chromeless
              icon={X}
              onPress={onClose}
              color="$color"
            />
          </XStack>
          <XStack justifyContent="center" width={'100%'}>
            <H3 textAlign="center" fontSize="$6" color="$color9" fontWeight={'700'}>
              Gerenciar Placar
            </H3>
          </XStack>

          <XStack alignItems="center" justifyContent="space-between" gap="$2">
            <YStack alignItems="center" flex={1}>
              <Text fontWeight="bold" numberOfLines={1} marginBottom="$2">
                {partida.equipe1.nome}
              </Text>
              <Input
                value={placar1}
                onChangeText={setPlacar1}
                keyboardType="numeric"
                textAlign="center"
                fontSize="$6"
                fontWeight="bold"
                height="$9"
                width="$8"
                backgroundColor="$backgroundPress"
                borderColor="$borderColorFocus"
              />
            </YStack>

            <Text fontSize="$6" fontWeight="bold" color="$color5">
              X
            </Text>

            <YStack alignItems="center" flex={1}>
              <Text fontWeight="bold" numberOfLines={1} marginBottom="$2">
                {partida.equipe2.nome}
              </Text>
              <Input
                value={placar2}
                onChangeText={setPlacar2}
                keyboardType="numeric"
                textAlign="center"
                fontSize="$6"
                fontWeight="bold"
                height="$9"
                width="$8"
                backgroundColor="$backgroundPress"
                borderColor="$borderColorFocus"
              />
            </YStack>
          </XStack>

          <XStack
            alignItems="center"
            justifyContent="space-between"
            backgroundColor="$backgroundPress"
            padding="$3"
            borderRadius="$3"
          >
            <Label htmlFor="finalizar-switch" color="$color" paddingRight="$0" minWidth={100}>
              Finalizar Partida?
            </Label>
            <Switch
              id="finalizar-switch"
              size="$7"
              checked={isFinalizado}
              onCheckedChange={setIsFinalizado}
              backgroundColor={isFinalizado ? '$color9' : '$color4'}
            >
              <Switch.Thumb />
            </Switch>
          </XStack>

          <Button
            onPress={handleSave}
            backgroundColor={isFinalizado ? '$color9' : '$color4'}
            color="$background"
            fontWeight="bold"
            height={'$9'}
            icon={isFinalizado ? CheckCircle2 : Save}
            marginTop="$2"
            fontSize={'$4'}
          >
            {isFinalizado ? 'SALVAR E FINALIZAR' : 'ATUALIZAR PLACAR'}
          </Button>
        </YStack>
      </YStack>
    </Modal>
  )
}
