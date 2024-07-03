import { size } from "@shopify/react-native-skia";
import React, { createContext, useEffect, useState } from "react";

import { CoffeeDTO } from "src/dtos/CoffeeDTO";

type AppContextProviderProps = {
  children: React.ReactNode;
};

type AppContextDataProps = {
  handleSaveCoffee: (coffee: CoffeeDTO) => Promise<void>;
  handleResetShoppingCart: () => void;
  handleRemoveCoffeeOfTheCart: (id: string) => Promise<void>;
  setFilteredCoffees: (name: string) => void;
  handleUpdatedCoffeeOfTheCart: (id: string, quantity: number) => void;

  coffeesInTheCart: CoffeeDTO[];
  filteredCoffees: string;
};

export const AppContext = createContext<AppContextDataProps>({} as AppContextDataProps);

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [coffeesInTheCart, setCoffeesInTheCart] = useState<CoffeeDTO[]>([]);
  const [filteredCoffees, setFilteredCoffees] = useState('');

  function handleSaveCoffee(newCoffee: CoffeeDTO) {
    if (!coffeesInTheCart || coffeesInTheCart.length === 0) {
      const updatedArray = coffeesInTheCart ? [...coffeesInTheCart, newCoffee] : [newCoffee] 
      return setCoffeesInTheCart(updatedArray);
    }

    coffeesInTheCart?.map(async (coffee: CoffeeDTO) => {
      if (coffee.id === newCoffee.id) {
        coffee.quantity += newCoffee.quantity;
        return setCoffeesInTheCart(coffeesInTheCart)
      }

      const updatedArray = coffeesInTheCart ? [...coffeesInTheCart, newCoffee] : [newCoffee] 
      setCoffeesInTheCart(updatedArray);
    });
  }

  function handleResetShoppingCart() {
    setCoffeesInTheCart([]); 
  }

  function handleRemoveCoffeeOfTheCart(id: string) {
    const removingCoffee = coffeesInTheCart.filter((coffee: CoffeeDTO) => coffee.id != id);
    setCoffeesInTheCart(removingCoffee);
  }

  function handleUpdatedCoffeeOfTheCart(id: string, quantity: number) {
    const coffee = coffeesInTheCart.filter((coffee: CoffeeDTO) => coffee.id === id);
    const coffeeUpdated = {
      id: coffee[0].id,
      name: coffee[0].name,
      description: coffee[0].description,
      type: coffee[0].type,
      size: coffee[0].size,
      price: coffee[0].price,
      quantity: quantity
    };
    
    const coffeesFiltered = coffeesInTheCart.filter((coffee: CoffeeDTO) => coffee.id != id);

    const updatedArray = coffeesInTheCart ? [...coffeesFiltered, coffeeUpdated] : [coffeeUpdated] 
    setCoffeesInTheCart(updatedArray);
  }

  const value = {
    coffeesInTheCart,
    filteredCoffees,
    handleSaveCoffee,
    handleResetShoppingCart,
    handleRemoveCoffeeOfTheCart,
    setFilteredCoffees,
    handleUpdatedCoffeeOfTheCart
  } as AppContextDataProps;

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
