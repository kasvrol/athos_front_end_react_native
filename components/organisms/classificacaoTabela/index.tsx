import { Classificacao } from '@/utils/interfaces/campeonatos'
import { XStack, YStack, Text, Separator } from 'tamagui'

interface ClassificacaoTabelaProps {
  classificacao: Classificacao[]
}

const ClassificacaoTabela = ({ classificacao }: ClassificacaoTabelaProps) => (
  <YStack width="100%" gap="$2">
    <XStack paddingHorizontal="$2">
      <Text flex={3} fontWeight="bold">
        Equipe
      </Text>
      <Text flex={1} textAlign="center" fontWeight="bold">
        P
      </Text>
      <Text flex={1} textAlign="center" fontWeight="bold">
        V
      </Text>
      <Text flex={1} textAlign="center" fontWeight="bold">
        J
      </Text>
    </XStack>
    <Separator />
    {classificacao.map((item, index) => (
      <XStack
        key={item.equipe.id}
        paddingHorizontal="$2"
        backgroundColor={index % 2 === 0 ? '$backgroundPress' : 'transparent'}
        paddingVertical="$2"
      >
        <Text flex={3}>{item.equipe.nome}</Text>
        <Text flex={1} textAlign="center">
          {item.pontos}
        </Text>
        <Text flex={1} textAlign="center">
          {item.vitorias}
        </Text>
        <Text flex={1} textAlign="center">
          {item.jogos}
        </Text>
      </XStack>
    ))}
  </YStack>
)
