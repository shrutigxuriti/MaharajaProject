import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
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

const HomePage = ({ navigation }: NavigationProps) => {
    return (
        <View style={styles.mainWrapper}>
            <View style={styles.cardContainer}>
                <Text style={{ color: colors.white, fontWeight: 'bold' }}>Loyalty Points</Text>
                <Text style={styles.points}>2000 Points</Text>
                <View>
                    <ProgressBar progress={0.8} color={colors.secondaryColor} />
                    <Text style={{ color: colors.white, fontSize: responsiveFontSize(1.5), marginTop: 5 }}>Collect 3000 points to redeem</Text>
                </View>
            </View>
            <View style={styles.optionsContainer}>
                <View style={styles.optionsRow}>
                    <TouchableOpacity style={styles.option}>
                        <Ionicons name={'gift-outline'} size={30} color={colors.secondaryColor} />
                        <Text style={styles.optionText}>Redeem</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Octicons name={'graph'} size={24} color={colors.secondaryColor} />
                        <Text style={styles.optionText}>Performance</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <AntDesign name={'message1'} size={30} color={colors.secondaryColor} />
                        <Text style={styles.optionText}>Contact</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.optionsRow}>
                    <TouchableOpacity style={styles.option}>
                        <MaterialIcons name={'local-offer'} size={30} color={colors.secondaryColor} />
                        <Text style={styles.optionText}>Schemes & Offers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Ionicons name={'bulb-outline'} size={30} color={colors.secondaryColor} />
                        <Text style={styles.optionText}>What's New</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Ionicons name={'book-outline'} size={30} color={colors.secondaryColor} />
                        <Text style={styles.optionText}>Products</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.referContainer}>
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
    optionText: {
        color: colors.black,
        fontSize: responsiveFontSize(1.5),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    optionsRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        marginTop: 30,
    },
    option: {
        padding: 10,
        height: 100,
        elevation: 10,
        backgroundColor: colors.white,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 10,
        flex: 1
    }
});

export default HomePage;
