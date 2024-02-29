import { View, StyleSheet, Text, Image } from 'react-native';
import colors from '../../../../colors';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { NavigationProps } from '../../../utils/interfaces';
import { useAuth } from '../../../components/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


const PerformanceTracker = ({ navigation }: NavigationProps) => {
    const { login } = useAuth();

    useFocusEffect(
        useCallback(() => {
            const timeoutId = setTimeout(async () => {
                await AsyncStorage.setItem('login', 'true');
                login();
            }, 1000);
            return () => clearTimeout(timeoutId);
        }, [])
    );

    return (
        <View style={styles.mainWrapper}>
            <Image style={styles.maharajaIcon} source={require('../../../assets/Logo.png')} resizeMode='contain' />
            <View style={styles.container}>
                <Text style={styles.yellowText}>Current Performance rank in Rajasthan</Text>
                <Text style={[styles.number]}>10</Text>
            </View>
            <View style={{
                borderBottomColor: colors.white,
                borderBottomWidth: 3, width: '70%'
            }}></View>
            <View style={styles.container}>
                <Text style={styles.yellowText}>Current Performance rank in India</Text>
                <Text style={styles.number}>302</Text>
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
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    maharajaIcon: {
        height: 100
    },
    yellowText: {
        color: colors.secondaryColor,
        fontSize: responsiveFontSize(2.5),
        textAlign: 'center',
        width: '70%'
    },
    number: {
        color: colors.white,
        fontSize: responsiveFontSize(15),
        fontWeight: 'bold',
    },
    container: {
        alignItems: 'center',
        width: '100%'
    }
});

export default PerformanceTracker;
