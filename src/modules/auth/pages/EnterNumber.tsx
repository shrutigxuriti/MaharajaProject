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
                <Text style={styles.whiteText}>Enter your mobile number</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        editable={true}
                        value={number}
                        keyboardType='numeric'
                        onChangeText={(text)=>setNumber(text)}
                    />
                </View>
                <Buttons
                    label={'Get OTP'}
                    onPress={() => console.log('PRESSED')}
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
        justifyContent: 'center',
    },
    input: {
        color: colors.white,
        fontSize: responsiveFontSize(3),
        width: '100%'
    },
    inputContainer: {
        marginVertical: 20,
        width: responsiveWidth(80),
        backgroundColor: colors.lightGrey,
        borderRadius: 5,
        // borderColor: colors.white,
        // borderWidth: 2
    }
});

export default EnterNumber;
