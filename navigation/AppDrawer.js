import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import AboutScreen from '../screens/AboutScreen';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={HomeScreen} />
      <Drawer.Screen name="Contacto" component={ContactScreen} />
      <Drawer.Screen name="Acerca" component={AboutScreen} />
    </Drawer.Navigator>
  );
}