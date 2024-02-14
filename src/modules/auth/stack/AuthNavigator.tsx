import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../pages/SplashScreen';
import EnterNumber from '../pages/EnterNumber';
import EnterOtp from '../pages/EnterOtp';
import HomeStack from '../../home/stack/HomeStack';
import RegisterUser from '../pages/RegisterUser';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="enterNumber" component={EnterNumber} />
      <Stack.Screen name="enterOtp" component={EnterOtp} />
      <Stack.Screen name="registerUser" component={RegisterUser} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
