import React from 'react'
import { YStack, XStack, Label, Input, Button } from 'tamagui'
import { UserPlus, X, Trash2 } from '@tamagui/lucide-icons'

interface ConvidadosFormProps {
  listaConvidados: string[]
  onAdicionar: () => void
  onRemover: (index: number) => void
  onChange: (text: string, index: number) => void
  onCancelar: () => void
}

export function ConvidadosForm({
  listaConvidados,
  onAdicionar,
  onRemover,
  onChange,
  onCancelar,
}: ConvidadosFormProps) {

  return (
    <YStack gap="$4" borderWidth={1} borderColor="$borderColor" borderRadius="$4" padding="$4">
      <Label fontSize="$5" fontWeight="bold" color="$color" fontFamily="$body">
        Convidar Jogadores
      </Label>

      <YStack gap="$3">
        {listaConvidados.map((email, index) => (
          <XStack key={index} gap="$2" alignItems="center">
            <Input
              flex={1} 
              id={`convidado-${index}`}
              height="$9"
              placeholder="email@exemplo.com"
              keyboardType="email-address"
              autoCapitalize="none"
              borderColor="$borderColorFocus"
              color="$color"
              value={email} 
              onChangeText={text => onChange(text, index)} 
            />
            
            {listaConvidados.length > 1 && (
              <Button
                icon={Trash2}
                size="$4"
                circular 
                onPress={() => onRemover(index)} 
                backgroundColor="$backgroundPress"
                pressStyle={{ backgroundColor: '$backgroundHover' }}
                borderColor="$borderColorError"
                color="$borderColorError"
              />
            )}
          </XStack>
        ))}
      </YStack>
      <YStack gap="$3" marginTop="$2">
        <Button
          icon={UserPlus}
          onPress={onAdicionar} 
          backgroundColor="$backgroundPress"
          pressStyle={{ backgroundColor: '$backgroundHover' }}
          borderColor="$borderColorFocus"
          color="$borderColorFocus"
        >
          Adicionar Convidado
        </Button>
        <Button
          icon={X}
          onPress={onCancelar} 
          variant="outlined" 
          borderColor="$borderColorError"
          color="$borderColorError"
          pressStyle={{ backgroundColor: '$backgroundHover' }}
        >
          Cancelar
        </Button>
      </YStack>
    </YStack>
  )
}