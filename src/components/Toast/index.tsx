import { useEffect, useState } from "react";
import { router } from "expo-router";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { SlideInUp } from "react-native-reanimated";
import { ShoppingCart, ArrowRight } from "phosphor-react-native"; 

import { THEME } from "src/styles/theme";
import { useApp } from "@hooks/useApp";

type Props = {
  visible: boolean;
};

const { width } = Dimensions.get('window');

export function Toast({ visible }: Props) {
  const { coffeesInTheCart } = useApp();

  const [view, setView] = useState(false);

  if (!visible) return null;
  
  function handleButton() {
    router.navigate('/shoppingCart');
  }

  function handleGetCoffeesOfTheCart() {
    if (!coffeesInTheCart || coffeesInTheCart.length === 0) {
      return setView(false);
    }

    return setView(true);
  }  

  useEffect(() => {
    handleGetCoffeesOfTheCart();
  });

  return (
    <Animated.View
      entering={SlideInUp}
      style={styles.container}
    >
      {view && <Text style={styles.counter}> { coffeesInTheCart && coffeesInTheCart.length } </Text> }
      <View style={styles.icon}>
        <ShoppingCart color={THEME.COLORS.WHITE} weight="fill" size={24} />
      </View>

      <View>
        <Text style={styles.text}>
          1 café irlandês de 227ml
        </Text>

        <Text style={styles.text}>
          adicionado ao carrinho
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleButton}>
        <Text style={styles.textButton}>VER</Text> 
        <ArrowRight color={THEME.COLORS.PURPLE_DARK} size={16} />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 16,

    paddingHorizontal: 32,
    paddingVertical: 18,

    width,

    backgroundColor: THEME.COLORS.GREY_600
  },

  icon: {
    justifyContent: 'center',
    alignItems: 'center',

    height: 36,
    width: 36,
    borderRadius: 6,

    backgroundColor: THEME.COLORS.GREY_400
  },

  text: {
    fontFamily: THEME.FONTS.BALOO2_REGULAR,
    fontSize: 16,

    color: THEME.COLORS.GREY_400,
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6
  },

  textButton: {
    fontFamily: THEME.FONTS.BALOO2_REGULAR,
    fontSize: 18,

    color: THEME.COLORS.PURPLE_DARK
  },

  counter: {
    position: 'absolute',
    zIndex: 1,

    textAlign: 'center',
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: 13,

    backgroundColor: THEME.COLORS.PURPLE,
    color: THEME.COLORS.WHITE,

    left: 68,
    bottom: 50,

    height: 20,
    width: 20,

    borderRadius: 100,
  }
});
