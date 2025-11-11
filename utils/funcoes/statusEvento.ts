import { StatusEvento } from '../interfaces/eventos'

export function getStatusEvento(dataReferencia: string, horarioReferencia: string): StatusEvento {
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
