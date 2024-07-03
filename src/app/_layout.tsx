import { Stack } from 'expo-router';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AppContextProvider } from 'src/context/AppContext';

export default function Root() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppContextProvider>
        <Stack screenOptions={{ headerShown: false }} >
          <Stack.Screen name='home/index' options={{ animation: 'fade' }} />
          <Stack.Screen name='coffeeDetails/[id]' options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name='shoppingCart/index' options={{ animation: 'fade' }} />
          <Stack.Screen name='checkoutCompleted/index' options={{ animation: 'fade_from_bottom' }} />
        </Stack>
      </AppContextProvider>
    </GestureHandlerRootView>
  );
}
