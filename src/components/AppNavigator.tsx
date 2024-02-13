import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import BottomTab from '../modules/common/services/BottomTab';
import AuthNavigator from '../modules/auth/stack/AuthNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
