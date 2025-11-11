import LayoutComponent from '@/components/atoms/layout'
import LayoutDefault from '@/components/atoms/layoutDefault'
import { BasketballLoading } from '@/components/atoms/loading/basketball'
import { ChoiceButton } from '@/components/molecules/choiceButton'
import { EventScreen } from '@/components/organisms/evento'
import { eventosCompletos, participantesEvento } from '@/mock/eventosEsportivos'
import { useUserStore } from '@/store/UserStore'
import { EventoType, StatusEvento } from '@/utils/interfaces/eventos'
import { useEffect, useState } from 'react'

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

export default function VisualizarEvento() {
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
      <EventScreen
        dadosEvento={dadosEventos}
        participants={[]}
        statusEvento={StatusEvento.PENDENTE}
      />
      <ChoiceButton
        idCriador={dadosEventos.organizador.idOrganizador}
        idUser={user?.id!}
        isParticipant={isParticipant}
        setIsLoading={setIsLoading}
        setIsParticipant={setIsParticipant}
      />
    </LayoutDefault>
  )
}
