import { CanceledButton } from '@/components/atoms/buttons/canceledButton'
import { ConfirmButton } from '@/components/atoms/buttons/confirmButton'
import { Edit3, UserMinus2, UserPlus2 } from '@tamagui/lucide-icons'
import { router } from 'expo-router'
import { Dispatch, SetStateAction, useState } from 'react'
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
  const [open, setOpen] = useState<boolean>(false)

  const ConfirmarDeletarEvento = () => {
    return (
      <YStack>
        Deseja realmente excluir o evento?
        <YStack>
          <ConfirmButton
            titleButton={'NÃO'}
            functionButton={() => setOpen(!open)}
            icon={<Edit3 />}
          />
          <CanceledButton
            disabled={false}
            width={'100%'}
            message={'SIM'}
            display={'flex'}
            onPress={() => router.back()}
          />
        </YStack>
      </YStack>
    )
  }

  const onChangeParticipant = () => {
    setIsLoading(true)
    if (isParticipant) {
      //const postParticipante = postParticipant(idEvento, idParticipant)
      setIsParticipant(false)
    } else {
      //const postParticipante = postParticipant(idEvento, idParticipant)
      setIsParticipant(true)
    }

    setIsLoading(false)
  }

  const ItNotIsParticipant = () => {
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
          onPress={() => router.push('/(tabs)/menu/historico')}
        />
      </YStack>
    )
  }

  const ItIsParticipant = () => {
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
          onPress={() => router.push('/(tabs)/menu/historico')}
        />
      </YStack>
    )
  }

  const ItIsOwner = () => {
    return (
      <YStack width={'100%'} gap={'$4'} paddingVertical={'$4'}>
        <ConfirmButton
          titleButton={'EDITAR EVENTO'}
          functionButton={() => router.push('/(tabs)/eventos/criarEvento')}
          icon={<Edit3 />}
        />
        <CanceledButton
          disabled={false}
          width={'100%'}
          message={'DELETAR EVENTO'}
          display={'flex'}
          onPress={() => setOpen(!open)}
        />
      </YStack>
    )
  }
  console.log(idUser == idCriador)
  console.log(idUser)
  console.log(idCriador)

  return (
    <YStack>
      {open && ConfirmarDeletarEvento()}
      {idUser === idCriador
        ? ItIsOwner()
        : isParticipant
          ? ItNotIsParticipant()
          : ItIsParticipant()}
    </YStack>
  )
}
