import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import colors from '../../../../../../colors';
import { NavigationProps } from '../../../../../utils/interfaces';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Refer = ({ navigation }: NavigationProps) => {
    return (
        <View style={styles.mainWrapper}>
            <Text style={styles.heading}>Refer & Earn</Text>
            <View style={styles.spinWheelContainer}>
                <View style={{ flexDirection: 'column', flex: 3 }}>
                    <Text style={styles.subHeading}>Spin-Refer-Earn</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: colors.black, fontWeight: 'bold', fontSize: responsiveFontSize(1.7) }}>
                            Spin wheel
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} resizeMode='contain' source={require('../../../../../assets/refer.png')} />
                    <Text style={{ width: '100%', color: colors.black, fontSize: responsiveFontSize(1.2), textAlign: 'center' }}>
                        Submit Details & Win Free Spins Daily*
                    </Text>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={[styles.subHeading, { marginBottom: 20 }]}>Invite Your Friends</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} placeholder='Enter mobile number' placeholderTextColor={colors.lightGrey} />
                    <MaterialIcons name={'content-copy'} size={20} color={colors.primaryColor} />
                </View>
                <TouchableOpacity style={[styles.button, {marginBottom: 10}]}>
                        <Text style={{ color: colors.black, fontWeight: 'bold', fontSize: responsiveFontSize(1.7) }}>
                            Share Link
                        </Text>
                    </TouchableOpacity>
            </View>
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
        color: colors.black,
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        marginBottom: 20
    },
    spinWheelContainer: {
        backgroundColor: colors.white,
        elevation: 5,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    subHeading: {
        fontSize: responsiveFontSize(2),
        color: colors.black,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: colors.secondaryColor,
        padding: 5,
        borderRadius: 20,
        width: 100,
        alignItems: 'center',
        marginTop: 20,
        elevation: 5,
    },
    container: {
        backgroundColor: colors.white,
        width: '100%',
        marginTop: 20,
        elevation: 5,
        borderRadius: 10,
        padding: 10
    },
    inputContainer: {
        backgroundColor: colors.lightLightGrey,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    textInput: {
        flex: 1,
    },
});

export default Refer;
