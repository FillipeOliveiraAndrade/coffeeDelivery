import { Pressable, Text, View } from "react-native";
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Minus, Plus, Trash } from "phosphor-react-native";

import { styles } from "./styles";
import { THEME } from "src/styles/theme";

import { useApp } from "@hooks/useApp";

import { coffeesImage } from '../../data/coffee'; 

import { CoffeeDTO } from "src/dtos/CoffeeDTO";
import { useState } from "react";

type Props = {
  coffee: CoffeeDTO;
};

function showImageCoffee(title: string) {
  switch (title) {
    case 'Expresso Americano':
      return <coffeesImage.expressoAmericano style={{ height: 64, width: 64 }} />;

    case 'Expresso Americano':
      return <coffeesImage.expressoAmericano style={{ height: 64, width: 64 }} />;

    case 'Expresso Cremoso':
      return <coffeesImage.expressoCremoso style={{ height: 64, width: 64 }} />;

    case 'Latte':
        return <coffeesImage.latte style={{ height: 64, width: 64 }} />;

    case 'Expresso Gelado':
      return <coffeesImage.expressoGelado style={{ height: 64, width: 64 }} />;
  
    case 'Capuccino':
      return <coffeesImage.capuccino style={{ height: 64, width: 64 }} />;

    case 'Mocaccino':
      return <coffeesImage.mocaccino style={{ height: 64, width: 64 }} />;

    case 'Chocolate Quente':  
      return <coffeesImage.chocolateQuente style={{ height: 64, width: 64 }} />;

    case 'Cubano':
      return <coffeesImage.cubano style={{ height: 64, width: 64 }} />;

    case 'Havaiano':
      return <coffeesImage.havaiano style={{ height: 64, width: 64 }} />;
      
    case 'Árabe':
      return <coffeesImage.arabe style={{ height: 64, width: 64 }} />;

    case 'Irlandês':
      return <coffeesImage.irlandes style={{ height: 64, width: 64 }} />;

    default:
      return <coffeesImage.expressoTradicional style={{ height: 64, width: 64 }} />;
  }
}

const CARD_DELETE_AREA = 180;

export default function CardShoppingCart({ coffee }: Props) {
  const { handleRemoveCoffeeOfTheCart } = useApp();

  const cardPosition = useSharedValue(0);

  const [quantity, setQuantity] = useState(coffee.quantity);

  function handleDecreaseQuantity() {
    const verifyQuantity = (quantity === 1);
    verifyQuantity ? 1 : setQuantity(prevsStates => prevsStates -= 1);
  }

  const dragStyles = useAnimatedStyle(() => {
    return {
      transform: [{
        translateX: cardPosition.value
      }]
    };
  });

  // const onPan = Gesture
  //   .Pan()
  //   .activateAfterLongPress(150)
  //   .onUpdate((event) => {
  //     const moveToRight = event.translationX > 0;

  //     (event.translationX);
      

  //     if (moveToRight) {
  //       cardPosition.value = event.translationX;
  //     }
  //   })
  //   .onEnd((event) => {
  //     if (event.translationX >= 180) {
  //       runOnJS(handleRemoveCoffeeOfTheCart)(coffee.id);
  //     }

  //     cardPosition.value = withTiming(0);
  //   });

  return (
    // <GestureDetector gesture={onPan}>
      <Animated.View style={[styles.container, dragStyles]}>
        { showImageCoffee(coffee.name) }

        <View>
          <Text style={styles.name}> { coffee.name } </Text>
          <Text style={styles.size}> { coffee.size } </Text>

          <View style={styles.actions}>
            <View style={styles.quantity}>
              <Pressable onPress={handleDecreaseQuantity}>
                <Minus size={18} weight='bold' color={ THEME.COLORS.PURPLE } />
              </Pressable>

              <Text style={styles.number}> { quantity } </Text>

              <Pressable onPress={() => setQuantity(prevState => prevState += 1)}>
                <Plus size={18} weight='bold' color={ THEME.COLORS.PURPLE } />
              </Pressable>
            </View>

            <Pressable onPress={() => handleRemoveCoffeeOfTheCart(coffee.id)} style={styles.trash}>
              <Trash size={20} color={THEME.COLORS.PURPLE} />
            </Pressable>
          </View>
        </View>

        <Text style={styles.price}>
          R$ { coffee.price.toFixed(2) }
        </Text>
      </Animated.View>
    // </GestureDetector>
  )
}
