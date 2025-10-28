import { ArrowRight } from '@tamagui/lucide-icons'
import { Button, Paragraph, Text, XStack, YStack } from 'tamagui'

type InformacoesAdicionaisProps = {
  titulo: string
  descricao: string | number
}

export type CardEventoProps = {
  titulo: string
  descricao: string
  endereco: string
  valor: number
}

function InformacoesAdicionais({ titulo, descricao }: InformacoesAdicionaisProps) {
  return (
    <XStack alignItems="center" gap="$2">
      <Text fontFamily="$body" fontSize="$2" color="$color6">
        {titulo}
      </Text>
      <Text fontFamily="$body" fontSize="$2" fontWeight="bold" color="$color">
        {typeof descricao === 'number'
          ? descricao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
          : descricao}
      </Text>
    </XStack>
  )
}

export default function CardEvento({ titulo, descricao, endereco, valor }: CardEventoProps) {
  return (
    <YStack
      backgroundColor="$backgroundPress"
      borderRadius="$4"
      borderWidth={1}
      borderColor="$borderColor"
      padding="$4"
      space="$3"
      hoverStyle={{ borderColor: '$borderColorHover' }}
      pressStyle={{ backgroundColor: '$backgroundHover' }}
      elevation="$2"
      shadowColor="$shadowColor"
      maxWidth={500}
    >
      <XStack gap="$4">
        <YStack
          width={100}
          height={100}
          backgroundColor="$backgroundHover"
          borderRadius="$3"
          alignItems="center"
          justifyContent="center"
        >
          <section>imagem</section>
        </YStack>

        <YStack flex={1} space="$2">
          <Text fontFamily="$body" fontSize="$5" fontWeight="bold" color="$color" numberOfLines={1}>
            {titulo}
          </Text>
          <Paragraph fontFamily="$body" color="$color6" fontSize="$2" numberOfLines={2}>
            {descricao}
          </Paragraph>
          <InformacoesAdicionais titulo="Endereço" descricao={endereco} />
          <InformacoesAdicionais titulo="Valor" descricao={valor} />
        </YStack>
      </XStack>
      <Button
        backgroundColor="$color9" // vibrantLime
        color="$background"
        fontFamily="$body"
        fontWeight="bold"
        iconAfter={ArrowRight}
        hoverStyle={{ backgroundColor: '$color10' }}
        pressStyle={{ backgroundColor: '$color11' }}
      >
        Ver detalhes
      </Button>
    </YStack>
  )
}
