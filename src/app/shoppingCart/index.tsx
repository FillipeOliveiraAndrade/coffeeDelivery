import { useEffect, useState } from 'react'
import { router } from 'expo-router'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { ArrowLeft, Trash } from 'phosphor-react-native'

import { useApp } from '@hooks/useApp'

import CardShoppingCart from '@components/CardShoppingCart'
import ListEmpty from '@components/ListEmpty'

import { styles } from './styles'
import { THEME } from 'src/styles/theme'
import { Swipeable } from 'react-native-gesture-handler'
import Animated, { FadeIn, FadeInDown, SlideInDown, SlideInRight } from 'react-native-reanimated'

export default function ShoppingCart() {
  const {
    coffeesInTheCart,
    handleResetShoppingCart,
    handleRemoveCoffeeOfTheCart
  } = useApp();

  const [view, setView] = useState(false)

  function handleGoBack() {
    router.back();
  }

  function handleFinished() {
    handleResetShoppingCart();
    router.navigate('/checkoutCompleted');
  }

  useEffect(() => {
    function showFooter() {
      if (coffeesInTheCart.length === 0) {
        return setView(false);
      }

      return setView(true);
    }

    showFooter();
  }, [coffeesInTheCart]);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handleGoBack}>
          <ArrowLeft size={24} color={THEME.COLORS.GREY_100} />
        </Pressable>

        <Text style={styles.title}>
          Carrinho
        </Text>

        <Text></Text>
      </View>

      {
        coffeesInTheCart.length != 0 ?
          <ScrollView>
            {
              coffeesInTheCart.map((coffee) => (
                <Animated.View
                  entering={FadeIn}
                  exiting={SlideInRight}
                  key={coffee.id}
                >
                  <Swipeable 
                    key={coffee.id} 
                    containerStyle={styles.swipeableContainer}
                    leftThreshold={180}
                    onSwipeableOpen={() => handleRemoveCoffeeOfTheCart(coffee.id)}
                    renderRightActions={() => null}
                    renderLeftActions={() => (
                      <View style={styles.remove}>
                        <Trash size={28} color={THEME.COLORS.RED_DARK} style={{ marginHorizontal: 32 }} />
                      </View>
                    )}
                  >
                    <CardShoppingCart
                      coffee={coffee}
                      key={coffee.id}
                    />
                  </Swipeable>
                </Animated.View>
              ))
            }
          </ScrollView>
          : <Animated.View style={{ flex: 1 }} entering={FadeInDown.delay(1000)}>
              <ListEmpty />
            </Animated.View>
      }

      {
        view && (
          <View style={styles.footer}>
            <View style={styles.totalValue}>
              <Text style={styles.text}> Valor Total </Text>
              <Text style={styles.price}>
                R$ { coffeesInTheCart ? coffeesInTheCart.reduce((a, b) => a + (b.price * b.quantity), 0).toFixed(2) : 0 } 
              </Text>
            </View>
  
            <Pressable style={styles.button} onPress={handleFinished}>
              <Text style={styles.textButton}>
                CONFIRMAR PEDIDO
              </Text>
            </Pressable>
          </View>
        )
      }
    </View>
  )
}
