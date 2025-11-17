import LayoutDefault from '@/components/atoms/layoutDefault'
import { BasketballLoading } from '@/components/atoms/loading/basketball'
import { ChoiceButton } from '@/components/molecules/choiceButton'
import { ListarParticipantes } from '@/components/molecules/listarParticipantes'
import { EventScreen } from '@/components/organisms/evento'
import { eventosCompletos, participantesEvento } from '@/mock/eventosEsportivos'
import { useUserStore } from '@/store/UserStore'
import { EventoType, StatusEvento } from '@/utils/interfaces/eventos'
import { useEffect, useState } from 'react'
import { YStack } from 'tamagui'

const eventoVazio: EventoType = {
  titulo: '',
  descricao: '',
  esporte: '',
  endereco: '',
  valor: 0,
  data: '',
  horario: '',
  qtdVagas: 0,
  user: null,
  organizador: {
    idOrganizador: '',
    nomeOrganizador: '',
    avaliacaoOrganizador: 0.0,
  },
}

export default function visualizarEventoFuturo() {
  const [dadosEventos, setDadosEvento] = useState<EventoType>(eventoVazio)
  const [participantes, setParticipantes] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isParticipant, setIsParticipant] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const user = useUserStore(state => state.user)

  useEffect(() => {
    setDadosEvento(eventosCompletos[0])
    setParticipantes(participantesEvento)
    const usuarioJaEhParticipante = participantesEvento.find(
      participante => participante.idParticipante === user?.id,
    )
    setIsParticipant(usuarioJaEhParticipante?.nomeParticipante ? true : false)
  }, [])
  return (
    <LayoutDefault>
      {isLoading && <BasketballLoading />}
      <YStack paddingBottom={'$4'}>
        <EventScreen dadosEvento={dadosEventos} statusEvento={StatusEvento.PENDENTE} />
        {user?.id === dadosEventos.organizador.idOrganizador && (
          <ListarParticipantes
            participants={participantesEvento}
            statusEvento={StatusEvento.PENDENTE}
          />
        )}
        <ChoiceButton
          idCriador={dadosEventos.organizador.idOrganizador}
          idUser={user?.id!}
          isParticipant={isParticipant}
          setIsLoading={setIsLoading}
          setIsParticipant={setIsParticipant}
        />
      </YStack>
    </LayoutDefault>
  )
}
