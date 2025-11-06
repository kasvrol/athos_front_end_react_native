import React from 'react'
import { YStack, XStack, Label, Input, Button } from 'tamagui'
import { UserPlus, X, Trash2 } from '@tamagui/lucide-icons'
import { FormConvidadosViewModel } from './viewModel'

interface ConvidadosFormProps {
  listaConvidados: string[]
  setOpenConvites: (value: boolean) => void
  setListaConvidados: (prev: any) => void
}

export function ConvidadosForm({
  listaConvidados,
  setListaConvidados,
  setOpenConvites,
}: ConvidadosFormProps) {
  const {
    handleConvidadoChange,
    handleAdicionarConvidado,
    handleRemoverConvidado,
    handleCancelarConvites,
  } = FormConvidadosViewModel({ listaConvidados, setListaConvidados, setOpenConvites })

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
              onChangeText={text => handleConvidadoChange(text, index)}
            />

            {listaConvidados.length > 1 && (
              <Button
                icon={Trash2}
                size="$4"
                circular
                onPress={() => handleRemoverConvidado(index)}
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
          onPress={handleAdicionarConvidado}
          backgroundColor="$backgroundPress"
          pressStyle={{ backgroundColor: '$backgroundHover' }}
          borderColor="$borderColorFocus"
          color="$borderColorFocus"
        >
          Adicionar Convidado
        </Button>
        <Button
          icon={X}
          onPress={handleCancelarConvites}
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
