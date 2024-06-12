import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Home } from "@screens/Home";
import { CoffeeDetails } from "@screens/CoffeeDetails";
import { ShoppingCart } from "@screens/ShoppingCart";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen 
        name='home'
        component={Home}
      />

      <Screen
        name='coffee-details'
        component={CoffeeDetails}
      />

      <Screen
        name='shopping-cart'
        component={ShoppingCart}
      />
    </Navigator>
  )
}
