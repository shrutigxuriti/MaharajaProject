import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import colors from '../../../../../../../colors';
import { NavigationProps } from '../../../../../../utils/interfaces';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import ReusableCarousel from '../../../../../../components/ReusableCarousel';

const Scheme = ({ navigation }: NavigationProps) => {

    const data = [
        {
            title: 'Offer 1',
            desc: 'Details about the offer will be described here.',
        },
        {
            title: 'Offer 2',
            desc: 'Details about the offer will be described here.',
        },
    ];

    const carouselData = [
        { imageUrl: require('../../../../../../assets/carousel1.jpg') },
        { imageUrl: require('../../../../../../assets/carousel2.jpg') },
        { imageUrl: require('../../../../../../assets/carousel3.jpg') },
    ];

    return (
        <View style={styles.mainWrapper}>
            {/* <Text style={styles.heading}>Schemes & Offers</Text>
            {data.map((item, index) => (
                <View key={index} style={styles.offerContainer}>
                    <ImageBackground source={require('../../../../../../assets/bonusBackground.png')} resizeMode='contain' style={styles.imageBackground}>
                        <View style={styles.overlay}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.desc}>{item.desc}</Text>
                        </View>
                    </ImageBackground>
                </View>
            ))} */}
            <ReusableCarousel data={carouselData} carouselHeight={400} />

        </View>
    );
};

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.primaryColor,
        alignItems: 'center',
    },
    heading: {
        color: colors.black,
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        marginBottom: 10,
    },
    offerContainer: {
        width: '100%',
        height: 180,
    },
    imageBackground: {
        flex: 1,
    },
    overlay: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '48%',
        height: '100%',
        right: 10,
        padding: 10,
    },
    title: {
        color: colors.black,
        fontSize: responsiveFontSize(1.8),
        fontWeight: 'bold',
        marginBottom: 5,
    },
    desc: {
        color: colors.black,
        fontSize: responsiveFontSize(1.5),
        textAlign: 'center',
    },
});

export default Scheme;
