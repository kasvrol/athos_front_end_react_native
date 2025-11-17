export enum CampeonatoStatus {
  INSCRICOES_ABERTAS = 'INSCRICOES_ABERTAS',
  INSCRICOES_FECHADAS = 'INSCRICOES_FECHADAS',
  EM_ANDAMENTO = 'EM_ANDAMENTO',
  FINALIZADO = 'FINALIZADO',
  CANCELADO = 'CANCELADO',
}

export interface Campeonato {
  id: string
  nome: string
  esporte: string
  dataInscricaoInicio: string
  dataInscricaoFim: string
  dataInicio: string
  dataFim: string
  formato: 'PONTOS_CORRIDOS' | 'MATA_MATA' | 'GRUPOS'
  organizadorId: string
  status: CampeonatoStatus
  maxEquipes: number
  descricao: string
  equipesInscritas: number
  createdAt: string
}

export interface Equipe {
  id: string
  nome: string
  capitaoId: string
  campeonatoId: string
  membros: MembroEquipe[]
  createdAt: string
}

export interface MembroEquipe {
  usuarioId: string
  nomeUsuario: string
  dataEntrada: string
}

export interface Partida {
  id: string
  campeonatoId: string
  equipe1: Equipe
  equipe2: Equipe
  placarEquipe1?: number
  placarEquipe2?: number
  data: string
  horario: string
  fase: string
  status: 'PENDENTE' | 'FINALIZADA'
}

export type CriarCampeonatoDTO = Omit<
  Campeonato,
  'id' | 'organizadorId' | 'status' | 'equipesInscritas' | 'createdAt'
>
export type CriarEquipeDTO = Pick<Equipe, 'nome' | 'campeonatoId'>
export type AtualizarPlacarDTO = Pick<Partida, 'placarEquipe1' | 'placarEquipe2' | 'status'>

export interface Classificacao {
  equipe: Equipe
  pontos: number
  jogos: number
  vitorias: number
  empates: number
  derrotas: number
}
