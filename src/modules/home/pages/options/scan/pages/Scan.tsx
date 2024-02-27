import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import colors from '../../../../../../../colors';
import { NavigationProps } from '../../../../../../utils/interfaces';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Scan = ({ navigation }: NavigationProps) => {
    return (
        <View style={styles.mainWrapper}>
            <View style={styles.headerContainer}>
                <Text style={styles.heading}>Scan QR Code</Text>
                <Text>Place the product QR code inside the box once the camera opens to find out the genuinity</Text>
            </View>
            <View style={styles.subWrapper}></View>
            <View style={styles.footer}>
    <TouchableOpacity style={{ flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'flex-end' }}>
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
        paddingVertical: 20
    },
    heading: {
        fontSize: responsiveFontSize(3.3),
        color: colors.white,
        fontWeight: 'bold'
    },
    subWrapper: {
        flex: 1,
        backgroundColor: '#e7e7e7'
    },
    footer: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: colors.primaryColor,
        alignItems: 'flex-end',
        flexDirection: 'row',
        width: '100%'
    },
    iconContainer: {
        height: 25,
        width: 25,
        backgroundColor: colors.secondaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },

});

export default Scan;
