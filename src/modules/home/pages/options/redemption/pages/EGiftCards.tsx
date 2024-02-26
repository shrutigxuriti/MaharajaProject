import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import colors from '../../../../../../../colors';
import { NavigationProps } from '../../../../../../utils/interfaces';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import GiftCard from '../../../../../../components/GiftCard';
import Buttons from '../../../../../../components/Buttons';

const EGiftCards = ({ navigation }: NavigationProps) => {
    const data = [
        {
            description: 'Product 1',
            price: '2700',
            image: "https://source.unsplash.com/random/?gift-card&5"
        },
        {
            description: 'Product 2',
            price: '4200',
            image: "https://source.unsplash.com/random/?gift-card&7"
        },
        {
            description: 'Product 3',
            price: '4200',
            image: "https://source.unsplash.com/random/?gift-card&3"
        },
        {
            description: 'Product 4',
            price: '4200',
            image: "https://source.unsplash.com/random/?gift-card&4"
        },
        // Add more data objects as needed
    ];

    const renderGiftCard = ({ item }) => (
        <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
            <GiftCard desc={item.description} price={item.price} image={item.image} />
        </View>
    );

    return (
        <View style={styles.mainWrapper}>
            <Text style={styles.heading}>E-Gift Cards</Text>
            <FlatList
                data={data}
                renderItem={renderGiftCard}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.giftCardContainer}
                numColumns={2}
            />
            <Buttons
                label={'Proceed'}
                onPress={() => console.log('Presed')}
                disabled={false}
                variant={'primary'}
                width='90%' />
        </View>
    );
};

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        padding: 15,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    heading: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(3),
        marginBottom: 20,
    },
    giftCardContainer: {
        alignItems: 'center',
        paddingBottom: 20,
        // flex: 1,
    },
});

export default EGiftCards;
