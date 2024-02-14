import { View, Image, ImageBackground } from 'react-native';
import React from 'react';

const BottomTabLogo = () => {
  return (
    <View style={{ height: "100%", width: "100%" }}>
        <View style={{ height: '100%', width: '100%', justifyContent: 'space-around' }}>
          <Image
            style={{ height: "100%", width: "100%", marginBottom: 50}}
            resizeMode="contain"
            source={require('../assets/bottomTab.png')}
          />
        </View>
    </View>
  );
};

export default BottomTabLogo;
