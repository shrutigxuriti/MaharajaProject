import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../colors';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const GiftCard = ({ image, desc, price }: { image?: string, desc: string, price: string }) => {
    const [selected, setSelected] = useState(false);

    const handlePress = () => {
        setSelected(!selected);
        // Additional logic if needed
    };
    return (
        <TouchableOpacity style={styles.card} onPress={handlePress}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />
                <Text style={styles.description}>{desc}</Text>
            </View>
            <View style={selected ? styles.pointsContainerSelected : styles.pointsContainer}>
                <Text style={styles.points}>{price} Points</Text>
                <Ionicons name={'checkmark-circle'} size={15} color={colors.white} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        height: responsiveWidth(35),
        width: responsiveWidth(35),
        elevation: 10,
        backgroundColor: colors.white,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderBottomRightRadius: 15,
        gap: 10
    },
    optionText: {
        color: colors.black,
        fontSize: responsiveFontSize(1.5),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    points: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(1.5)
    },
    description: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(1.5)
    },
    pointsContainer: {
        backgroundColor: colors.lightGrey,
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        borderBottomRightRadius: 15,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    pointsContainerSelected: {
        backgroundColor: colors.secondaryColor,
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        borderBottomRightRadius: 15,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageContainer: {
        flex: 1,
        padding: 10,
        width: '100%',
        alignItems: 'center'
    },
    image: {
        backgroundColor: colors.lightLightGrey,
        height: '100%',
        width: '100%',
        borderRadius: 10
    }
});

export default GiftCard;
