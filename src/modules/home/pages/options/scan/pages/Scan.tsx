import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import colors from '../../../../../../../colors';
import { NavigationProps } from '../../../../../../utils/interfaces';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Scan = ({ navigation }: NavigationProps) => {
    return (
        <View style={styles.mainWrapper}>
            <View style={styles.headerContainer}>
                <Text style={styles.heading}>Scan QR Code</Text>
                <Text style={styles.subHeading}>Place the product QR code inside the box once the camera opens to find out the genuinity</Text>
            </View>
            <View style={styles.subWrapper}>
                <View style={{ alignItems: 'center' }}>
                    <Image resizeMode='contain' style={{ width: responsiveWidth(60), height: responsiveWidth(60) }} source={require('../../../../../../assets/scan.png')} />
                    <TouchableOpacity style={styles.tapScanContainer}>
                        <Text style={styles.taptoscan}>Tap to Scan</Text>
                        <View style={{
                            backgroundColor: colors.black,
                            flex: 1,
                            alignItems: 'center',
                            paddingVertical: 10,
                            borderBottomRightRadius: 10,
                            borderTopRightRadius: 10,
                            height: '100%',
                            justifyContent: 'center'
                        }}>
                            <MaterialCommunityIcons name={'camera'} size={20} color={colors.white} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    gap: 10,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginBottom: 10
                }}
                onPress={()=>navigation.navigate('QR Code History')}
                >
                    <Text style={{ color: colors.white, fontSize: responsiveFontSize(1.5), fontWeight: 'bold' }}>
                        Go to QR Code History
                    </Text>
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name={'arrow-right'} size={15} color={colors.white} />
                    </View>
                </TouchableOpacity>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    headerContainer: {
        backgroundColor: colors.primaryColor,
        width: '100%',
        paddingHorizontal: 50,
        paddingVertical: 20,
        alignItems: 'center'
    },
    heading: {
        fontSize: responsiveFontSize(3.3),
        color: colors.white,
        fontWeight: 'bold'
    },
    subWrapper: {
        flex: 1,
        width: '100%',
        backgroundColor: '#e7e7e7',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: colors.primaryColor,
        alignItems: 'flex-end',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end'
    },
    iconContainer: {
        height: 25,
        width: 25,
        backgroundColor: colors.secondaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },
    subHeading: {
        fontSize: responsiveFontSize(1.8),
        color: colors.lightLightGrey,
        textAlign: 'center'
    },
    tapScanContainer: {
        width: responsiveWidth(60),
        flexDirection: 'row',
        marginTop: 100,
        borderRadius: 10,
        elevation: 10,
        alignItems: 'center',
        height: 50,
        backgroundColor: colors.secondaryColor
    },
    taptoscan: {
        color: colors.primaryColor,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(1.7),
        flex: 2,
        textAlign: 'center',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    }

});

export default Scan;
