import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/HomeScreen';
import SettingsScreen from './app/SettingsScreen';
import AdviceScreen from './app/AdviceScreen';
import DetailsScreen from './app/DetailsScreen'; 
import CategoryScreen from './app/CategoryScreen'; 
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Advice" component={AdviceScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
        <Drawer.Screen name="Category" component={CategoryScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
