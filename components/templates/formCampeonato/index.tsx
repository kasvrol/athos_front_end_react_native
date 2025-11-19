import React, { useState } from 'react'
import {
  Form,
  H2,
  Input,
  Label,
  Button,
  YStack,
  ScrollView,
  Spinner,
  Text,
  TextArea,
  XStack,
} from 'tamagui'
import LayoutComponent from '@/components/atoms/layout'
// import { createCampeonato } from '@/middleware/campeonato/service';
import { router, useRouter } from 'expo-router'
import { CriarCampeonatoDTO } from '@/utils/interfaces/campeonatos'
import { Bike, Calendar, Clock, Edit3, Info, MapPin } from '@tamagui/lucide-icons'
import CheckEsportesScreen from '@/components/molecules/checkEsportes/CheckEsportesScreen'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { getAdress } from '@/middleware/usuario/singup'
import { esportes } from '@/mock/esportes'
import LayoutDefault from '@/components/atoms/layoutDefault'

export default function FormCampeonato() {
  const initialValues = {
    nomeCampeonato: '',
    numIntegrantes: '',
    descricao: '',
    maxEquipes: '',
    dataEvento: '',
    horaEvento: '',
    cep: '',
    numero: '',
    endereco: '',
    bairro: '',
    cidade: '',
  }

  const [formValues, setFormValues] = useState(initialValues)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Record<string, string>>({})
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false)
  const [date, setDate] = useState(new Date())
  const [hour, setHour] = useState(new Date())
  const [selectedSports, setSelectedSports] = useState<string[]>([])
  const [adress, setAdress] = useState({
    endereco: '',
    bairro: '',
    cidade: '',
  })

  const onDateChange = (_: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDate(selectedDate)
      setFormValues(prev => ({
        ...prev,
        dataEvento: selectedDate.toLocaleDateString('pt-BR'),
      }))
      setShowDatePicker(false)
    }
  }

  const onTimeChange = (_: any, selectedTime?: Date) => {
    if (selectedTime) {
      setHour(selectedTime)
      setFormValues(prev => ({
        ...prev,
        horaEvento: selectedTime.toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      }))
      setShowTimePicker(false)
    }
  }

  const buscarEndereco = async (cep: string) => {
    if (cep.length === 8) {
      setIsLoading(true)
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json()

        if (data.erro) {
          setError(prev => ({
            ...prev,
            cep: 'CEP não encontrado.',
          }))
        } else {
          setAdress({
            endereco: data.logradouro || '',
            bairro: data.bairro || '',
            cidade: data.localidade || '',
          })
          setFormValues(prev => ({
            ...prev,
            endereco: data.logradouro || '',
            bairro: data.bairro || '',
            cidade: data.localidade || '',
          }))
          setError(prev => ({
            ...prev,
            cep: '',
          }))
        }
      } catch (err) {
        setError(prev => ({
          ...prev,
          cep: 'Erro ao buscar endereço. Verifique o CEP.',
        }))
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormValues(prev => ({
      ...prev,
      [field]: value,
    }))

    validacaoCampos(field, value)

    if (field === 'cep' && value.length === 8) {
      buscarEndereco(value)
    }
  }

  const validacaoCampos = (campo: string, valor?: string) => {
    const validacoes: Record<string, { minLength: number; mensagem: string }> = {
      nomeCampeonato: {
        minLength: 6,
        mensagem: 'O nome deve ter pelo menos 6 caracteres',
      },
      maxEquipes: {
        minLength: 1,
        mensagem: 'O número máximo de equipes é obrigatório',
      },
      numIntegrantes: {
        minLength: 1,
        mensagem: 'O número mínimo de integrantes da equipe é obrigatório',
      },
      cep: { minLength: 8, mensagem: 'O CEP deve ter 8 números' },
      numero: { minLength: 1, mensagem: 'O número é obrigatório' },
    }

    if (validacoes[campo] && valor) {
      const { minLength, mensagem } = validacoes[campo]
      setError(prev => ({
        ...prev,
        [campo]: valor.length >= minLength ? '' : mensagem,
      }))
    } else if (!valor) {
      setError(prev => ({
        ...prev,
        [campo]: '',
      }))
    }
  }

  const onSubmit = async () => {
    setIsLoading(true)

    const hasErrors = Object.values(error).some(err => err !== '')
    if (hasErrors) {
      setIsLoading(false)
      return
    }

    try {
      console.log('Campeonato criado com sucesso!', formValues)
      setIsLoading(false)
      router.push('/(tabs)/recomendacoes')
    } catch (err) {
      setError(prev => ({
        ...prev,
        submit: 'Erro ao criar o campeonato. Tente novamente.',
      }))
      setIsLoading(false)
    }
  }
  return (
    <LayoutComponent>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        width={'100%'}
      >
        <H2 color="$color10" fontFamily="$body" fontWeight="700" textAlign="center" mb="$4">
          Novo Campeonato
        </H2>

        <Form onSubmit={onSubmit} gap="$4" paddingBottom="$4">
          <YStack gap="$1">
            <Label htmlFor="nomeCampeonato" color="$color">
              <Edit3 size={16} color="$borderColorFocus" />
              Nome do Campeonato
            </Label>
            <Input
              id="nomeCampeonato"
              placeholder="Nome do campeonato"
              value={formValues.nomeCampeonato}
              onChangeText={v => handleInputChange('nomeCampeonato', v)}
              borderColor={error.nomeCampeonato ? '$borderColorError' : '$borderColorFocus'}
              height={'$9'}
            />
            {error.nomeCampeonato && (
              <Text color="$borderColorError" fontSize="$2">
                {error.nomeCampeonato}
              </Text>
            )}
          </YStack>

          <YStack gap="$2">
            <Text fontFamily="$body" color="$color" marginBottom="$1">
              <Bike size={16} color="$borderColorFocus" /> ESPORTES
            </Text>
            <YStack
              borderWidth={1}
              borderRadius="$4"
              padding="$3"
              borderColor={
                !selectedSports.length || selectedSports.length > 1
                  ? '$borderColorError'
                  : '$borderColorFocus'
              }
            >
              <CheckEsportesScreen
                selectedSports={selectedSports}
                setSelectedSports={setSelectedSports}
              />
            </YStack>

            {(!selectedSports.length || selectedSports.length > 1) && (
              <Text color="$borderColorError" fontSize="$4" paddingLeft="$1">
                Selecione um esporte!
              </Text>
            )}
          </YStack>

          <YStack gap="$1">
            <Label htmlFor="descricao" color="$color">
              <Info size={16} color="$borderColorFocus" /> Descrição
            </Label>
            <Input
              id="descricao"
              placeholder="Descrição do campeonato"
              value={formValues.descricao}
              onChangeText={v => handleInputChange('descricao', v)}
              borderColor={error.descricao ? '$borderColorError' : '$borderColorFocus'}
              height={'$9'}
            />
            {error.descricao && (
              <Text color="$borderColorError" fontSize="$2">
                {error.descricao}
              </Text>
            )}
          </YStack>

          <YStack gap="$1">
            <Label htmlFor="maxEquipes" color="$color">
              Máximo de Equipes
            </Label>
            <Input
              id="maxEquipes"
              placeholder="Ex: 10"
              keyboardType="numeric"
              value={formValues.maxEquipes}
              onChangeText={v => handleInputChange('maxEquipes', v)}
              borderColor={error.maxEquipes ? '$borderColorError' : '$borderColorFocus'}
              height={'$9'}
            />
            {error.maxEquipes && (
              <Text color="$borderColorError" fontSize="$2">
                {error.maxEquipes}
              </Text>
            )}
          </YStack>

          <YStack gap="$1">
            <Label htmlFor="maxEquipes" color="$color">
              Número de integrantes por equipe
            </Label>
            <Input
              id="numIntegrantes"
              placeholder="Ex: 10"
              keyboardType="numeric"
              value={formValues.numIntegrantes}
              onChangeText={v => handleInputChange('maxEquipes', v)}
              borderColor={error.numIntegrantes ? '$borderColorError' : '$borderColorFocus'}
              height={'$9'}
            />
            {error.numIntegrantes && (
              <Text color="$borderColorError" fontSize="$2">
                {error.numIntegrantes}
              </Text>
            )}
          </YStack>

          <XStack gap="$3" justifyContent="space-between">
            <YStack flex={1} gap="$2">
              <Label fontFamily="$body" color="$color">
                Data
              </Label>
              <Button
                icon={Calendar}
                onPress={() => setShowDatePicker(true)}
                backgroundColor="$backgroundPress"
                borderColor={'$borderColor'}
                pressStyle={{ backgroundColor: '$backgroundHover' }}
              >
                <Text color="$borderColorFocus">{date?.toLocaleDateString('pt-BR')}</Text>
              </Button>
            </YStack>
            <YStack flex={1} gap="$2">
              <Label fontFamily="$body" color="$color">
                Hora
              </Label>
              <Button
                icon={Clock}
                onPress={() => setShowTimePicker(true)}
                backgroundColor="$backgroundPress"
                borderColor={'$borderColor'}
                pressStyle={{ backgroundColor: '$backgroundHover' }}
              >
                <Text color="$borderColorFocus">
                  {hour?.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                </Text>
              </Button>
            </YStack>
          </XStack>

          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onDateChange}
              minimumDate={new Date()}
            />
          )}

          {showTimePicker && (
            <DateTimePicker value={hour} mode="time" display="default" onChange={onTimeChange} />
          )}

          <YStack gap="$1">
            <Label htmlFor="cep" color="$color">
              <MapPin size={16} color="$borderColorFocus" /> CEP
            </Label>
            <Input
              id="cep"
              placeholder="CEP (8 dígitos)"
              keyboardType="numeric"
              maxLength={8}
              value={formValues.cep}
              onChangeText={v => handleInputChange('cep', v)}
              borderColor={error.cep ? '$borderColorError' : '$borderColorFocus'}
              height={'$9'}
            />
            {error.cep && (
              <Text color="$borderColorError" fontSize="$2">
                {error.cep}
              </Text>
            )}
          </YStack>

          <YStack gap="$1">
            <Label htmlFor="endereco" color="$color">
              Endereço
            </Label>
            <Input
              id="endereco"
              placeholder="Endereço"
              disabled
              value={formValues.endereco}
              onChangeText={v => handleInputChange('endereco', v)}
              borderColor={error.endereco ? '$borderColorError' : '$borderColorFocus'}
              height={'$9'}
              editable={false}
            />
          </YStack>

          <YStack gap="$1">
            <Label htmlFor="numero" color="$color">
              Número
            </Label>
            <Input
              id="numero"
              placeholder="Número"
              keyboardType="numeric"
              value={formValues.numero}
              onChangeText={v => handleInputChange('numero', v)}
              height={'$9'}
              borderColor={error.numero ? '$borderColorError' : '$borderColorFocus'}
            />
            {error.numero && (
              <Text color="$borderColorError" fontSize="$2">
                {error.numero}
              </Text>
            )}
          </YStack>

          <YStack gap="$1">
            <Label htmlFor="bairro" color="$color">
              Bairro
            </Label>
            <Input
              id="bairro"
              placeholder="Bairro"
              disabled
              value={formValues.bairro}
              onChangeText={v => handleInputChange('bairro', v)}
              height={'$9'}
              borderColor={error.bairro ? '$borderColorError' : '$borderColorFocus'}
              editable={false}
            />
          </YStack>

          <YStack gap="$1">
            <Label htmlFor="cidade" color="$color">
              Cidade
            </Label>
            <Input
              id="cidade"
              disabled
              placeholder="Cidade"
              value={formValues.cidade}
              onChangeText={v => handleInputChange('cidade', v)}
              height={'$9'}
              borderColor={error.cidade ? '$borderColorError' : '$borderColorFocus'}
              editable={false}
            />
          </YStack>

          {error.submit && (
            <Text color="$borderColorError" fontSize="$3">
              {error.submit}
            </Text>
          )}

          <Button
            onPress={onSubmit}
            disabled={isLoading}
            backgroundColor={isLoading ? '$backgroundPress' : '$color9'}
            height={'$9'}
          >
            <Text color="$background" fontWeight="700">
              {isLoading ? 'CRIANDO...' : 'CRIAR CAMPEONATO'}
            </Text>
          </Button>
        </Form>
      </ScrollView>
    </LayoutComponent>
  )
}
