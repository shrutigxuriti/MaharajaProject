import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import colors from '../../../../../../../colors';
import { NavigationProps } from '../../utils/interfaces';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OptionButton from '../../../../../../components/OptionsButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Redeem = ({ navigation }: NavigationProps) => {
    return (
        <View style={styles.mainWrapper}>
            <Text style={styles.Heading}>Redeem Points</Text>
            <View style={styles.pointsContainer}>
                <View style={styles.topPointsContainer}>
                    <MaterialIcons name={'money'} size={30} color={colors.secondaryColor} />
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1
                    }}>
                        <Text style={{
                            color: colors.black,
                            fontWeight: 'bold'
                        }}>Balance</Text>
                        <Text style={{
                            color: colors.black,
                            fontSize: responsiveFontSize(2.5),
                            fontWeight: 'bold',
                        }}>3000</Text>
                        <Text style={{
                            color: colors.primaryColor,
                            fontSize: responsiveFontSize(1),
                        }}>*Minimum 3000 points are required to be redeemed.</Text>
                    </View>
                </View>
                <View style={{ borderColor: colors.lightLightGrey, borderBottomWidth: 1 }}></View>
                <View style={styles.bottomPointsContainer}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                        <Text style={{
                            color: colors.lightGrey,
                            fontSize: responsiveFontSize(1.5)
                        }}>Total Earned</Text>
                        <Text style={{
                            color: colors.black,
                            fontSize: responsiveFontSize(1.5),
                            fontWeight: 'bold'
                        }}>10000</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                        <Text style={{
                            color: colors.lightGrey,
                            fontSize: responsiveFontSize(1.5)
                        }}>Total Redeemed</Text>
                        <Text style={{
                            color: colors.black,
                            fontSize: responsiveFontSize(1.5),
                            fontWeight: 'bold'
                        }}>5000</Text>
                    </View>
                </View>
            </View>

            <View style={styles.options}>
                <View style={styles.optionsRow}>
                    <OptionButton text="UPI Transfer" screenName="UPI Transfer" iconType={'upi-transfer'} />
                    <OptionButton iconName='bank-transfer' text="Bank Transfer" screenName="Bank Transfer" iconType={'MaterialCommunityIcons'} />
                    <OptionButton iconName='wallet-giftcard' text="E-Gift Cards" screenName="E-Gift Cards" iconType={'MaterialCommunityIcons'} />
                </View>
                <View style={{marginTop: 50, flexDirection: 'row', gap: 15}}>
                    <TouchableOpacity style={styles.smallOption} onPress={()=>navigation.navigate('Track Redemption')}>
                        <Text style={styles.smallOptiontext}>Track Your Rewards</Text>
                        <MaterialCommunityIcons name={'truck-check'} size={20} color={colors.secondaryColor} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.smallOption} onPress={()=>navigation.navigate('Reward History')}>
                        <Text style={styles.smallOptiontext}>Reward History</Text>
                        <MaterialCommunityIcons name={'history'} size={20} color={colors.secondaryColor} />
                    </TouchableOpacity>
                </View>
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
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        marginBottom: 10,
    },
    topPointsContainer: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bottomPointsContainer: {
        flexDirection: 'column',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    pointsContainer: {
        elevation: 10,
        backgroundColor: colors.white,
        padding: 15,
        borderRadius: 10,
        width: '100%',
        gap: 10,
        marginTop: 20
    },
    optionsRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        marginTop: 30,
    },
    option: {
        flexDirection: 'column'
    },
    smallOption: {
        flex: 1,
        height: responsiveHeight(5),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        elevation: 10,
        borderRadius: 10,
        flexDirection: 'row',
        gap: 10
    },
    smallOptiontext: {
        color: colors.primaryColor,
        fontSize: responsiveFontSize(1.5),
        fontWeight: 'bold'
    }
});

export default Redeem;
