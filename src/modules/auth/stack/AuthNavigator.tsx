import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../pages/SplashScreen';
import EnterNumber from '../pages/EnterNumber';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="enterNumber" component={EnterNumber} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
