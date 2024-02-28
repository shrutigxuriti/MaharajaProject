import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from '../modules/home/stack/HomeStack';
import Contact from '../modules/home/pages/options/contact/Contact';
import CustomTabHeader from './CustomTabHeader';
import colors from '../../colors';
import CustomDrawerContent from './CustomDrawerContent';
import PerformanceStack from '../modules/home/pages/options/performance/stack/PerformanceStack';
import RedeemStack from '../modules/home/pages/options/redemption/stack/RedeemStack';
import SchemeStack from '../modules/home/pages/options/schemes/stack/SchemeStack';
import WhatNew from '../modules/home/pages/options/new/WhatNew';
import ProductsStack from '../modules/home/pages/options/products/stack/ProductsStack';
import LogoutConfirmationPopup from './LogoutConfirmationPopup';
import { useAuth } from './AuthContext';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [isLogoutPopupVisible, setLogoutPopupVisible] = useState(false);
  const { logout } = useAuth();
  const navigation = useNavigation();

  const showLogoutPopup = () => {
    setLogoutPopupVisible(true);
  };
  const confirmLogout = () => {
    logout();
    hideLogoutPopup();
  };
  const hideLogoutPopup = () => {
    setLogoutPopupVisible(false);
    navigation.goBack();
  };
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
          header: (props) => <CustomTabHeader {...props} />,
          headerShown: false,
        }}
        drawerContent={(props) => (
          <CustomDrawerContent {...props} />
        )}>
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={() => ({
            headerShown: false,
          })}
        />
        <Drawer.Screen
          name="Performance"
          component={PerformanceStack}
          options={() => ({
            headerShown: true,
          })}
        />
        <Drawer.Screen
          name="Redeem Point"
          component={RedeemStack}
          options={() => ({
            headerShown: true,
          })}
        />
        <Drawer.Screen
          name="Schemes/Offers"
          component={SchemeStack}
          options={() => ({
            headerShown: true,
          })}
        />
        <Drawer.Screen
          name="What's New"
          component={WhatNew}
          options={() => ({
            headerShown: true,
          })}
        />
        <Drawer.Screen
          name="Contact"
          component={Contact}
          options={() => ({
            headerShown: true,
          })}
        />
        <Drawer.Screen
          name="Products"
          component={ProductsStack}
          options={() => ({
            headerShown: true,
          })}
        />
      </Drawer.Navigator></>
  );
};

export default DrawerNavigator;
