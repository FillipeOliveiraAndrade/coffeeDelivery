import { router } from 'expo-router';
import { Dimensions, FlatList } from 'react-native'

import { TCoffee } from '@utils/TCoffee';

import { VerticalCard } from '@components/VerticalCard';

type Props = {
  data: TCoffee[]
};

const { width } = Dimensions.get('window');

export function Carousel({data}: Props) {
  function handleGoToCoffeeDetails(id: string) {
    router.push({ pathname: '/coffeeDetails/[id]', params: { id } });
  }

  return (
    <FlatList 
      data={data}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      snapToOffsets={[...Array(data.length)].map(
        (_item, index) => index * (width * 0.6 - 40) + (index - 1) * 40
      )}
      horizontal
      snapToAlignment='start'
      scrollEventThrottle={16}
      decelerationRate='fast'
      renderItem={({item}) => (
        <VerticalCard
          title={item.name}
          description={item.description}
          type={item.type}
          price={item.price}
          key={item.id}
          onPress={() => handleGoToCoffeeDetails(item.id)}
        />
    )}
      style={{ top: -58, flex: 1 }}
    />
  )
}
