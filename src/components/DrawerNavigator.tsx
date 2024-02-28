import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from '../modules/home/stack/HomeStack';
import Contact from '../modules/home/pages/options/contact/Contact';
import CustomTabHeader from './CustomTabHeader';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
      <Drawer.Navigator 
      initialRouteName="Home" 
      screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
  );
}

export default DrawerNavigator;
