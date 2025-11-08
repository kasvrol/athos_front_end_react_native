import { Stars } from '@/components/molecules/estrelas'
import { Axe, Pencil } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { TextArea, YStack, Button, Form, Label, XStack, H3 } from 'tamagui'

export const AvaliarParticipante = () => {
  const [status, setStatus] = useState()
  const [count, setCount] = useState<number>(0)

  const onSubmit = (value?: any) => {
    console.log(count, value)
  }

  return (
    <YStack>
      <XStack>
        <Axe />
        <H3>Avaliar Participante</H3>
      </XStack>

      <Stars setCount={setCount} />
      <Form onSubmit={onSubmit}>
        <Label htmlFor="comentario">
          <Pencil />
          Comentário:{' '}
        </Label>
        <TextArea id="comentario" height={'$9'} />
        <Form.Trigger asChild>
          <Button>AVALIAR</Button>
        </Form.Trigger>
      </Form>
    </YStack>
  )
}
