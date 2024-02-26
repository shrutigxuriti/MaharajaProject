import { View, StyleSheet, Text, Image } from 'react-native';
import colors from '../../../../colors';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { NavigationProps } from '../../../utils/interfaces';


const Wishlist = ({ navigation }: NavigationProps) => {
    return (
        <View style={styles.mainWrapper}>
            <Text style={styles.Heading}>Wishlist</Text>
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
        fontWeight: 'bold',
        fontSize: responsiveFontSize(3)
    }
});

export default Wishlist;
