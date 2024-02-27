import { View, StyleSheet, Text, Image, TextInput } from 'react-native';
import colors from '../../../../colors';
import { responsiveFontSize, responsiveWidth } from "react-native-responsive-dimensions";
import { NavigationProps } from '../../../utils/interfaces';
import Buttons from '../../../components/Buttons';
import { useState } from 'react';


const EnterNumber = ({ navigation }: NavigationProps) => {

    const [number, setNumber] = useState('');
    return (
        <View style={styles.mainWrapper}>
            <View>
                <Image style={styles.maharajaIcon} source={require('../../../assets/Logo.png')} resizeMode='contain' />
            </View>
            <View style={styles.centerContainer}>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.whiteText}>Enter your mobile number</Text>
                    <View style={styles.inputContainer}>
                        <Text style={styles.countryCode}>
                            +91
                        </Text>
                        <TextInput
                            style={styles.input}
                            editable={true}
                            value={number}
                            keyboardType='numeric'
                            onChangeText={(text) => setNumber(text)}
                            maxLength={10}
                        />
                    </View>
                </View>
                <Buttons
                    label={'Get OTP'}
                    onPress={() => navigation.navigate('enterOtp', { usernumber: number })}
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
    fixceraIcon: {
        height: 50,
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
        paddingBottom: 100,
        paddingTop: 150
    },
    input: {
        color: colors.white,
        fontSize: responsiveFontSize(3),
        width: '100%',
        letterSpacing: 3
    },
    inputContainer: {
        marginVertical: 20,
        width: responsiveWidth(70),
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

export default EnterNumber;
