import { CanceledButton } from '@/components/atoms/buttons/canceledButton'
import { ConfirmButton } from '@/components/atoms/buttons/confirmButton'
import { Edit3, UserMinus2, UserPlus2 } from '@tamagui/lucide-icons'
import { router } from 'expo-router'
import { Dispatch, SetStateAction } from 'react'
import { YStack } from 'tamagui'

interface ChoiceButtonProps {
  idUser: string
  idCriador: string
  isParticipant: boolean
  setIsParticipant: Dispatch<SetStateAction<boolean>>
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

export const ChoiceButton = ({
  idUser,
  idCriador,
  isParticipant,
  setIsParticipant,
  setIsLoading,
}: ChoiceButtonProps) => {
  const onChangeParticipant = () => {
    setIsLoading(true)
    if (isParticipant) {
      //const postParticipante = postParticipant(idEvento, idParticipant)
      setIsParticipant(true)
    } else {
      //const postParticipante = postParticipant(idEvento, idParticipant)
      setIsParticipant(false)
    }

    setIsLoading(false)
  }

  if (idUser === idCriador) {
    return (
      <YStack>
        <ConfirmButton
          titleButton={'EDITAR EVENTO'}
          functionButton={() => router.push('/criarEvento')}
          icon={<Edit3 />}
        />
        <CanceledButton
          disabled={false}
          width={'100%'}
          message={'DELETAR EVENTO'}
          display={'flex'}
          onPress={() => router.push('/criarEvento')}
        />
      </YStack>
    )
  } else if (isParticipant) {
    return (
      <YStack width={'100%'} gap={'$4'} paddingVertical={'$4'}>
        <ConfirmButton
          titleButton={'DESISTIR'}
          functionButton={() => onChangeParticipant()}
          icon={<UserMinus2 />}
        />

        <CanceledButton
          disabled={false}
          width={'100%'}
          message={'VOLTAR'}
          display={'flex'}
          onPress={() => router.back()}
        />
      </YStack>
    )
  }
  return (
    <YStack width={'100%'} gap={'$4'} paddingVertical={'$4'}>
      <ConfirmButton
        titleButton={'PARTICIPAR'}
        functionButton={() => onChangeParticipant()}
        icon={<UserPlus2 />}
      />

      <CanceledButton
        disabled={false}
        width={'100%'}
        message={'VOLTAR'}
        display={'flex'}
        onPress={() => router.back()}
      />
    </YStack>
  )
}
