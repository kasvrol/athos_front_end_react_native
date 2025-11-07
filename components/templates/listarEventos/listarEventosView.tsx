import LayoutComponent from '@/components/atoms/layout'
import { BasketballLoading } from '@/components/atoms/loading/basketball'
import { CardEvento } from '@/components/organisms/cardEvento'
import HeaderEventosCampeonatosView from '@/components/organisms/headerEventosCampeonatos'
import { useEffect, useState } from 'react'
import { H2, ScrollView, Text, YStack } from 'tamagui'

const todosEventos = [
  {
    titulo: 'Torneio de Futebol Society',
    esporte: 'Futebol',
    data: '26/11/2025',
    horario: '18:30',
    descricao:
      'Campeonato entre equipes locais em formato 7x7. Premiação para os três primeiros colocados.',
    endereco: 'Arena Bola Show - Rua das Palmeiras, 1200, São Paulo - SP',
    valor: 200,
  },
  {
    titulo: 'Circuito de Corrida de Revezamento',
    esporte: 'Corrida',
    data: '26/11/2025',
    horario: '18:30',
    descricao:
      'Equipes de 4 corredores participam de um circuito urbano de 10 km. Medalhas para todos os participantes.',
    endereco: 'Parque do Ibirapuera - Av. Pedro Álvares Cabral, São Paulo - SP',
    valor: 80,
  },
  {
    titulo: 'Campeonato de Vôlei de Praia',
    esporte: 'Vôlei',
    data: '26/11/2025',
    horario: '18:30',
    descricao: 'Duplas e quartetos competem em jogos eliminatórios ao longo do fim de semana.',
    endereco: 'Praia de Copacabana - Rio de Janeiro - RJ',
    valor: 150,
  },
  {
    titulo: 'Desafio de Basquete 3x3',
    esporte: 'Basquete',
    data: '26/11/2025',
    horario: '18:30',
    descricao:
      'Torneio amistoso de basquete em trios. Ideal para grupos de amigos que gostam de competir de forma descontraída.',
    endereco: 'Quadra do Centro Esportivo Municipal, Belo Horizonte - MG',
    valor: 100,
  },
  {
    titulo: 'Trilha em Equipe - Serra da Cantareira',
    esporte: 'Trilha',
    data: '26/11/2025',
    horario: '18:30',
    descricao:
      'Atividade guiada de trilha em grupo, com dinâmicas de cooperação e desafios ao longo do percurso.',
    endereco: 'Parque Estadual da Cantareira - São Paulo - SP',
    valor: 120,
  },
  {
    titulo: 'Campeonato de Paintball',
    esporte: 'Paintball',
    data: '26/11/2025',
    horario: '18:30',
    descricao: 'Equipes disputam partidas em diferentes cenários. Equipamento incluso.',
    endereco: 'Paintball Zone - Estrada da Serra, 800, Curitiba - PR',
    valor: 180,
  },
  {
    titulo: 'Corrida de Obstáculos em Equipe',
    esporte: 'Corrida',
    data: '26/11/2025',
    horario: '18:30',
    descricao:
      'Prova de superação em grupo, com obstáculos naturais e artificiais. Trabalho em equipe é essencial!',
    endereco: 'Fazenda EcoPark - Campinas - SP',
    valor: 160,
  },
  {
    titulo: 'Torneio de Queimada',
    esporte: 'Queimada',
    data: '26/11/2025',
    horario: '18:30',
    descricao:
      'Competição divertida para grupos de amigos ou empresas. Ideal para integração e descontração.',
    endereco: 'Ginásio Municipal de Esportes, Porto Alegre - RS',
    valor: 90,
  },
  {
    titulo: 'Festival de Canoagem em Grupo',
    esporte: 'Canoagem',
    data: '26/11/2025',
    horario: '18:30',
    descricao:
      'Equipes disputam corridas de canoas em um belo lago. Equipamentos e instrutores inclusos.',
    endereco: 'Lago Azul - Florianópolis - SC',
    valor: 140,
  },
  {
    titulo: 'Desafio de Escalada em Duplas',
    esporte: 'Escalada',
    data: '26/11/2025',
    horario: '18:30',
    descricao:
      'Competição amistosa de escalada indoor com rotas desafiadoras para todos os níveis.',
    endereco: 'Climb Zone - Av. das Nações, 45, Brasília - DF',
    valor: 110,
  },
]

function ListarEventosView() {
  const [eventos, setEventos] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    setIsLoading(true)
    //const todosEventos = buscarEventos()
    setEventos(todosEventos)
    setIsLoading(false)
  }, [])

  return (
    <ScrollView backgroundColor={'$background'} padding={'$2'}>
      <H2 color="$color10" fontFamily={'$body'} fontWeight={'700'} textAlign='center' marginVertical={'$3'}>Lista de Eventos</H2>
      <YStack>
        <HeaderEventosCampeonatosView
          routerButton={'/(tabs)/criarEvento'}
          titleButton="CRIAR EVENTO"
        />
      </YStack>

      {isLoading && <BasketballLoading />}

      {error && <BasketballLoading />}
      <YStack>
        {!error && !isLoading && eventos.length > 0 ? (
          eventos.map((evento, index) => <CardEvento key={index} {...evento} />)
        ) : (
          <Text>Nenhum evento encontrado.</Text>
        )}
      </YStack>
    </ScrollView>
  )
}

export default ListarEventosView
