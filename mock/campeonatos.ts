import {
  Campeonato,
  Equipe,
  MembroEquipe,
  Partida,
  CampeonatoStatus,
  Classificacao,
} from '@/utils/interfaces/campeonatos'

export const mockMembrosEquipe1: MembroEquipe[] = [
  { usuarioId: 'user-capitao-1', nomeUsuario: 'Carlos (Capitão)', dataEntrada: '2025-10-01' },
  { usuarioId: 'user-2', nomeUsuario: 'Ana Beatriz', dataEntrada: '2025-10-02' },
  { usuarioId: 'user-3', nomeUsuario: 'Bruno Costa', dataEntrada: '2025-10-03' },
]

export const mockMembrosEquipe2: MembroEquipe[] = [
  { usuarioId: 'user-capitao-2', nomeUsuario: 'Fernanda (Capitã)', dataEntrada: '2025-10-01' },
  { usuarioId: 'user-5', nomeUsuario: 'Diego Alves', dataEntrada: '2025-10-04' },
]

export const mockMembrosEquipe3: MembroEquipe[] = [
  { usuarioId: 'user-capitao-3', nomeUsuario: 'Gabriel (Capitão)', dataEntrada: '2025-10-05' },
]

export const mockMembrosEquipe4: MembroEquipe[] = [
  { usuarioId: 'user-capitao-4', nomeUsuario: 'Helena (Capitã)', dataEntrada: '2025-10-06' },
  { usuarioId: 'user-8', nomeUsuario: 'Igor Matos', dataEntrada: '2025-10-07' },
  { usuarioId: 'user-9', nomeUsuario: 'Julia Lima', dataEntrada: '2025-10-08' },
]

export const mockEquipes: Equipe[] = [
  {
    id: 'equipe-1',
    nome: 'Os Velozes',
    capitaoId: 'user-capitao-1',
    campeonatoId: 'camp-1',
    membros: mockMembrosEquipe1,
    createdAt: '2025-10-01',
  },
  {
    id: 'equipe-2',
    nome: 'Furiosos FC',
    capitaoId: 'user-capitao-2',
    campeonatoId: 'camp-1',
    membros: mockMembrosEquipe2,
    createdAt: '2025-10-01',
  },
  {
    id: 'equipe-3',
    nome: 'Raio FC',
    capitaoId: 'user-capitao-3',
    campeonatoId: 'camp-1',
    membros: mockMembrosEquipe3,
    createdAt: '2025-10-05',
  },
  {
    id: 'equipe-4',
    nome: 'Trovão Azul',
    capitaoId: 'user-capitao-4',
    campeonatoId: 'camp-1',
    membros: mockMembrosEquipe4,
    createdAt: '2025-10-06',
  },
  {
    id: 'equipe-5',
    nome: 'Vôlei Masters',
    capitaoId: 'user-capitao-5',
    campeonatoId: 'camp-2',
    membros: [
      { usuarioId: 'user-capitao-5', nomeUsuario: 'Laura (Capitã)', dataEntrada: '2025-10-10' },
    ],
    createdAt: '2025-10-10',
  },
  {
    id: 'equipe-6',
    nome: 'Sacadores',
    capitaoId: 'user-capitao-6',
    campeonatoId: 'camp-2',
    membros: [
      { usuarioId: 'user-capitao-6', nomeUsuario: 'Marcos (Capitão)', dataEntrada: '2025-10-11' },
    ],
    createdAt: '2025-10-11',
  },
]

export const mockPartidas: Partida[] = [
  {
    id: 'partida-1',
    campeonatoId: 'camp-1',
    equipe1: mockEquipes[0],
    equipe2: mockEquipes[1],
    placarEquipe1: 2,
    placarEquipe2: 1,
    data: '2025-11-20',
    horario: '19:00',
    fase: 'Rodada 1',
    status: CampeonatoStatus.FINALIZADO,
  },
  {
    id: 'partida-2',
    campeonatoId: 'camp-1',
    equipe1: mockEquipes[2],
    equipe2: mockEquipes[3],
    placarEquipe1: undefined,
    placarEquipe2: undefined,
    data: '2025-11-20',
    horario: '20:00',
    fase: 'Rodada 1',
    status: CampeonatoStatus.EM_ANDAMENTO,
  },
  {
    id: 'partida-3',
    campeonatoId: 'camp-1',
    equipe1: mockEquipes[0],
    equipe2: mockEquipes[2],
    placarEquipe1: undefined,
    placarEquipe2: undefined,
    data: '2025-11-27',
    horario: '19:00',
    fase: 'Rodada 2',
    status: CampeonatoStatus.EM_ANDAMENTO,
  },
]

export const mockClassificacao: Classificacao[] = [
  { equipe: mockEquipes[0], pontos: 3, vitorias: 1, derrotas: 0, empates: 0, jogos: 1 },
  { equipe: mockEquipes[2], pontos: 0, vitorias: 0, derrotas: 0, empates: 0, jogos: 0 },
  { equipe: mockEquipes[3], pontos: 0, vitorias: 0, derrotas: 0, empates: 0, jogos: 0 },
  { equipe: mockEquipes[1], pontos: 0, vitorias: 0, derrotas: 1, empates: 0, jogos: 1 },
]

export const mockCampeonatos: Campeonato[] = [
  {
    id: 'camp-1',
    nome: 'Copa Athos de Futebol 7',
    esporte: 'Futebol Society',
    dataInscricaoInicio: '2025-10-01',
    dataInscricaoFim: '2025-10-30',
    dataInicio: '2025-11-20',
    dataFim: '2025-12-18',
    formato: 'PONTOS_CORRIDOS',
    organizadorId: 'user-organizador-id',
    status: CampeonatoStatus.EM_ANDAMENTO,
    maxEquipes: 8,
    equipesInscritas: 4,
    descricao:
      'A primeira copa oficial de Futebol 7 da plataforma Athos. Reúna sua equipe e venha competir pelo troféu!',
    createdAt: '2025-09-30',
  },
  {
    id: 'camp-2',
    nome: 'Torneio de Vôlei de Praia - Verão 2026',
    esporte: 'Vôlei de Praia',
    dataInscricaoInicio: '2025-11-01',
    dataInscricaoFim: '2025-12-15',
    dataInicio: '2026-01-10',
    dataFim: '2026-01-11',
    formato: 'MATA_MATA',
    organizadorId: 'user-outro-id',
    status: CampeonatoStatus.INSCRICOES_ABERTAS,
    maxEquipes: 16,
    equipesInscritas: 2,
    descricao: 'Torneio de duplas e quartetos em formato eliminatório. Inscrições abertas!',
    createdAt: '2025-10-28',
  },
  {
    id: 'camp-4',
    nome: 'Campeonato de Tênis de Duplas',
    esporte: 'Tênis',
    dataInscricaoInicio: '2025-09-01',
    dataInscricaoFim: '2025-09-30',
    dataInicio: '2025-10-10',
    dataFim: '2025-10-25',
    formato: 'GRUPOS',
    organizadorId: 'user-outro-id',
    status: CampeonatoStatus.INSCRICOES_FECHADAS,
    maxEquipes: 16,
    equipesInscritas: 16,
    descricao: 'Inscrições encerradas. Aguardando geração da tabela.',
    createdAt: '2025-08-30',
  },
  {
    id: 'camp-3',
    nome: 'Liga de Basquete 3x3 - Edição Outono',
    esporte: 'Basquete 3x3',
    dataInscricaoInicio: '2025-03-01',
    dataInscricaoFim: '2025-03-30',
    dataInicio: '2025-04-10',
    dataFim: '2025-05-01',
    formato: 'PONTOS_CORRIDOS',
    organizadorId: 'user-organizador-id',
    status: CampeonatoStatus.FINALIZADO,
    maxEquipes: 8,
    equipesInscritas: 8,
    descricao: 'A liga de basquete 3x3 foi um sucesso. Confira os resultados.',
    createdAt: '2025-02-25',
  },
]
