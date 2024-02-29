import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import colors from '../../../../colors';
import { responsiveFontSize, responsiveWidth } from "react-native-responsive-dimensions";
import { NavigationProps } from '../../../utils/interfaces';
import Buttons from '../../../components/Buttons';
import { useState } from 'react';
import InputField from '../../../components/InputField';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../../components/AuthContext';
import DatePickerField from '../../../components/DatePickerField';
import PickerField from '../../../components/PickerField';
import { MaharajaUser } from '../../../utils/interfaces/UserData';
import ImagePickerField from '../../../components/ImagePickerField';
import Popup from '../../../components/Popup';

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

    const { login } = useAuth();

    const [postData, setPostData] = useState<MaharajaUser | any>();
    const [isPopupVisible, setPopupVisible] = useState(false)


    const loginwithotp = async () => {
        setPopupVisible(true);
    }

    const handleCloseButton = async () => {
        setPopupVisible(false);
        navigation.navigate('PerformanceTracker')
    }

    const handleInputChange = (label: string, value: string) => {
        setPostData((prevData: MaharajaUser) => ({
            ...prevData,
            [label]: value
        }))
    }

    const maritalStatus = [
        { label: 'Select Option', value: '' },
        { label: 'Married', value: 'Married' },
        { label: 'Unmarried', value: 'Unmarried' }
    ];
    return (
        <ScrollView style={styles.mainWrapper}>
            <Popup isVisible={isPopupVisible} onClose={handleCloseButton} content={'Registration Successful!'} />
            <View style={styles.detailsContainer}>
                <Image style={{ height: 50, width: 50 }} source={require('../../../assets/usericon.png')} />
                <View style={{ flexDirection: 'column', marginLeft: 10, gap: 2 }}>
                    <Text style={{ color: colors.primaryColor, fontSize: responsiveFontSize(1.5), fontWeight: 'bold' }}>TEST USER</Text>
                    <Text style={{ color: colors.primaryColor, fontSize: responsiveFontSize(1.3) }}>USER ID 222</Text>
                    <Text style={{ color: colors.primaryColor, fontSize: responsiveFontSize(1.3) }}>Mobile No. {usernumber}</Text>
                </View>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.secondaryText}>
                    Profile/Basic Details
                </Text>
                <InputField
                    label={'Name*'}
                    value={postData?.name}
                    onChangeText={(text) => handleInputChange('name', text)}
                />
                <InputField
                    label={'Mobile Number*'}
                    value={usernumber}
                    disabled={true}
                    onChangeText={(text) => handleInputChange('mobileNumber', text)}
                />
                <DatePickerField
                    label={'Date of Birth*'}
                    date={postData?.dob}
                    onDateChange={(date) => handleInputChange('dob', date)}
                />
                <PickerField
                    label={'Marital Status*'}
                    items={maritalStatus}
                    onValueChange={(text: string) => handleInputChange('maritalStatus', text)}
                    selectedValue={postData?.maritalStatus}
                />
                <DatePickerField
                    label={'Anniversary Date'}
                    date={postData?.anniversaryDate}
                    onDateChange={(date) => handleInputChange('anniversaryDate', date)}
                />
                <InputField
                    label={'Email ID'}
                    value={postData?.emailId}
                    onChangeText={(text) => handleInputChange('emailId', text)}
                />
                <InputField
                    label={'Address -- House No./Block No.*'}
                    value={postData?.address}
                    onChangeText={(text) => handleInputChange('address', text)}
                />
                <InputField
                    label={'Street Name*'}
                    value={postData?.streetName}
                    onChangeText={(text) => handleInputChange('streetName', text)}
                />
                <InputField
                    label={'City*'}
                    value={postData?.city}
                    onChangeText={(text) => handleInputChange('city', text)}
                />
                <InputField
                    label={'State*'}
                    value={postData?.state}
                    onChangeText={(text) => handleInputChange('state', text)}
                />
                <InputField
                    label={'Region*'}
                    value={postData?.region}
                    onChangeText={(text) => handleInputChange('region', text)}
                />
                <InputField
                    label={'Pincode*'}
                    value={postData?.pincode}
                    onChangeText={(text) => handleInputChange('pincode', text)}
                />
                <Text style={styles.secondaryText}>
                    KYC Details
                </Text>
                <InputField
                    label={'Enter Aadhar Number*'}
                    value={postData?.kycDetails?.aadharNo}
                    onChangeText={(text) => handleInputChange('kycDetails.aadharNo', text)}
                />
                <ImagePickerField
                    label={'Upload Aadhar Card'}
                    imageRelated={''}
                />
                <InputField
                    label={'Enter PAN Number*'}
                    value={postData?.kycDetails?.panNo}
                    onChangeText={(text) => handleInputChange('kycDetails.panNo', text)}
                />
                <ImagePickerField
                    label={'Upload PAN Card'}
                    imageRelated={''}
                />
                <View style={styles.buttons}>
                <Buttons
                label={'Preview'} onPress={loginwithotp} disabled={true} variant={'outlined'} width={100} />
                <Buttons
                label={'Edit'} onPress={loginwithotp} disabled={true} variant={'outlined'} width={100} />
                <Buttons
                label={'Submit'} onPress={loginwithotp} disabled={false} variant={'primary'} width={100} />
                </View>
            </View>
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    mainWrapper: {
        padding: 25,
        backgroundColor: colors.white,
    },
    heading: {
        color: colors.secondaryColor,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(3)
    },
    formContainer: {
        width: '100%',
        flexDirection: 'column',
        marginBottom: 50,
    },
    secondaryText: {
        color: colors.secondaryColor,
        marginVertical: 10
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        marginBottom: 10
    },
});

export default RegisterUser;
