import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import colors from '../../../../../../../colors';
import { NavigationProps } from '../../utils/interfaces';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OptionButton from '../../../../../../components/OptionsButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Redeem = ({ navigation }: NavigationProps) => {
    return (
        <View style={styles.mainWrapper}>
            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 50}}>
                <View style={styles.pointsContainer}>
                    <Text style={styles.pointsHeading}>
                        Current Point Balance
                    </Text>
                    <Text style={styles.point}>
                        5,686
                    </Text>
                </View>
                <View style={styles.pointsContainer}>
                    <Text style={styles.pointsHeading}>
                        Redeemable Point Balance
                    </Text>
                    <Text style={styles.point}>
                        1,084
                    </Text>
                </View>
            </View>
            
            <Image style={{width: '100%', height: '30%', marginBottom: 50}} resizeMode='contain' source={require('../../../../../../assets/redeem.png')} />

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
        backgroundColor: colors.primaryColor,
        alignItems: 'center',
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
    },
    pointsContainer: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.white,
        padding: 10,
        width: responsiveWidth(35),
        alignItems: 'center'
    },
    pointsHeading: {
        fontSize: responsiveFontSize(1.7),
        color: colors.white,
        textAlign: 'center'
    },
    point: {
        fontSize: responsiveFontSize(3.3),
        color: colors.secondaryColor,
        fontWeight: 'bold'
    }
});

export default Redeem;
