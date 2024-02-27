import { View, StyleSheet, Text, Image, TextInput } from 'react-native';
import colors from '../../../../colors';
import { responsiveFontSize, responsiveWidth } from "react-native-responsive-dimensions";
import { NavigationProps } from '../../../utils/interfaces';
import Buttons from '../../../components/Buttons';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../../components/AuthContext'; 
interface EnterOtpProps {
    navigation: any;
    route: {
      params: {
        usernumber: string;
      };
    };
  }

const EnterOtp: React.FC<EnterOtpProps> = ({ navigation, route }) => {
    const { usernumber } = route.params;
    const [otp, setOtp] = useState('');
    const { login } = useAuth();


    const loginwithotp = async () => {
        await AsyncStorage.setItem('login', 'true');
        login();
    }
    const proceed =() => {
        if(otp == '111111'){
            navigation.navigate('registerUser', {usernumber: usernumber});
        }
        else{
            loginwithotp();
        }
    }

    return (
        <View style={styles.mainWrapper}>
            <View>
                <Image style={styles.maharajaIcon} source={require('../../../assets/Logo.png')} resizeMode='contain' />
            </View>
            <View style={styles.centerContainer}>
                <View style={{alignItems: 'center'}}>
                <Text style={styles.whiteText}>Enter OTP (One Time Password)</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.countryCode}>
                        +91
                    </Text>
                    <TextInput
                        style={styles.input}
                        editable={false}
                        value={usernumber}
                    />
                </View>
                <View style={styles.otpinputContainer}>
                    <TextInput
                        style={styles.input}
                        editable={true}
                        value={otp}
                        keyboardType='numeric'
                        onChangeText={(text)=>setOtp(text)}
                        maxLength={6}
                    />
                </View>
                </View>
                <Buttons
                    label={'Proceed'}
                    onPress={proceed}
                    disabled={false}
                    variant={'primary'}
                    width={100}
                />
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
    maharajaIcon: {
        height: 100
    },
    whiteText: {
        color: colors.white,
        fontSize: responsiveFontSize(2.5),
    },
    centerContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 150,
        paddingBottom: 100
    },
    input: {
        color: colors.white,
        fontSize: responsiveFontSize(3),
        width: '100%',
        letterSpacing: 3
    },
    inputContainer: {
        marginTop: 40,
        marginBottom: 20,
        width: responsiveWidth(70),
        backgroundColor: colors.lightGrey,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    otpinputContainer: {
        marginBottom: 40,
        width: responsiveWidth(35),
        backgroundColor: colors.lightGrey,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    countryCode: {
        color: colors.white,
        fontSize: responsiveFontSize(3),
        marginRight: 10,
        letterSpacing: 3
    }
});

export default EnterOtp;
