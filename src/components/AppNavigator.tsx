import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '../modules/auth/stack/AuthNavigator';
import HomeStack from '../modules/home/stack/HomeStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTab from './BottomTab';
import { useAuth } from './AuthContext';

const AppNavigator = () => {
  const { isUserAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isUserAuthenticated ? <BottomTab /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
