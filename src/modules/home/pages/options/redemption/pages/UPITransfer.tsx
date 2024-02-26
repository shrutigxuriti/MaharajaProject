import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import colors from '../../../../../../../colors';
import { NavigationProps } from '../../../../../../utils/interfaces';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const UPITransfer = ({ navigation }: NavigationProps) => {
    return (
        <View style={styles.mainWrapper}>
            <Text style={styles.Heading}>UPI Transfer</Text>
            <View style={styles.container}>
                <Text style={[styles.subHeading, { marginBottom: 20 }]}>Enter and Verify UPI VPA</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} placeholder='Enter UPI VPA' placeholderTextColor={colors.lightGrey} />
                    <MaterialIcons name={'check'} size={20} color={colors.secondaryColor} />
                </View>
                <TouchableOpacity style={[styles.button, {marginBottom: 10}]}>
                        <Text style={{ color: colors.black, fontWeight: 'bold', fontSize: responsiveFontSize(1.7) }}>
                            Proceed
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
    Heading: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(3)
    },
    container: {
        backgroundColor: colors.white,
        width: '100%',
        marginTop: 20,
        elevation: 5,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center'
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
});

export default UPITransfer;
