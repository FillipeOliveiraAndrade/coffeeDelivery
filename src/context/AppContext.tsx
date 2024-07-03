import React, { createContext, useEffect, useState } from "react";

import { coffees } from 'src/data/coffee';

import { CoffeeDTO } from "src/dtos/CoffeeDTO";

type AppContextProviderProps = {
  children: React.ReactNode;
};

type AppContextDataProps = {
  handleSaveCoffee: (coffee: CoffeeDTO) => Promise<void>;
  handleResetShoppingCart: () => void;
  handleRemoveCoffeeOfTheCart: (id: string) => Promise<void>;
  setFilteredCoffees: (name: string) => void;

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

  const value = {
    coffeesInTheCart,
    filteredCoffees,
    handleSaveCoffee,
    handleResetShoppingCart,
    handleRemoveCoffeeOfTheCart,
    setFilteredCoffees
  } as AppContextDataProps;

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
