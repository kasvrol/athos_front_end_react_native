import { XSquare } from '@tamagui/lucide-icons'
import { Fragment } from 'react'
import { H3, YStack, Text, Button, Separator, XStack } from 'tamagui'

export const RenderOrganizerView = ({ participants }) => {
  return (
    <YStack gap="$3" mt="$3">
      <H3 size="$3">Gerenciar Participantes</H3>
      {participants.map((p, index) => (
        <Fragment key={p.id}>
          {index > 0 && <Separator />}
          <XStack gap="$2">
            <Text fontSize="$5">{p.name}</Text>
            <Button>AVALIAR</Button>
          </XStack>
        </Fragment>
      ))}
    </YStack>
  )
}
