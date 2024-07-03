import { useState } from 'react';
import { router } from 'expo-router';
import { Pressable, Text, TextInput, ToastAndroid, View } from 'react-native'

import { MagnifyingGlass } from 'phosphor-react-native';

import { coffees } from 'src/data/coffee';

import { THEME } from 'src/styles/theme';
import { styles } from '@components/Search/styles';

export function Search() {
  const [search, setSearch] = useState('');

  function handleSearchCoffee() {
    const coffeeFound = coffees.filter(coffee => coffee.name.toLowerCase() === search.toLowerCase());

    if (coffeeFound.length === 0) {
      return ToastAndroid.show('Este café não pode ser encontrado, digite o nome inteiro', 2000);
    }

    router.push({ pathname: '/coffeeDetails/[id]', params: { id: coffeeFound[0].id } });
    setSearch('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Encontre o café perfeito para qualquer hora do dia
      </Text>

      <View style={styles.input}>
        <Pressable onPress={handleSearchCoffee}>
          <MagnifyingGlass color={THEME.COLORS.GREY_400} />
        </Pressable>

        <TextInput
          placeholder="Pesquisar"
          placeholderTextColor={THEME.COLORS.GREY_400}
          style={styles.textInput}
          onChangeText={setSearch}
          value={search}
        />
      </View>
    </View>
  )
}
