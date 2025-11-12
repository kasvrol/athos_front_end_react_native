import LayoutComponent from '@/components/atoms/layout'
import { ListarHistorico } from '@/components/templates/listarHistorico'
import { BicepsFlexed, Dumbbell } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Button, H2, XStack, YStack } from 'tamagui'

enum SecaoUsuario {
  PARTICIPANTE = 'PARTICIPANTE',
  ORGANIZADOR = 'ORGANIZADOR',
}

export default function HistoricoScreen() {
  const [section, setSection] = useState<SecaoUsuario>(SecaoUsuario.PARTICIPANTE)
  return (
    <LayoutComponent>
      <XStack
        marginVertical={'$3'}
        alignItems="center"
        justifyContent="center"
        gap={'$1'}
        width={'100%'}
      >
        <H2 color="$color10" fontFamily={'$body'} fontWeight={'700'}>
          Histórico
        </H2>
        <Dumbbell color={'$color10'} />
      </XStack>

      <XStack width={'100%'} alignItems="center" justifyContent="center" gap={'$2'}>
        <Button
          backgroundColor={section === SecaoUsuario.PARTICIPANTE ? '$color9' : '$color6'}
          borderWidth={1}
          borderRadius={'$4'}
          borderColor={'$color5'}
          width={'45%'}
          height={'$9'}
          fontSize={'$4'}
          fontWeight={'500'}
          color={'$color1'}
          onPress={() => setSection(SecaoUsuario.PARTICIPANTE)}
        >
          {SecaoUsuario.PARTICIPANTE}
        </Button>
        <Button
          backgroundColor={section === SecaoUsuario.ORGANIZADOR ? '$color9' : '$color6'}
          borderWidth={1}
          borderRadius={'$4'}
          borderColor={'$color5'}
          width={'45%'}
          height={'$9'}
          fontSize={'$4'}
          fontWeight={'500'}
          color={'$color1'}
          onPress={() => setSection(SecaoUsuario.ORGANIZADOR)}
        >
          {SecaoUsuario.ORGANIZADOR}
        </Button>
      </XStack>
      <YStack>
        {section === SecaoUsuario.PARTICIPANTE ? (
          <ListarHistorico secao={SecaoUsuario.PARTICIPANTE} />
        ) : (
          <ListarHistorico secao={SecaoUsuario.ORGANIZADOR} />
        )}
      </YStack>
    </LayoutComponent>
  )
}
