import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import AdviceScreen from './components/AdviceScreen';
import WeatherScreen from './components/WeatherScreen';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Advice" component={AdviceScreen} />
        <Drawer.Screen name="Weather" component={WeatherScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
