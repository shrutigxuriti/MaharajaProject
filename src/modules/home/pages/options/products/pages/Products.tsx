import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import colors from '../../../../../../../colors';
import { NavigationProps } from '../../../../../../utils/interfaces';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const Products = ({ navigation }: NavigationProps) => {
    return (
        <View style={styles.mainWrapper}>
            <Text style={{color: colors.black, fontSize: responsiveFontSize(3), fontWeight: 'bold', textAlign: 'center'}}>Products</Text>
            <TouchableOpacity style={styles.productRow}>
                <View style={styles.image}></View>
                <View>
                    <Text style={styles.productHeading}>Product Example</Text>
                    <Text style={styles.productDetail}>Small features of the paint will be written here</Text>
                    <Text style={styles.price}>$100</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productRow}>
                <View style={styles.image}></View>
                <View>
                    <Text style={styles.productHeading}>Product Example</Text>
                    <Text style={styles.productDetail}>Small features of the paint will be written here</Text>
                    <Text style={styles.price}>$100</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productRow}>
                <View style={styles.image}></View>
                <View>
                    <Text style={styles.productHeading}>Product Example</Text>
                    <Text style={styles.productDetail}>Small features of the paint will be written here</Text>
                    <Text style={styles.price}>$100</Text>
                </View>
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
    productDetail: {
        color: colors.black,
        width: '75%'
    },
    productHeading: {
        color: colors.black,
        fontSize: responsiveFontSize(2.2),
        fontWeight: 'bold'
    },
    price: {
        color: colors.black,
        fontSize: responsiveFontSize(2.2),
        fontWeight: 'bold',
        marginTop: 20
    },
    image: {
        backgroundColor: colors.lightLightGrey,
        width: responsiveWidth(22),
        height: responsiveHeight(12),
        borderRadius: 10
    },
    productRow: {
        flexDirection: 'row',
        gap: 10,
        padding: 10,
        backgroundColor: colors.white,
        elevation: 5,
        borderRadius: 10,
        marginTop: 20
    }
});

export default Products;
