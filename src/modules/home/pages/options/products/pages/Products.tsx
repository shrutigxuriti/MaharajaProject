import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import colors from '../../../../../../../colors';
import { NavigationProps } from '../../../../../../utils/interfaces';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Products = ({ navigation }: NavigationProps) => {
    return (
        <ScrollView style={styles.mainWrapper}>
            <Image style={styles.imageProduct} resizeMode='contain' source={require('../../../../../../assets/carousel1.jpg')} />
            <Image style={styles.imageProduct} resizeMode='contain' source={require('../../../../../../assets/carousel2.jpg')} />
            <Image style={styles.imageProduct} resizeMode='contain' source={require('../../../../../../assets/carousel3.jpg')} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    mainWrapper: {
        backgroundColor: colors.primaryColor,
    },
    imageProduct: {
        width: responsiveWidth(100),
        height: responsiveHeight(45)
    }
});

export default Products;
