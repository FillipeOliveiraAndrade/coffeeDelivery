import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";
import { MapPin, ArrowLeft, ShoppingCart } from "phosphor-react-native";

import { styles } from "@components/Header/styles";

import { THEME } from "src/styles/theme";
import { useApp } from "@hooks/useApp";

type Props = {
  icon: string;
  iconColor: string;
  colorShoppingCart: string;
};

export function Header({ icon, iconColor, colorShoppingCart }: Props) {
  const { coffeesInTheCart } = useApp();

  const [view, setView] = useState(false);

  function handleGoToShoppingCart() {
    router.navigate('/shoppingCart');
  }

  function handleGoBack() {
    router.back();
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
    <View style={styles.container}>
      <View style={styles.location}>
        { icon === 'MapPin' ?
        <MapPin size={20} weight="fill" color={THEME.COLORS.PURPLE} /> :
        <Pressable onPress={handleGoBack}>
          <ArrowLeft size={24} color={iconColor} />
        </Pressable> }
        
        { icon === 'MapPin' && <Text style={styles.text}>Rio de Janeiro, RJ</Text> }
      </View>

      <Pressable onPress={handleGoToShoppingCart}>
        {view && <Text style={styles.counter}> { coffeesInTheCart && coffeesInTheCart.length } </Text> }
        <ShoppingCart weight="fill" color={colorShoppingCart} />
      </Pressable>
    </View>
  )
}
