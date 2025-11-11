interface OrganizadorEvento {
  idOrganizador: string
  nomeOrganizador: string
  avaliacaoOrganizador: number
}

export type EventoType = {
  titulo: string
  descricao: string
  esporte: string
  endereco: string
  valor: number
  data: string
  horario: string
  qtdVagas: number
  user: any
  organizador: OrganizadorEvento
}

export enum StatusEvento {
  PENDENTE = 'PENDENTE',
  OCORRENDO = 'OCORRENDO',
  PASSADO = 'PASSADO',
}

export interface EventoScreenProps {
  dadosEvento: EventoType
  participants: any
  statusEvento: StatusEvento
}
