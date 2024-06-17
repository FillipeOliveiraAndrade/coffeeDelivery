import { Pressable, Text, View } from 'react-native'

import { MagnifyingGlass } from 'phosphor-react-native';

import { styles } from '@components/Search/styles';

import { THEME } from 'src/styles/theme';

export function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Encontre o café perfeito para qualquer hora do dia
      </Text>

      <Pressable  style={styles.pressable}>
        <MagnifyingGlass color={THEME.COLORS.GREY_400} />

        <Text style={styles.textPressable}>
          Pesquisar
        </Text>
      </Pressable>
    </View>
  )
}
