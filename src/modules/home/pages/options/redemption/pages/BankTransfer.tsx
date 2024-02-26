import { View, StyleSheet, Text, Image, Touchable, TouchableOpacity } from 'react-native';
import colors from '../../../../../../../colors';
import { NavigationProps } from '../../../../../../utils/interfaces';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import InputField from '../../../../../../components/InputField';
import PickerField from '../../../../../../components/PickerField';
import { useState } from 'react';
import ImagePickerField from '../../../../../../components/ImagePickerField';
import Buttons from '../../../../../../components/Buttons';

const BankTransfer = ({ navigation }: NavigationProps) => {
    const [bankName, setBankName] = useState('');
    const [account, setAccount] = useState('');
    const accountType = [
        {
            label: 'Current',
            value: 'Current'
        },
        {
            label: 'Savings',
            value: 'Savings'
        }
    ]
    const availableBanks = [
        {
            label: 'ABC',
            value: 'ABC'
        },
        {
            label: 'SBI',
            value: 'SBI'
        }
    ]
    return (
        <View style={styles.mainWrapper}>
            <Text style={styles.Heading}>Bank Transfer</Text>
            <View style={styles.formContainer}>
                <InputField
                    label={'Account Number'}
                    onChangeText={(text) => console.log(text)} />
                <InputField
                    label={'Account Holder Name'}
                    onChangeText={(text) => console.log(text)} />
                <PickerField
                    label={'Type of Account'}
                    selectedValue={account}
                    onValueChange={(itemValue) => setAccount(itemValue)}
                    items={accountType}
                />
                <PickerField
                    label={'Select Bank Name & Branch'}
                    selectedValue={bankName}
                    onValueChange={(itemValue) => setBankName(itemValue)}
                    items={availableBanks}
                />
                <InputField
                    label={'IFSC Code'}
                    onChangeText={(text) => console.log(text)} />
                <ImagePickerField label={'Upload Cancelled Cheque Copy'} imageRelated={''} />
            </View>
            <Buttons
                    label={'Proceed'}
                    onPress={()=>console.log('pressed')}
                    disabled={false}
                    variant={'primary'}
                    width={'100%'}
                />
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
    Heading: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(3)
    },
    formContainer: {
        width: '100%',
        marginVertical: 30
    }
});

export default BankTransfer;
