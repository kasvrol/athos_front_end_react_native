import { Link, Stack } from 'expo-router';
import { Text, View } from '@/app/components/Themed';
import styles from './not-found.module.css'

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className={styles.container}>
        <Text className={styles.title}>Essa tela não existe</Text>
        <Link href="/" className={styles.link}>
          <Text className={styles.linkText}>Volte para a tela principal!</Text>
        </Link>
      </View>
    </>
  );
}

