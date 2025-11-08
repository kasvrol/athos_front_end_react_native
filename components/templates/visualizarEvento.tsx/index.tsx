// import React, { useState } from 'react';
import LayoutComponent from '@/components/atoms/layout'
import { RenderOrganizerView } from '@/components/molecules/gerenciarParticipantes'
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
import { useEffect, useState } from 'react'
import {
  Button,
  YStack,
  XStack,
  Text,
} from 'tamagui'

type EventoProps = {
  titulo: string
  descricao: string
  esporte: string
  endereco: string
  valor: number
  data: string
  horario: string
  qtdVagas: number
  user: any
  participants: any[]
  idCriador: string
}

enum StatusEvento {
  PENDENTE = 'PENDENTE',
  OCORRENDO = 'OCORRENDO',
  PASSADO = 'PASSADO',
}

const buttons = (idCriador: string, isParticipant: boolean) => {
  if (idUser === idCriador) {
    return (
      <YStack>
        <Button>EDITAR EVENTO</Button>
        <Button>DELETAR EVENTO</Button>
      </YStack>
    )
  } else if (isParticipant) {
    return <Button>DESISTIR</Button>
  }
  return <Button>PARTICIPAR</Button>
}

export const EventHistoryScreen = () => {
  const [dados, setDados] = useState<EventoProps>()
  const [isParticipant, setIsParticipant] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    //setDados()
  }, [])

  function getStatusEvento(dataReferencia: string, horarioReferencia: string): StatusEvento {
    const dateTimeStr = `${dataReferencia}T${horarioReferencia}:00`
    const dataCompleta = new Date(dateTimeStr)
    const agora = new Date()
    const diffMs = agora.getTime() - dataCompleta.getTime()
    const diffHoras = diffMs / (1000 * 60 * 60)

    if (diffHoras < 0) {
      return StatusEvento.PENDENTE
    } else if (diffHoras <= 24) {
      return StatusEvento.OCORRENDO
    } else {
      return StatusEvento.PASSADO
    }
  }

  const statusEvento = getStatusEvento(dados?.data, dados?.horario)

  return (
    <LayoutComponent>
      <Text fontSize="$5" fontWeight={'500'} color={'$borderColorFocus'} marginBottom={'$1'}>
        {dados.titulo}
      </Text>
      <YStack width={'100%'} gap={'$4'}>
        <XStack alignItems="center" gap="$2" justifyContent="space-between">
          <XStack alignItems="center" gap="$2" justifyContent="flex-start">
            <Dribbble fontSize="$1" color={'$borderColorFocus'} />
            <Text textAlign="justify" fontSize="$4">
              {dados.esporte}
            </Text>
          </XStack>
          <XStack alignItems="center" gap="$2" justifyContent="flex-start">
            <BadgeDollarSign fontSize="$1" color={'$borderColorFocus'} />
            <Text textAlign="justify" fontSize="$4">
              Participação:{' '}
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                dados.valor,
              )}
            </Text>
          </XStack>
        </XStack>
        <XStack alignItems="center" gap="$2" justifyContent="space-between">
          <XStack alignItems="center" gap="$2" justifyContent="flex-start">
            <CalendarDays fontSize="$1" color={'$borderColorFocus'} />
            <Text textAlign="justify" fontSize="$4">
              Data: {dayjs(dados.data).format('DD/MM/YYYY')}
            </Text>
          </XStack>
          <XStack alignItems="center" gap="$2" justifyContent="flex-start">
            <Watch fontSize="$1" color={'$borderColorFocus'} />
            <Text textAlign="justify" fontSize="$4">
              Horário: {dados.horario}
            </Text>
          </XStack>
        </XStack>
        <XStack alignItems="center" gap="$2" justifyContent="flex-start">
          <ScrollText fontSize="$1" color={'$borderColorFocus'} />
          <Text textAlign="justify" width={'90%'} fontSize="$4">
            {dados.descricao}
          </Text>
        </XStack>
        <XStack alignItems="center" gap="$2" justifyContent="space-between">
          <XStack alignItems="center" gap="$2" justifyContent="flex-start">
            <Users2 fontSize="$1" color={'$borderColorFocus'} />
            <Text textAlign="justify" width={'90%'} fontSize="$4">
              Quantidade de vagas:{dados.qtdVagas}
            </Text>
          </XStack>
          <XStack alignItems="center" gap="$2" justifyContent="flex-start">
            <UserPen fontSize="$1" color={'$borderColorFocus'} />
            <Text textAlign="justify" width={'90%'} fontSize="$4">
              Organizador:{dados.user}
            </Text>
          </XStack>
        </XStack>
      </YStack>

      <XStack alignItems="center" gap="$2">
        <MapPinHouse fontSize="$1" color={'$borderColorFocus'} />
        <Text textAlign="left" width={'90%'}>
          {dados.endereco}
        </Text>
      </XStack>

      {statusEvento === StatusEvento.OCORRENDO ? (
        <RenderOrganizerView participants={dados.participants} />
      ) : statusEvento === StatusEvento.PASSADO ? (
        ''
      ) : (
        buttons(dados.idCriador, isParticipant)
      )}
    </LayoutComponent>
  )
}
