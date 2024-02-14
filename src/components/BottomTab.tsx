import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { useState, useEffect } from 'react';
import BottomTabBar from './BottomTabBar';
import HomeStack from '../modules/home/stack/HomeStack';
import colors from '../../colors';
import { View, Text, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity, Alert, Modal } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const CustomTabHeader = ({ route, handleLanguageButtonPress  }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '97%' }}>
      <Image
        source={require('../assets/Logo.png')}
        style={{ width: 83, height: 30, marginLeft: 10 }}
      />
    </View>
  );
}

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  const [isLogoutPopupVisible, setLogoutPopupVisible] = useState(false);

  const showLogoutPopup = () => {
    setLogoutPopupVisible(true);
  };

  const navigation = useNavigation();

  const hideLogoutPopup = () => {
    setLogoutPopupVisible(false);
    navigation.goBack();

  };

  const confirmLogout = () => {
    hideLogoutPopup();  
  };

  
  

  return (
    <>
      <Tab.Navigator
        initialRouteName="HomeStack"
        tabBar={props => <BottomTabBar {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.black,
          },
          headerTitleStyle: {
            color: colors.black,
          },
          headerShown: false,
        }}>
        <Tab.Screen name="Home" component={HomeStack} screenOptions={{ headerShown: false }} />
        <Tab.Screen name="Scan" component={HomeStack} screenOptions={{ headerShown: false }} />
        <Tab.Screen name="Logout" listeners={{ tabPress: showLogoutPopup }} component={({ route }) => {
          return route.state ? route.state.routes[route.state.index].route.params.getComponent() : null;
        }} />
      </Tab.Navigator>
    </>
  );
};
export { CustomTabHeader };
export default BottomTab;

