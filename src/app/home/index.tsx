import { useEffect, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import Animated, { SlideInDown, SlideInRight, SlideInUp  } from 'react-native-reanimated';

import { Header } from '@components/Header';
import { Search } from '@components/Search';
import { Catalog } from '@components/Catalog';
import { Carousel } from '@components/Carousel';

import { TCoffee } from '@utils/TCoffee';

import { coffees } from 'src/data/coffee';
import Graos from '@assets/graos.svg';

import { styles } from '@app/home/styles';
import { THEME } from 'src/styles/theme';

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);


export default function Home() {
  const [coffeeSugestions, setCoffeeSugestions] = useState([] as TCoffee[]);

  const scrollViewRef = useRef(null);

  const shuffledCoffeeList = coffees.slice();
  const selectRandomCoffees = () => {
    const shuffled = shuffledCoffeeList.sort(() => 0.5 - Math.random());
    setCoffeeSugestions(shuffled.slice(0, 3));
  };

  useEffect(() => {
    selectRandomCoffees();
  }, []);

  return (
    <AnimatedScrollView ref={scrollViewRef} style={styles.container}>
      <Animated.View entering={SlideInUp.duration(1000)} style={styles.intro}>
        <Header
          icon='MapPin'
          iconColor={THEME.COLORS.WHITE}
          colorShoppingCart={THEME.COLORS.YELLOW_DARK}
        />
        <Search />
        <Graos style={styles.image} />
      </Animated.View>

      <Animated.View entering={SlideInRight.duration(1500).delay(1000)}>
        <Carousel data={coffeeSugestions} />
      </Animated.View>

      <View style={styles.catalog}>
        <Catalog scrollViewRef={scrollViewRef} />
      </View>
    </AnimatedScrollView>
  )
}
