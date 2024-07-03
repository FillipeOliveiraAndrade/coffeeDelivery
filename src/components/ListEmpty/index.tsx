import { Pressable, Text, View } from 'react-native'
import { router } from 'expo-router'

import { ShoppingCart } from 'phosphor-react-native'

import { THEME } from 'src/styles/theme'

import { styles } from './styles'

export default function ListEmpty() {
  function handleGoToHome() {
    router.navigate('/home');
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ShoppingCart size={24} weight='fill' color={THEME.COLORS.GREY_400} />

        <Text style={styles.text}>
          Seu carrinho está vazio
        </Text>
      </View>

      <Pressable onPress={handleGoToHome} style={styles.button}>
        <Text style={styles.textButton}>
          VER CATÁLOGO
        </Text>
      </Pressable>
    </View>
  )
}
