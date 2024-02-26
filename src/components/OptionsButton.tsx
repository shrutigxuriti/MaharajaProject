import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../colors';
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const OptionButton = ({ iconName, text, screenName, iconType }: { iconName?: string, text: string, screenName: string, iconType: string }) => {
    const navigation = useNavigation();

    const renderIcon = (name: string) => {
        switch (name) {
            case 'MaterialIcons':
                return <MaterialIcons name={iconName} size={30} color={colors.secondaryColor} />;
            case 'MaterialCommunityIcons':
                return <MaterialCommunityIcons name={iconName} size={30} color={colors.secondaryColor} />;
            case 'Ionicons':
                return <Ionicons name={iconName} size={30} color={colors.secondaryColor} />;
            case 'Octicons':
                return <Octicons name={iconName} size={30} color={colors.secondaryColor} />;
            case 'AntDesign':
                return <AntDesign name={iconName} size={30} color={colors.secondaryColor} />;
            case 'upi-transfer':
                return <Image source={require('../assets/upiTransfer.webp')} resizeMode='contain' style={{height: 30, width: 50}} />
            default:
                return null;
        }
    };

    return (
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate(screenName)}>
            {renderIcon(iconType)}
            <Text style={styles.optionText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    option: {
        padding: 10,
        height: 100,
        width: 100,
        elevation: 10,
        backgroundColor: colors.white,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 10,
        gap: 10
    },
    optionText: {
        color: colors.black,
        fontSize: responsiveFontSize(1.5),
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default OptionButton;
