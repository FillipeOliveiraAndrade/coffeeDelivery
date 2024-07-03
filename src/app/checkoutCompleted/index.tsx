import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import Animated, { BounceInLeft, FadeIn, FadeInDown } from 'react-native-reanimated';

import Illustration from '@assets/Illustration.svg';

import { styles } from './styles';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function CheckoutCompleted() {
  function handleGoToHome() {
    router.navigate('/home');
  }

  return (
    <View style={styles.container}>
      <Animated.View entering={BounceInLeft.duration(600)}>
        <Illustration />
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(600)} style={{ marginBottom: 24 }}>
        <Text style={styles.title}>
          Uhu! Pedido confirmado
        </Text>

        <Text style={styles.label}>
          Agora é só aguardar que logo o café chegará até você!
        </Text>
      </Animated.View>

      <AnimatedPressable entering={FadeIn.duration(600).delay(1000)} style={styles.button} onPress={handleGoToHome}>
        <Text style={styles.textButton}>
          IR PARA HOME
        </Text>
      </AnimatedPressable>
    </View>
  )
}
