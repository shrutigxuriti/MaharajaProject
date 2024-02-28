import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import colors from '../../colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LogoutConfirmationPopup from './LogoutConfirmationPopup';
import { useAuth } from './AuthContext';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  const { logout } = useAuth();
  const [isLogoutPopupVisible, setLogoutPopupVisible] = useState(false);

  const hideLogoutPopup = () => {
    setLogoutPopupVisible(false);
    navigation.goBack();
  };

  const confirmLogout = () => {
    logout();
    hideLogoutPopup();
  };

  const showLogoutPopup = () => {
    setLogoutPopupVisible(true);
  };

  return (
    <>
      <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
        <View style={{
          paddingHorizontal: 20,
          paddingVertical: 30,
          alignItems: 'center',
          gap: 10,
          backgroundColor: colors.primaryColor
        }}>
          <FontAwesome name={'user-circle'} size={50} color={colors.white} />

          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: responsiveFontSize(1.7), color: colors.white, fontWeight: 'bold' }}>
              TEST USER
            </Text>
            <Text style={{ fontSize: responsiveFontSize(1.3), color: colors.white }}>
              TUSER ID HFLP5468
            </Text>
          </View>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Logout Button */}
      <TouchableOpacity onPress={showLogoutPopup} style={{ backgroundColor: colors.lightLightGrey, paddingHorizontal: 20, paddingVertical: 50, flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        <Text style={{ color: colors.primaryColor }}>
          Logout
        </Text>
        <MaterialIcons name={'logout'} size={24} color={colors.secondaryColor} />
      </TouchableOpacity>

      {/* Logout Confirmation Popup */}
      <LogoutConfirmationPopup isVisible={isLogoutPopupVisible} onConfirm={confirmLogout} onClose={hideLogoutPopup} />
    </>
  );
};

export default CustomDrawerContent;
