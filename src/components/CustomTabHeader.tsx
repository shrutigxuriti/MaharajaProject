import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../colors';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const CustomTabHeader = ({ navigation, route }: { navigation: any, route: any }) => {
    const screenName = route.name;

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleMenuPress = () => {
        // navigation.openDrawer(); // Open the side menu bar
        console.log('Pressed')
        navigation.toggleDrawer();
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                <TouchableOpacity onPress={handleGoBack}>
                    <View style={{ height: 24, width: 24 }}>
                        <Icon name="arrow-back" size={24} color="white" />
                    </View>
                </TouchableOpacity>
                <Text style={{ fontSize: responsiveFontSize(2.5), color: colors.white }}>
                    {screenName}
                </Text>
            </View>
            <TouchableOpacity onPress={handleMenuPress}>
                <View style={{ height: 24, width: 24 }}>
                    <Icon name="menu" size={24} color="white" />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.primaryColor,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
});

export default CustomTabHeader;
