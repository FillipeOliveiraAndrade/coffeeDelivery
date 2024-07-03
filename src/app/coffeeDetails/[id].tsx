import { useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, Text, View } from 'react-native'
import { Plus, Minus } from 'phosphor-react-native';

import { Header } from '@components/Header'

import { useApp } from '@hooks/useApp';
import { coffees } from 'src/data/coffee';

import { styles } from './styles'
import { THEME } from 'src/styles/theme'
import { Smoke } from '@components/Smoke';

export default function CoffeeDetails() {
  const { handleSaveCoffee } = useApp();

  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const { id } = useLocalSearchParams();
  const coffee = coffees.filter((coffee) => coffee.id === id);

  function handleDecreaseQuantity() {
    const verifyQuantity = (quantity === 1);
    verifyQuantity ? 1 : setQuantity(prevsStates => prevsStates -= 1);
  }

  async function handleSubmit() {
    const coffeeData = {
      id: coffee[0].id,
      name: coffee[0].name,
      description: coffee[0].description, 
      type: coffee[0].type,
      size: size,
      price: coffee[0].price,
      quantity: quantity
    };
  
    handleSaveCoffee(coffeeData);
    router.navigate('/home');
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.intro}>
        <Header
          icon='ArrowLeft'
          iconColor={THEME.COLORS.WHITE}
          colorShoppingCart={THEME.COLORS.PURPLE}
        />

        <Text style={styles.tag}>
          { coffee[0].type.toUpperCase() }
        </Text>

        <View style={styles.namePrice}>
          <Text style={styles.title}>
          { coffee[0].name }
          </Text>

          <Text style={styles.price}>
            <Text style={styles.currency}> R$ </Text>
            <Text style={styles.amount}> { coffee[0].price.toFixed(2) } </Text>
          </Text>
        </View>

        <Text style={styles.description}>
          { coffee[0].description }
        </Text>
      </View>

      <Smoke />

      <View style={styles.footer}>
        <Text style={styles.text}>
          Selecione o tamanho:
        </Text>

        <View style={styles.sizeContainer}>
          <Pressable onPress={() => setSize('114ml')}>
            <Text
              style={[
                styles.size,
                size === '114ml' && styles.sizeSelected
              ]}
            >
              114ml
            </Text>
          </Pressable>

          <Pressable onPress={() => setSize('140ml')}>
            <Text 
              style={[
                styles.size,
                size === '140ml' && styles.sizeSelected
              ]}
            >
              140ml
            </Text>
          </Pressable>

          <Pressable onPress={() => setSize('227ml')}>
            <Text
              style={[
                styles.size,
                size === '227ml' && styles.sizeSelected  
              ]}
            >
              227ml
            </Text>
          </Pressable>
        </View>

        <View style={styles.addToCart}>
          <View style={styles.quantity}>
            <Pressable onPress={handleDecreaseQuantity}>
              <Minus size={18} weight='bold' color={ THEME.COLORS.PURPLE } />
            </Pressable>

            <Text style={styles.number}> { quantity } </Text>

            <Pressable onPress={() => setQuantity(prevStates => prevStates += 1)}>
              <Plus size={18} weight='bold' color={ THEME.COLORS.PURPLE } />
            </Pressable>
          </View>

          <Pressable
            onPress={handleSubmit}
            disabled={size ? false : true}
            style={[
                styles.button,
                { opacity: size ? 1 : 0.6}
              ]}
          >
            <Text style={styles.textButton}> Adicionar </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
