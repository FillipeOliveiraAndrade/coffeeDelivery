import { Text, View } from "react-native";
import { MapPin, ShoppingCart } from "phosphor-react-native";

import { styles } from "@components/Header/styles";

import { THEME } from "src/styles/theme";

export function Header() {
  return (
    <View style={styles.container}  >
      <View style={styles.location}>
        <MapPin size={20} weight="fill" color={THEME.COLORS.PURPLE} />
        <Text style={styles.text}>Rio de Janeiro, RJ</Text>
      </View>

      <ShoppingCart weight="fill" color={THEME.COLORS.YELLOW} />
    </View>
  )
}
