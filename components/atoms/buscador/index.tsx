// components/Buscador.tsx (com estilo 'Cyber Lime')

import { useState } from 'react';
import { Button, H4, Label, Select, YStack } from 'tamagui';
import { ChevronDown, Calendar as CalendarIcon, MapPin, Bike } from '@tamagui/lucide-icons';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';
import MultiSelect from '../select';


export function Buscador() {
  const [data, setData] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [locais, setLocais] = useState<string[]>([]);
  const [esportes, setEsportes] = useState<string[]>([]);
  const [ordenacao, setOrdenacao] = useState('nome');

  const onDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    setData(selectedDate || data);
  };

  const handleSearch = () => {
    const filtros = { data: data.toISOString().split('T')[0], locais, esportes, ordenacao };
    console.log('Filtros aplicados:', filtros);
  };

  return (
    <YStack 
      space="$4" 
      padding="$4" 
      borderRadius="$4" 
      backgroundColor="$background" 
      borderWidth={1} 
      borderColor="$borderColor"
      width={350}
    >
      <H4 fontFamily="$body" color="$color9" textTransform="uppercase">
        Buscar Eventos
      </H4>

      <YStack gap="$2">
        <Label fontFamily="$body" color="$color">Data do Evento</Label>
        <Button 
          icon={CalendarIcon} 
          onPress={() => setShowDatePicker(true)}
          backgroundColor="$backgroundPress"
          borderColor="$borderColor"
          hoverStyle={{ borderColor: '$borderColorHover' }}
        >
          {data.toLocaleDateString('pt-BR')}
        </Button>
      </YStack>
      
      {showDatePicker && (<DateTimePicker value={data} mode="date" onChange={onDateChange}/>)}

      <MultiSelect label="Local" options={LOCAIS_DISPONIVEIS} selected={locais} onSelectionChange={setLocais} icon={MapPin}/>
      <MultiSelect label="Esporte" options={ESPORTES_DISPONIVEIS} selected={esportes} onSelectionChange={setEsportes} icon={Bike}/>
      
      <YStack space="$2">
        <Label fontFamily="$body" color="$color">Ordenar por</Label>
        <Select value={ordenacao} onValueChange={setOrdenacao}>
          <Select.Trigger 
            iconAfter={ChevronDown} 
            // ESTILO APLICADO
            backgroundColor="$backgroundPress"
            borderColor="$borderColor"
            hoverStyle={{ borderColor: '$borderColorHover' }}
          >
            <Select.Value fontFamily="$body" />
          </Select.Trigger>
          <Select.Content>
            <Select.Viewport backgroundColor="$backgroundPress" borderColor="$borderColor">
              <Select.Item index={0} value="nome">
                <Select.ItemText fontFamily="$body">Nome</Select.ItemText>
              </Select.Item>
              <Select.Item index={1} value="data">
                <Select.ItemText fontFamily="$body">Data</Select.ItemText>
              </Select.Item>
            </Select.Viewport>
          </Select.Content>
        </Select>
      </YStack>

      <Button 
        size="$5" 
        onPress={handleSearch}
        backgroundColor="$color9" 
        color="$background" 
        fontFamily="$body"
        fontWeight="bold"
        hoverStyle={{ backgroundColor: '$color10' }} 
        pressStyle={{ backgroundColor: '$color11' }} 
      >
        BUSCAR
      </Button>
    </YStack>
  );
}