import Animated, { FadeInUp,  } from 'react-native-reanimated';
import { ScrollView, View } from 'react-native';

import { Header } from '@components/Header';
import { Search } from '@components/Search';
import { Catalog } from '@components/Catalog';
import { VerticalCard } from '@components/VerticalCard';

import { coffees } from 'src/data/coffee';
import Graos from '@assets/graos.svg';

import { styles } from '@screens/Home/styles';

export function Home() {
  return (
    <ScrollView style={styles.container}>
      <Animated.View entering={FadeInUp.duration(3000)} style={styles.intro}>
        <Header />
        <Search />
        <Graos style={styles.image} />
      </Animated.View>

      <VerticalCard
        title={ coffees[0].name }
        description={ coffees[0].description }
        price={ coffees[0].price }
        type={ coffees[0].type }
      />

      <View style={styles.catalog}>
        <Catalog />
      </View>
    </ScrollView>
  )
}
