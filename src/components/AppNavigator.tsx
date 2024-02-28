import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '../modules/auth/stack/AuthNavigator';
import HomeStack from '../modules/home/stack/HomeStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from './AuthContext';
import DrawerNavigator from './DrawerNavigator';

const AppNavigator = () => {
  const { isUserAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isUserAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
