import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Text } from 'tamagui'

export const BasketballLoading = () => {
  return (
    <View style={styles.container}>
      <Text
        textAlign="center"
        color="$borderColorFocus"
        fontSize="$6"
        fontWeight="600"
        marginTop={10}
      >
        Mais que um app, somos um time!
      </Text>
      <Image style={styles.animation} source={require('@/assets/icons/basketball.gif')} />
      <Text color="$borderColorFocus" fontSize="$5" fontWeight="600" marginTop={10}>
        Carregando...
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 300,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 99,
  },
  animation: {
    width: 200,
    height: 200,
  },
})
