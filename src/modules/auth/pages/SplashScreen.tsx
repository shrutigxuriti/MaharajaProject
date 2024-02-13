import { View, StyleSheet, Text, Image } from 'react-native';
import colors from '../../../../colors';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { NavigationProps } from '../../../utils/interfaces';


const SplashScreen = ({ navigation }: NavigationProps) => {
    useFocusEffect(
        useCallback(() => {
          const timeoutId = setTimeout(() => {
            navigation.navigate('enterNumber');
          }, 1000);
          return () => clearTimeout(timeoutId);
        }, [])
      );

    return (
        <View style={styles.mainWrapper}>
            <View>
                <Image style={styles.fixceraIcon} source={require('../../../assets/fixcera.png')} resizeMode='contain' />
            </View>
            <View style={styles.centerContainer}>
                <Image style={styles.maharajaIcon} source={require('../../../assets/Logo.png')} resizeMode='contain' />
                <Text style={styles.yellowText}>Contractor Loyalty Program</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        padding: 25,
        backgroundColor: colors.primaryColor,
        alignItems: 'center',
    },
    fixceraIcon: {
        height: 50,
    },
    maharajaIcon: {
        height: 200
    },
    yellowText: {
        color: colors.secondaryColor,
        fontSize: responsiveFontSize(2.5),
    },
    centerContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default SplashScreen;
