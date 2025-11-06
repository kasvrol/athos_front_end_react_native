interface ConvidadosFormProps {
  listaConvidados: string[]
  setOpenConvites: (value: boolean) => void
  setListaConvidados: (prev: any) => void
}

export const FormConvidadosViewModel = ({
  listaConvidados,
  setListaConvidados,
  setOpenConvites,
}: ConvidadosFormProps) => {
  const handleConvidadoChange = (text: string, index: number) => {
    const novaLista = [...listaConvidados]
    novaLista[index] = text
    setListaConvidados(novaLista)
  }

  const handleAdicionarConvidado = () => {
    setListaConvidados((prev: any) => [...prev, ''])
  }

  const handleRemoverConvidado = (index: number) => {
    if (listaConvidados.length <= 1) return

    const novaLista = listaConvidados.filter((_, i) => i !== index)
    setListaConvidados(novaLista)
  }

  const handleCancelarConvites = () => {
    setListaConvidados([''])
    setOpenConvites(false)
  }

  return {
    handleConvidadoChange,
    handleAdicionarConvidado,
    handleRemoverConvidado,
    handleCancelarConvites,
  }
}
