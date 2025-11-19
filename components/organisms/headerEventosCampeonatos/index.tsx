import { Filter } from '@tamagui/lucide-icons'
import { ExternalPathString, RelativePathString, router } from 'expo-router'
import { Button, XStack } from 'tamagui'

interface HeaderEventosCampeonatosProps {
  routerButton: RelativePathString | ExternalPathString
  titleButton: string
  onToggleSearch: () => void // Nova prop
}

function HeaderEventosCampeonatosView({
  routerButton,
  titleButton,
  onToggleSearch,
}: HeaderEventosCampeonatosProps) {
  return (
    <XStack
      height={'$10'}
      marginHorizontal={'$2'}
      justifyContent="space-between"
      alignItems="center"
      gap={'$3'}
    >
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
        onPress={onToggleSearch} // Chama a função recebida
        width={'30%'}
        height={'$9'}
        fontSize={'$4'}
        fontWeight={'500'}
        backgroundColor={'$color7'}
        color={'$color1'}
        icon={<Filter />}
      />
    </XStack>
  )
}

export default HeaderEventosCampeonatosView
