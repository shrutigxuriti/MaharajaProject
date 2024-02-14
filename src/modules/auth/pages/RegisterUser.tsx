import { View, StyleSheet, Text, Image, TextInput } from 'react-native';
import colors from '../../../../colors';
import { responsiveFontSize, responsiveWidth } from "react-native-responsive-dimensions";
import { NavigationProps } from '../../../utils/interfaces';
import Buttons from '../../../components/Buttons';
import { useState } from 'react';
import InputField from '../../../components/InputField';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface RegisterUserProps {
    navigation: any;
    route: {
      params: {
        usernumber: string;
      };
    };
  }

const RegisterUser: React.FC<RegisterUserProps> = ({ navigation, route }) => {
    const { usernumber } = route.params;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [language, setLanguage] = useState('');

    const login = () => {
        AsyncStorage.setItem('login', 'true')
    }
    return (
        <View style={styles.mainWrapper}>
            <Text style={styles.heading}>Create Account</Text>
            <View style={styles.formContainer}>
                <InputField
                    label={'Enter your First Name'}
                    value={firstName}
                    onChangeText={(text) => setFirstName(text)}
                />
                <InputField
                    label={'Enter your Last Name'}
                    value={lastName}
                    onChangeText={(text) => setLastName(text)}
                />
                <InputField
                    label={'Enter your Mobile Number'}
                    value={usernumber}
                    disabled={true}
                />
                <InputField
                    label={'Enter your Email Address'}
                    value={emailAddress}
                    onChangeText={(text) => setEmailAddress(text)}
                />
                <InputField
                    label={'Enter your Preferred Language'}
                    value={language}
                    onChangeText={(text) => setLanguage(text)}
                />
            </View>
            <Buttons 
            label={'Sign Up'} onPress={login} disabled={false} variant={'primary'} width={100} />
        </View>
    );
};

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        padding: 25,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    heading: {
        color: colors.secondaryColor,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(3)
    },
    formContainer: {
        width: '100%',
        marginVertical: 50,
        flexDirection: 'column',
        gap: 15
    }
});

export default RegisterUser;
