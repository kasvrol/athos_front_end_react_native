import { useState } from 'react'
import { useRouter } from 'expo-router'
import { getAdress } from '@/middleware/usuario/singup'
import { DateTimePickerEvent } from '@react-native-community/datetimepicker'

export const CriarEventoModelView = () => {
  const initialValues = {
    titulo: '',
    descricao: '',
    cep: '',
    valor: '',
    numero: '',
    dataEvento: '',
    horaEvento: '',
    selectedEsportes: '',
  }

  const router = useRouter()
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false)
  const [date, setDate] = useState<Date>(new Date())
  const [hour, setHour] = useState<Date>(new Date())
  const [errors, setErrors] = useState(initialValues)
  const [adress, setAdress] = useState({
    endereco: '',
    bairro: '',
    cidade: '',
  })
  const [selectedSports, setSelectedSports] = useState<any[]>([])

  const onDateChange = (_: DateTimePickerEvent, selectedDate?: Date) => {
    if (selectedDate) {
      setDate(selectedDate)
      setShowDatePicker(false)
    }
  }

  const onTimeChange = (_: DateTimePickerEvent, selectedTime?: Date) => {
    if (selectedTime) {
      setHour(selectedTime)
      setShowTimePicker(false)
    }
  }

  const buscarEndereco = async (cep: string, arrayString: string[]) => {
    if (arrayString.length === 8) {
      setIsLoading(true)
      const response = await getAdress(cep)
      setAdress({
        endereco: response.logradouro,
        bairro: response.bairro,
        cidade: response.localidade,
      })
      setErrors(prev => ({
        ...prev,
        cep: '',
      }))
      setIsLoading(false)
    }
  }

  const funcaoValidacao = (
    campo: string,
    valor: string,
    validador: number,
    mensagemErro: string,
  ) => {
    const arrayString = valor.split('')
    setErrors(prev => ({
      ...prev,
      [campo]: arrayString.length >= validador ? '' : mensagemErro,
    }))
  }

  const validacaoCampos = (campo: string, valor?: string) => {
    if (campo === 'titulo' && valor) {
      funcaoValidacao(campo, valor, 6, 'O título deve ter pelo menos 6 caracteres')
    }

    if (campo === 'descricao' && valor) {
      funcaoValidacao(campo, valor, 10, 'A descrição deve ter pelo menos 10 caracteres')
    }

    if (campo === 'numero' && valor) {
      funcaoValidacao(campo, valor, 1, 'O número do endereço deve ter pelo menos 1 número')
    }

    if (campo === 'cep' && valor) {
      const arrayString = valor.split('')
      arrayString.length == 8
        ? buscarEndereco(valor, arrayString)
        : setErrors(prev => ({
            ...prev,
            [campo]: 'O CEP deve ter 8 números',
          }))
    }
  }

  const onSubmit = () => {
    setIsLoading(true)
    //criarEvento

    setIsLoading(false)
    router.push('/(tabs)/recomendacoes')
  }

  return {
    errors,
    adress,
    date,
    showDatePicker,
    showTimePicker,
    hour,
    isLoading,
    selectedSports,
    setSelectedSports,
    setShowTimePicker,
    onDateChange,
    setShowDatePicker,
    validacaoCampos,
    onTimeChange,
  }
}
