import AsyncStorage from "@react-native-async-storage/async-storage";

import { COFFEE_STORAGE } from '@storage/storageConfig';

import { CoffeeDTO } from "src/dtos/CoffeeDTO";

export async function storageCoffeeSave(coffee: any) {
  await AsyncStorage.setItem(COFFEE_STORAGE, JSON.stringify(coffee));
}

export async function storageCoffeeGet() {
  const storage = await AsyncStorage.getItem(COFFEE_STORAGE);
  const coffees = storage ? JSON.parse(storage) : null;
  return coffees;
}

export async function storageReset() {
  await AsyncStorage.clear();
}
