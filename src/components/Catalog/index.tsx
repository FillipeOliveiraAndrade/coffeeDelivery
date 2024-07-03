// import { Pressable, Text, View } from "react-native";
// import { router } from "expo-router";
// import Animated from "react-native-reanimated";

// import { HorizontalCard } from "@components/HorizontalCard";

// import { coffees } from "src/data/coffee";

// import { styles } from "./styles";

// export function Catalog() {
//   function handleGoToCoffeeDetails(id: string) {
//     router.push({ pathname: '/coffeeDetails/[id]', params: { id } });
//   }

//   return (
//     <Animated.View>
//       <Text style={styles.subtitle}>
//         Nossos cafés
//       </Text>

//       <View style={styles.filter}>
//         <Pressable>
//           <Text style={styles.tag}>
//             TRADICIONAIS
//           </Text>
//         </Pressable>

//         <Pressable>
//           <Text style={styles.tag}>
//             DOCES
//           </Text>
//         </Pressable>

//         <Pressable>
//           <Text style={styles.tag}>
//             ESPECIAIS
//           </Text>
//         </Pressable>
//       </View>

//       <Text style={styles.textType}>
//         Tradicionais
//       </Text>
//       {coffees.map(({ id, name, description, price, type }) =>
//         type === 'tradicional' && 
//         <HorizontalCard
//           title={name}
//           description={description}
//           price={price}
//           key={id}
//           onPress={() => handleGoToCoffeeDetails(id)}
//         />)}

//       <Text style={styles.textType}>
//         Doces
//       </Text>
//       {coffees.map(({ id, name, description, price, type }) =>
//         type === 'doce' &&
//         <HorizontalCard
//           title={name}
//           description={description}
//           price={price}
//           key={id}
//           onPress={() => handleGoToCoffeeDetails(id)}
//         />)}

//       <Text style={styles.textType}>
//         Especiais
//       </Text>
//       {coffees.map(({ id, name, description, price, type }) =>
//         type === 'especial' &&
//         <HorizontalCard
//         title={name}
//         description={description}
//         price={price}
//         key={id}
//         onPress={() => handleGoToCoffeeDetails(id)}
//       />) }
//     </Animated.View>
//   )
// }

import React, { useRef, useState } from 'react';
import { Pressable, Text, View, ScrollView, LayoutChangeEvent } from 'react-native';
import { router } from 'expo-router';
import Animated from 'react-native-reanimated';

import { HorizontalCard } from '@components/HorizontalCard';

import { coffees } from 'src/data/coffee';

import { styles } from './styles';

interface CatalogProps {
  scrollViewRef: React.RefObject<ScrollView>;
}

const FILTERS = [
  { label: 'TRADICIONAIS', type: 'tradicional' },
  { label: 'DOCES', type: 'doce' },
  { label: 'ESPECIAIS', type: 'especial' },
];

export function Catalog({ scrollViewRef }: CatalogProps) {
  const [filterSelected, setFilterSelected] = useState('');

  const sectionRefs = {
    tradicional: useRef<View>(null),
    doce: useRef<View>(null),
    especial: useRef<View>(null),
  };

  const sectionPositions = useRef<{ [key: string]: number }>({}).current;

  function handleGoToCoffeeDetails(id: string) {
    router.push({ pathname: '/coffeeDetails/[id]', params: { id } });
  }
  
  const handleSectionLayout = (type: 'tradicional' | 'doce' | 'especial') => (event: LayoutChangeEvent) => {
    const { layout } = event.nativeEvent;
    sectionPositions[type] = layout.y;
  };


  function scrollToSection(type: 'tradicional' | 'doce' | 'especial') {
    if (scrollViewRef.current && sectionPositions[type] !== undefined) {
      // Ajuste a altura do cabeçalho e outros elementos acima das seções
      const headerHeight = -630; // Ajuste este valor conforme necessário
      scrollViewRef.current.scrollTo({ y: sectionPositions[type] - headerHeight, animated: true });
    
      setFilterSelected(type);
    }
  }

  function renderFilterButtons() {
    return FILTERS.map(filter => (
      <Pressable
        key={filter.type}
        onPress={() => scrollToSection(filter.type as 'tradicional' | 'doce' | 'especial')}
      >
        <Text style={filterSelected == filter.type ? styles.onPressedFilter : styles.tag}>{filter.label}</Text>
      </Pressable>
    ));
  }

  function renderCoffeeSection(type: 'tradicional' | 'doce' | 'especial', label: string) {
    return (
      <View
        ref={sectionRefs[type]}
        onLayout={handleSectionLayout(type)}
      >
        <Text style={styles.textType}>{label}</Text>
        {coffees
          .filter(coffee => coffee.type === type)
          .map(({ id, name, description, price }) => (
            <HorizontalCard
              title={name}
              description={description}
              price={price}
              key={id}
              onPress={() => handleGoToCoffeeDetails(id)}
            />
          ))}
      </View>
    );
  }

  return (
    <Animated.View>
      <Text style={styles.subtitle}>Nossos cafés</Text>

      <View style={styles.filter}>{renderFilterButtons()}</View>

      {renderCoffeeSection('tradicional', 'Tradicionais')}
      {renderCoffeeSection('doce', 'Doces')}
      {renderCoffeeSection('especial', 'Especiais')}
    </Animated.View>
  );
}
