import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '../modules/auth/stack/AuthNavigator';
import HomeStack from '../modules/home/stack/HomeStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTab from './BottomTab';

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loginStatus = await AsyncStorage.getItem('login');
      setIsLoggedIn(loginStatus === 'true');
    };
    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <BottomTab /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
