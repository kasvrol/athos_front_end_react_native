import { Text, View, Stack } from 'tamagui'
import { Link } from 'expo-router'

export default function NotFoundScreen() {
  return (
    <>
      <Stack />
      <View>
        <Text>Essa tela não existe</Text>
        <Link href="/login">
          <Text>Volte para a tela principal!</Text>
        </Link>
      </View>
    </>
  )
}
