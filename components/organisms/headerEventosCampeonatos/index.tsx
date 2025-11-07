import { Filter } from '@tamagui/lucide-icons'
import { ExternalPathString, RelativePathString, router } from 'expo-router'
import { useState } from 'react'
import { Button, XStack } from 'tamagui'

interface HeaderEventosCampeonatosProps {
  routerButton: RelativePathString | ExternalPathString
  titleButton: string
}

function HeaderEventosCampeonatosView({
  routerButton,
  titleButton,
}: HeaderEventosCampeonatosProps) {
  const [openSearch, setOpenSearch] = useState<boolean>(false)
  return (
    <XStack height={'$10'} marginHorizontal={'$2'} justifyContent="space-between" alignItems='center' gap={'$3'}>
      <Button
        onPress={() => {
          router.push(`${routerButton}`)
        }}
        width={'60%'}
        height={'$9'}
        fontSize={'$4'}
        fontWeight={'500'}
        backgroundColor={'$borderColorPress'}
        color={'$color1'}
      >
        {titleButton}
      </Button>
      <Button
        onPress={() => {
          setOpenSearch(!openSearch)
        }}
        width={'30%'}
        height={'$9'}
        fontSize={'$4'}
        fontWeight={'500'}
        backgroundColor={'$color7'}
        color={'$color1'}
      >
        <Filter />
      </Button>
    </XStack>
  )
}

export default HeaderEventosCampeonatosView
