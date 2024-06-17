import { Pressable, Text, View } from "react-native";

import { HorizontalCard } from "@components/HorizontalCard";

import { coffees } from "src/data/coffee";

import { styles } from "./styles";

export function Catalog() {
  return (
    <View>
      <Text style={styles.subtitle}>
        Nossos cafés
      </Text>

      <View style={styles.filter}>
        <Pressable>
          <Text style={styles.tag}>
            TRADICIONAIS
          </Text>
        </Pressable>

        <Pressable>
          <Text style={styles.tag}>
            DOCES
          </Text>
        </Pressable>

        <Pressable>
          <Text style={styles.tag}>
            ESPECIAIS
          </Text>
        </Pressable>
      </View>

      <Text style={styles.textType}>
        Tradicionais
      </Text>
      { coffees.map(({ name, description, price, type }, index) =>
        type === 'tradicional' && <HorizontalCard  title={name} description={description} price={price} key={index} />) }

      <Text style={styles.textType}>
        Doces
      </Text>
      { coffees.map(({ name, description, price, type }, index) =>
        type === 'doce' && <HorizontalCard  title={name} description={description} price={price} key={index} />) }

      <Text style={styles.textType}>
        Especiais
      </Text>
      { coffees.map(({ name, description, price, type }, index) =>
        type === 'especial' && <HorizontalCard  title={name} description={description} price={price} key={index} />) }
    </View>
  )
}
