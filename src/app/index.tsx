import 'react-native-gesture-handler';

import { StatusBar, Text } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Baloo2_400Regular, Baloo2_700Bold } from "@expo-google-fonts/baloo-2";

import Splash from './splash';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, Baloo2_400Regular, Baloo2_700Bold });
  
  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      { fontsLoaded ? <Splash /> : (<Text> Carregando fonts </Text>) }
    </>
  );
}
