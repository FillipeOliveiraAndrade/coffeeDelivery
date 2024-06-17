import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Baloo2_400Regular, Baloo2_700Bold } from "@expo-google-fonts/baloo-2";

import { Home } from '@screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, Baloo2_400Regular, Baloo2_700Bold });

  return (
    <View>
      <StatusBar style="auto" />
      { fontsLoaded ? <Home /> : (<Text> Carregando fonts </Text>) }
    </View>
  );
}
