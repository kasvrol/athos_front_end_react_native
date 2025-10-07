import { Button, Paragraph, Text, XStack, YStack } from 'tamagui'

type InformacoesAdicionaisProps = {
  titulo: string
  descricao: string | number
}

type CardEventoProps = {
  titulo: string
  descricao: string
  endereco: string
  valor: number
}

function InformacoesAdicionais({ titulo, descricao }: InformacoesAdicionaisProps) {
  return (
    <XStack>
      <Text>{titulo}</Text>
      <Text>{descricao}</Text>
    </XStack>
  )
}

export default function CardEvento({ titulo, descricao, endereco, valor }: CardEventoProps) {
  return (
    <YStack>
      <XStack>
        <section>imagem</section>
        <YStack>
          <Text>{titulo}</Text>
          <Paragraph>{descricao}</Paragraph>
          <InformacoesAdicionais titulo="Endereço" descricao={endereco} />
          <InformacoesAdicionais titulo="Valor" descricao={valor} />
        </YStack>
      </XStack>
      <Button>Ver detalhes</Button>
    </YStack>
  )
}
