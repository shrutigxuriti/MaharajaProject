import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import colors from '../../../../colors';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { NavigationProps } from '../../../utils/interfaces';
import { ProgressBar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OptionButton from '../../../components/OptionsButton';

const HomePage = ({ navigation }: NavigationProps) => {
    return (
        <View style={styles.mainWrapper}>
            <View style={styles.detailsContainer}>
                <Image style={{height: 50, width: 50}} source={require('../../../assets/usericon.png')} />
                <View style={{flexDirection: 'column', marginLeft: 10, gap: 2}}>
                    <Text style={{color: colors.black, fontSize: responsiveFontSize(1.7), fontWeight: 'bold'}}>TEST USER</Text>
                    <Text style={{color: colors.black, fontSize: responsiveFontSize(1.5)}}>USER ID 222</Text>
                    <Text style={{color: colors.black, fontSize: responsiveFontSize(1.5)}}>9898989898</Text>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <Text style={{ color: colors.white, fontWeight: 'bold', fontSize: responsiveFontSize(1.7) }}>Loyalty Points</Text>
                <Text style={styles.points}>2000 Points</Text>
                <View>
                    <ProgressBar progress={0.8} color={colors.secondaryColor} />
                    <Text style={{ color: colors.white, fontSize: responsiveFontSize(1.5), marginTop: 5 }}>Collect 3000 points to redeem</Text>
                    <Text style={{ color: colors.secondaryColor, fontSize: responsiveFontSize(1.2) }}>Total Points Earned = 5000</Text>
                </View>
            </View>
            <View style={styles.optionsContainer}>
                <View style={styles.optionsRow}>
                    <OptionButton iconName="gift-outline" text="Redeem" screenName="Redeem" iconType={'Ionicons'} />
                    <OptionButton iconName="graph" text="Performance" screenName="Performance" iconType={'Octicons'} />
                    <OptionButton iconName="message1" text="Contact" screenName="Contact Us" iconType={'AntDesign'} />
                </View>
                <View style={styles.optionsRow}>
                <OptionButton iconName="local-offer" text="Schemes & Offers" screenName="Scheme" iconType={'MaterialIcons'} />
                <OptionButton iconName="bulb-outline" text="What's New" screenName="What's New" iconType={'Ionicons'} />

                <OptionButton iconName="book-outline" text="Products" screenName="Products" iconType={'Ionicons'} />

                </View>
            </View>
            <TouchableOpacity style={styles.referContainer} onPress={()=>navigation.navigate('Refer & Earn')}>
                <Text style={{ color: colors.black, fontWeight: 'bold', fontSize: responsiveFontSize(2), flex: 1 }}>Refer and Earn</Text>
                <Ionicons name={'arrow-forward'} size={24} color={colors.black} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        padding: 25,
        backgroundColor: colors.white,
    },
    cardContainer: {
        backgroundColor: colors.primaryColor,
        borderRadius: 10,
        width: '100%',
        height: '30%',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        elevation: 10
    },
    points: {
        color: colors.secondaryColor,
        fontSize: responsiveFontSize(4),
        fontWeight: 'bold',
    },
    referContainer: {
        backgroundColor: colors.secondaryColor,
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        elevation: 10
    },
    optionsRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        marginTop: 30,
    },
    detailsContainer: {
        flexDirection: 'row',
        marginBottom: 20
    }
});

export default HomePage;
