import LayoutDefault from '@/components/atoms/layoutDefault'
import { Stars } from '@/components/molecules/estrelas'
import { Medal, MessageSquare } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { TextArea, YStack, Button, Label, XStack, H3, Text } from 'tamagui'

export const AvaliarParticipante = () => {
  const [count, setCount] = useState<number>(0)
  const [comentario, setComentario] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = () => {
    setIsLoading(true)
    console.log({ nota: count, comentario })

    setTimeout(() => {
      setIsLoading(false)
      alert('Avaliação enviada com sucesso!')
    }, 1000)
  }

  return (
    <LayoutDefault>
      <YStack
        padding="$4"
        gap="$4"
        backgroundColor="$background"
        marginBottom={20}
        elevation="$2"
        justifyContent="center"
        marginTop={50}
        height={'100%'}
      >
        <XStack alignItems="center" justifyContent="center" gap="$3">
          <H3 color="$color10" fontFamily="$body" fontWeight="700" textTransform="uppercase">
            Avaliar Jogador
          </H3>
          <Medal size={24} color="$color10" />
        </XStack>

        <Text textAlign="center" color="$color" opacity={0.8}>
          Como foi o desempenho deste participante?
        </Text>

        <Stars setCount={setCount} />

        <YStack gap="$2">
          <Label htmlFor="comentario" color="$color" fontSize="$4" fontWeight="600">
            <XStack alignItems="center" gap="$2">
              <MessageSquare size={16} color="$colorFocus" />
              <Text>Comentário (opcional)</Text>
            </XStack>
          </Label>
          <TextArea
            id="comentario"
            placeholder="Escreva aqui sobre o fair play, habilidade..."
            height={120}
            backgroundColor="$backgroundPress"
            borderColor="$borderColor"
            color="$color"
            value={comentario}
            onChangeText={setComentario}
            focusStyle={{ borderColor: '$colorFocus' }}
          />
        </YStack>

        <Button
          onPress={onSubmit}
          disabled={isLoading || count === 0}
          backgroundColor={isLoading ? '$backgroundPress' : '$color9'}
          color={isLoading ? '$color' : '$background'}
          height="$9"
          fontWeight="bold"
          fontSize="$4"
          opacity={count === 0 ? 0.5 : 1}
        >
          {isLoading ? 'ENVIANDO...' : 'ENVIAR AVALIAÇÃO'}
        </Button>
      </YStack>
      Oiiiiii
    </LayoutDefault>
  )
}
