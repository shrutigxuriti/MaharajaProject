import { View, StyleSheet, Text, Image } from 'react-native';
import colors from '../../../../../../../colors';
import { NavigationProps } from '../../../../../../utils/interfaces';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Performance = ({ navigation }: NavigationProps) => {
    return (
        <View style={styles.mainWrapper}>
            <View style={styles.detailsContainer}>
            <Image style={{ height: 30, width: 30 }} source={require('../../../../../../assets/usericon.png')} />
                <View style={{ flexDirection: 'column', marginLeft: 10, gap: 2 }}>
                    <Text style={{ color: colors.secondaryColor, fontSize: responsiveFontSize(1.5), fontWeight: 'bold' }}>TEST USER</Text>
                    <Text style={{ color: colors.secondaryColor, fontSize: responsiveFontSize(1.3) }}>USER ID 222</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
                <View style={styles.performanceContainer}>
                    <MaterialIcons name={'generating-tokens'} size={20} color={colors.white} />
                    <Text style={styles.pointsHeading}>Total Earned Points</Text>
                    <Text style={styles.points}>7777</Text>
                </View>
                <View style={styles.performanceContainer}>
                    <MaterialIcons name={'generating-tokens'} size={20} color={colors.white} />
                    <Text style={styles.pointsHeading}>Redeemable Points Balance</Text>
                    <Text style={styles.points}>3777</Text>
                </View>
                <View style={styles.performanceContainer}>
                    <MaterialIcons name={'generating-tokens'} size={20} color={colors.white} />
                    <Text style={styles.pointsHeading}>Current Points Balance</Text>
                    <Text style={styles.points}>4545</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <View style={{ flexDirection: 'column', gap: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 20, alignItems: 'center' }}>
                        <View style={styles.gridContainer}>
                            <Text style={styles.performanceHeading}>Current performance rank in Rajasthan</Text>
                            <Text style={styles.performanceDetail}>10</Text>
                            <MaterialIcons name={'auto-graph'} size={20} color={colors.white} />
                        </View>
                        <View style={styles.gridContainer}>
                            <Text style={styles.performanceHeading}>Current performance rank in India</Text>
                            <Text style={styles.performanceDetail}>302</Text>
                            <MaterialIcons name={'auto-graph'} size={20} color={colors.white} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 20, alignItems: 'center' }}>
                        <View style={[styles.gridContainer, {backgroundColor: colors.secondaryColor}]}>
                            <Text style={styles.performanceHeading}>Total Payouts (In INR)</Text>
                            <Text style={styles.performanceDetail}>1259</Text>
                            <MaterialIcons name={'payments'} size={20} color={colors.white} />
                        </View>
                        <View style={styles.gridContainer}>
                            <Text style={styles.performanceHeading}>Last Scan Date</Text>
                            <Text style={styles.performanceDetail}>Dec 06, 2022</Text>
                            <MaterialIcons name={'calendar-month'} size={20} color={colors.white} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 20, alignItems: 'center' }}>
                        <View style={[styles.gridContainer]}>
                            <Text style={styles.performanceHeading}>Total QR Code Scanned</Text>
                            <Text style={styles.performanceDetail}>1259</Text>
                            <MaterialIcons name={'qr-code-2'} size={20} color={colors.white} />
                        </View>
                        <View style={styles.gridContainer}>
                            <Text style={styles.performanceHeading}>Last Payout Date</Text>
                            <Text style={styles.performanceDetail}>Jul 26, 2022</Text>
                            <MaterialIcons name={'calendar-month'} size={20} color={colors.white} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        backgroundColor: colors.primaryColor,
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 15,
        backgroundColor: colors.white
    },
    performanceContainer: {
        flex: 1,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pointsHeading: {
        fontSize: responsiveFontSize(1.3),
        color: colors.white,
        textAlign: 'center',
    },
    points: {
        fontSize: responsiveFontSize(3.3),
        color: colors.secondaryColor,
        fontWeight: 'bold'
    },
    gridContainer: {
        backgroundColor: colors.lightGrey,
        width: responsiveHeight(15),
        height: responsiveHeight(15),
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
        elevation: 5,
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    performanceHeading: {
        fontSize: responsiveFontSize(1.3),
        color: colors.white,
        textAlign: 'center',
    },
    performanceDetail: {
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        color: colors.black,
        textAlign: 'center'
    }
});

export default Performance;
