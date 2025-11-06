import {
  YStack,
  XStack,
  Label,
  Input,
  TextArea,
  Button,
  ScrollView,
  Text,
  H3,
  Form,
  Spinner,
} from 'tamagui'
import {
  Edit3,
  Info,
  MapPin,
  Bike,
  DollarSign,
  Calendar,
  Clock,
  Swords,
} from '@tamagui/lucide-icons'
import LayoutComponent from '@/components/atoms/layout'
import CheckEsportesScreen from '@/components/molecules/checkEsportes/CheckEsportesScreen'
import { esportes } from '@/mock/esportes'
import DateTimePicker from '@react-native-community/datetimepicker'
import { CriarEventoModelView } from './criarEventoModelView'
import { BasketballLoading } from '@/components/atoms/loading/basketball'
import { ConvidadosForm } from '@/components/organisms/formConvidados'

function Convidados() {
  const listaConvidados: string[] = ['']
  return (
    <YStack>
      {listaConvidados.map((convidadeo, index) => {
        return (
          <YStack gap="$1" key={index}>
            <Label htmlFor="titulo" color="$color" alignItems="center">
              <Edit3 size={16} color="$borderColorFocus" /> {`Convidado ${index}`}
            </Label>
            <Input
              id="titulo"
              height="$9"
              autoCapitalize="none"
              keyboardType="email-address"
              borderColor={'$borderColorFocus'}
              color="$color"
            />
          </YStack>
        )
      })}
      <Button onPress={() => {}}>Adicionar Convidado</Button>
      <Button onPress={() => {}}>Cencelar convites</Button>
    </YStack>
  )
}

function CriarEventoView() {
  const {
    errors,
    adress,
    date,
    showDatePicker,
    showTimePicker,
    hour,
    isLoading,
    selectedSports,
    openConvites,
    setOpenConvites,
    setSelectedSports,
    setListaConvidados,
    listaConvidados,
    setShowTimePicker,
    onDateChange,
    setShowDatePicker,
    validacaoCampos,
    onTimeChange,
  } = CriarEventoModelView()

  return (
    <LayoutComponent>
      <ScrollView width="100%" contentContainerStyle={{ paddingBottom: 50 }}>
        <XStack alignItems="center" marginBottom={8}>
          <H3 color="$color10" fontFamily="$body" fontWeight="700" textTransform="uppercase">
            Criar Novo Evento{' '}
          </H3>
          <Swords size={30} color="$color10" />
        </XStack>

        {isLoading && <BasketballLoading />}

        <Form gap="$4" paddingBottom="$4">
          <YStack gap="$1">
            <Label htmlFor="titulo" color="$color" alignItems="center">
              <Edit3 size={16} color="$borderColorFocus" /> Título do Evento
            </Label>
            <Input
              id="titulo"
              height="$9"
              autoCapitalize="words"
              placeholder="Ex: Pelada dos Amigos"
              borderColor={errors.titulo ? '$borderColorError' : '$borderColorFocus'}
              color="$color"
              onChangeText={valor => validacaoCampos('titulo', valor)}
            />
            {errors.titulo && (
              <Text color="$borderColorError" fontSize="$4" paddingLeft="$1">
                {errors.titulo}
              </Text>
            )}
          </YStack>

          <YStack gap="$1">
            <Label htmlFor="descricao" color="$color" alignItems="center">
              <Info size={16} color="$borderColorFocus" /> Descrição
            </Label>
            <TextArea
              id="descricao"
              autoCapitalize="words"
              placeholder="Descreva o evento, regras, nível dos participantes..."
              borderColor={errors.descricao ? '$borderColorError' : '$borderColorFocus'}
              numberOfLines={4}
              height="100"
              color="$color"
              onChangeText={valor => validacaoCampos('descricao', valor)}
            />
            {errors.descricao && (
              <Text color="$borderColorError" fontSize="$4" paddingLeft="$1">
                {errors.descricao}
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
                sportList={esportes}
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
            <Label htmlFor="cep" color="$color">
              <MapPin size={16} color="$borderColorFocus" />
              CEP
            </Label>
            <Input
              id="cep"
              placeholder="CEP"
              keyboardType="numeric"
              borderColor={errors.cep ? '$borderColorError' : '$borderColorFocus'}
              height="$9"
              onChangeText={valor => validacaoCampos('cep', valor)}
              color="$color"
              maxLength={8}
            />
            {errors.cep && (
              <Text color="$borderColorError" fontSize="$4" paddingLeft="$1">
                {errors.cep}
              </Text>
            )}
          </YStack>

          <YStack gap="$1">
            <Label htmlFor="endereco" color="$color">
              Endereço
            </Label>
            <Input
              height="$9"
              id="endereco"
              placeholder="Rua, Número"
              color="$color"
              borderColor={adress?.endereco ? '$borderColorFocus' : '$borderColorError'}
              value={adress?.endereco}
              disabled
            />
          </YStack>
          <XStack alignItems="center" justifyContent="space-between">
            <YStack gap="$1">
              <Label htmlFor="numero" color="$color">
                Número
              </Label>
              <Input
                id="numero"
                placeholder="Número"
                height="$9"
                color="$color"
                borderColor={errors.numero ? '$borderColorError' : '$borderColorFocus'}
              />
              {errors.numero && (
                <Text color="$borderColorError" fontSize="$4" paddingLeft="$1">
                  {errors.numero}
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
                height="$9"
                width={200}
                color="$color"
                disabled
                value={adress?.bairro}
                borderColor={adress?.bairro ? '$borderColorFocus' : '$borderColorError'}
              />
            </YStack>
          </XStack>

          <YStack gap="$1">
            <Label htmlFor="cidade" color="$color">
              Cidade
            </Label>
            <Input
              id="cidade"
              placeholder="Cidade"
              height="$9"
              color="$color"
              disabled
              value={adress?.cidade}
              borderColor={adress?.cidade ? '$borderColorFocus' : '$borderColorError'}
            />
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
            <Label htmlFor="valor" color="$color">
              <DollarSign size={16} color="$color5" /> Valor (R$ - opcional)
            </Label>
            <Input
              id="valor"
              placeholder="0,00"
              keyboardType="numeric"
              borderColor={'$borderColorFocus'}
              height="$9"
              color="$color"
            />
          </YStack>

          {openConvites ? (
            <ConvidadosForm
              listaConvidados={listaConvidados}
              setListaConvidados={setListaConvidados}
              setOpenConvites={setOpenConvites}
            />
          ) : (
            <Button
              height="$9"
              onPress={() => setOpenConvites(true)}
              disabled={isLoading}
              backgroundColor={isLoading ? '$backgroundPress' : '$color9'}
              color={isLoading ? '$color' : '$background'}
              fontFamily="$body"
              fontWeight="bold"
              pressStyle={{ backgroundColor: '$color11' }}
            >
              CONVIDAR JOGADORES
            </Button>
          )}

          <Button
            height="$9"
            // onPress={()=>handleSubmit()}
            disabled={isLoading}
            backgroundColor={isLoading ? '$backgroundPress' : '$color9'}
            color={isLoading ? '$color' : '$background'}
            fontFamily="$body"
            fontWeight="bold"
            icon={isLoading ? <Spinner color={isLoading ? '$color' : '$background'} /> : undefined}
            pressStyle={{ backgroundColor: '$color11' }}
          >
            {isLoading ? 'Criando...' : 'CRIAR EVENTO'}
          </Button>
        </Form>
      </ScrollView>
    </LayoutComponent>
  )
}

export default CriarEventoView
