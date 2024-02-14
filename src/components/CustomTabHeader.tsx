import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../colors';

const CustomTabHeader = ({ navigation }) => {

    const handleWishlistPress = () => {
        navigation.navigate('Wishlist')
    };

    const handleNotificationPress = () => {
        navigation.navigate('Notifications')
    }

    return (
        <View style={styles.container}>
            {/* <TouchableOpacity onPress={handleMenuPress}>
                <Icon name="menu" size={24} color="white" />
            </TouchableOpacity> */}
            <View style={styles.rightFlex}>
                <TouchableOpacity onPress={handleWishlistPress}>
                    <Icon name="heart-outline" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNotificationPress}>
                    <Icon name="notifications-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: colors.primaryColor,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    rightFlex: {
        flexDirection: 'row',
        gap: 20,
    }
});

export default CustomTabHeader;
