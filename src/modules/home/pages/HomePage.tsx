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
import ReusableCarousel from '../../../components/ReusableCarousel';

const HomePage = ({ navigation }: NavigationProps) => {
    const carouselData = [
        { imageUrl: require('../../../assets/carousel1.jpg') },
        { imageUrl: require('../../../assets/carousel2.jpg') },
        { imageUrl: require('../../../assets/carousel3.jpg') },
    ];
    return (
        <View style={styles.mainWrapper}>
            <View style={styles.detailsContainer}>
                <Image style={{ height: 30, width: 30 }} source={require('../../../assets/usericon.png')} />
                <View style={{ flexDirection: 'column', marginLeft: 10, gap: 2 }}>
                    <Text style={{ color: colors.secondaryColor, fontSize: responsiveFontSize(1.7), fontWeight: 'bold' }}>TEST USER</Text>
                    <Text style={{ color: colors.secondaryColor, fontSize: responsiveFontSize(1.3) }}>USER ID 222</Text>
                </View>
            </View>
            <View style={styles.subWrapper}>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.pointHeading}>Total Earned Points</Text>
                        <Text style={styles.points}>6,770</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.pointHeading}>Redeemable Point Balance</Text>
                        <Text style={styles.points}>1,084</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.pointHeading}>Current Point Balance</Text>
                        <Text style={styles.points}>5,686</Text>
                    </View>
                </View>
            </View>
            <View style={{ height: 25 }}></View>
            <ReusableCarousel data={carouselData} carouselHeight={120} />
            <View style={styles.optionsContainer}>
                <View style={styles.optionsColumn}>
                    <TouchableOpacity
                        style={[styles.option, { flex: 1 }]}
                        onPress={() => navigation.navigate('Performance')}
                    >
                        <Octicons name={'graph'} size={30} color={colors.secondaryColor} />
                        <Text style={styles.optionText}>Performance</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.option, { flex: 1 }]}
                        onPress={() => navigation.navigate('Scheme')}
                    >
                        <MaterialIcons name={'local-offer'} size={30} color={colors.secondaryColor} />
                        <Text style={styles.optionText}>Schemes / Offers</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.optionsColumn}>
                    <TouchableOpacity
                        style={[styles.option, { flex: 2 }]}
                        onPress={() => navigation.navigate('Scan QR Code')}
                    >
                        <MaterialIcons name={'qr-code-2'} size={30} color={colors.secondaryColor} />
                        <Text style={styles.optionText}>Scan Code</Text>
                    </TouchableOpacity>


                </View>
                <View style={styles.optionsColumn}>
                    <TouchableOpacity
                        style={[styles.option, { flex: 2 }]}
                        onPress={() => navigation.navigate('Redeem')}
                    >
                        <Ionicons name={'gift-outline'} size={30} color={colors.secondaryColor} />
                        <Text style={styles.optionText}>Redeem Points</Text>
                    </TouchableOpacity>

                </View>

            </View>
            <View style={styles.optionsRow}>
                <TouchableOpacity
                    style={[styles.option, { flex: 1 }]}
                    onPress={() => navigation.navigate('Contact Us')}
                >
                    <AntDesign name={'message1'} size={30} color={colors.secondaryColor} />
                    <Text style={styles.optionText}>Contact</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.option, { flex: 1 }]}
                    onPress={() => navigation.navigate("Products")}
                >
                    <Ionicons name={'book-outline'} size={30} color={colors.secondaryColor} />
                    <Text style={styles.optionText}>Products</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.option, { flex: 1}]}
                    onPress={() => navigation.navigate("What's New")}
                >
                    <Ionicons name={'bulb-outline'} size={30} color={colors.secondaryColor} />
                    <Text style={styles.optionText}>What's New</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        paddingBottom: 25,
        backgroundColor: colors.primaryColor,
    },
    cardContainer: {
        flexDirection: 'row',
        gap: 1,
        paddingTop: 1
    },
    card: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignItems: 'center',
        flex: 1,
        backgroundColor: colors.white
    },
    points: {
        color: colors.primaryColor,
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
    },
    pointHeading: {
        color: colors.primaryColor,
        fontSize: responsiveFontSize(1.5),
        textAlign: 'center'
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
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 15,
        backgroundColor: colors.white
    },
    optionsContainer: {
        paddingHorizontal: 25,
        flexDirection: 'row',
        flex: 1,
        gap: 10
    },
    optionsColumn: {
        flexDirection: 'column',
        flex: 1,
        gap: 10
    },
    option: {
        backgroundColor: colors.white,
        borderRadius: 10,
        elevation: 10,
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
        // height: 300,
        // marginBottom: 15,
        // flex: 1,
    },
    optionText: {
        color: colors.primaryColor,
        fontSize: responsiveFontSize(1.5),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    optionsRow: {
        flexDirection: 'row',
        gap: 10,
        flex: 1,
        paddingHorizontal: 25,
        marginTop: 10
    }
});

export default HomePage;
