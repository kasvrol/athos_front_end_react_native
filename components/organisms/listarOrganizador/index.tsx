import { OrganizadorEvento } from "@/utils/interfaces/eventos"
import { Check, StarFull } from "@tamagui/lucide-icons"
import { H3, XStack, YStack, Text, Button } from "tamagui"

export const AvaliarOrganizador = ({ nomeOrganizador, avaliacaoOrganizador, idOrganizador }: OrganizadorEvento) => {
  return (
    <YStack gap="$3" marginVertical="$3">
      <H3 size="$3" textAlign="center" fontSize={'$5'} fontWeight={'500'} marginVertical={'$3'}>
        Quem organizou o evento:
      </H3>
        <XStack gap="$2" alignItems='flex-start' display='flex' flexWrap='wrap' justifyContent='space-between'>
          <Text fontSize="$4" width={'80%'}>{nomeOrganizador}</Text>
          <XStack alignItems="center">
            <Text fontSize={'$4'} color={'$borderColorFocus'}>
              {avaliacaoOrganizador}
            </Text>
            <StarFull size={'$4'} color={'$borderColorFocus'} />
          </XStack>
        </XStack>

        <Button
          height={'$9'}
          minHeight={'$minWidth'}
          minWidth={'$minWidth'}
          fontSize={'$4'}
          backgroundColor={'$color4'}
          onPress={() => console.log(idOrganizador)}
        >
          AVALIAR <Check />
        </Button>
    </YStack>
  )
}