import React, { useEffect } from 'react';
import { router } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';

import Logo from '@assets/logo.svg';
import LogoText from '@assets/logoText.svg';

import { THEME } from 'src/styles/theme';
import { styles } from './styles';

export default function Splash() {
  useEffect(() => {
    setTimeout(() => {
      router.replace('/home');

    }, 4000);
  }, []);

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={styles.logo} entering={FadeInDown.duration(800).delay(800)}>
        <Logo />
        <LogoText />
      </Animated.View>
    </Animated.View>
  );
}
