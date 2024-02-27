import { View, StyleSheet, Text, Image, Touchable, TouchableOpacity } from 'react-native';
import colors from '../../../../../../colors';
import { NavigationProps } from '../../../../../utils/interfaces';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Contact = ({ navigation }: NavigationProps) => {
    return (
        <View style={styles.mainWrapper}>
            <View style={styles.subWrapper}>
                <Text style={styles.heading}>Need Help?</Text>
                <Text style={styles.text}>Fixcera Maharaja</Text>
                <Text style={styles.text}>Contractor Loyalty Program</Text>
                <Text style={styles.text}>C/O Evolve Brands Pvt. Ltd.</Text>
                <Text style={styles.text}>Plot N. -249G</Text>
                <Text style={styles.text}>AIHP Tower Wing - A</Text>
                <Text style={styles.text}>Level-2, Udyog Vihar,</Text>
                <Text style={styles.text}>Phase 4, Gurugram - 122015</Text>
                <Text style={styles.text}>Haryana</Text>
                <View style={styles.contactContainer}>
                    <TouchableOpacity style={{ flexDirection: 'row', gap: 10 }}>
                        <View style={styles.iconContainer}>
                            <MaterialIcons name={'call'} size={15} color={colors.black} />
                        </View>
                        <Text style={styles.contactText}>0124-4830XXX</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', gap: 10 }}>
                        <View style={styles.iconContainer}>
                            <MaterialIcons name={'email'} size={15} color={colors.black} />
                        </View>
                        <Text style={styles.contactText}>maharaja@fixcera.com</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.socialsContainer}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <MaterialIcons name={'facebook'} size={15} color={colors.black} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconContainer}>
                        <MaterialCommunityIcons name={'instagram'} size={15} color={colors.black} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconContainer}>
                        <MaterialCommunityIcons name={'twitter'} size={15} color={colors.black} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconContainer}>
                        <MaterialCommunityIcons name={'whatsapp'} size={15} color={colors.black} />
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        backgroundColor: colors.primaryColor,
        alignItems: 'center',
    },
    subWrapper: {
        padding: 50,
        flex: 1
    },
    heading: {
        fontSize: responsiveFontSize(3),
        color: colors.white,
        fontWeight: 'bold',
        marginBottom: 20
    },
    text: {
        fontSize: responsiveFontSize(2),
        color: colors.white,
        fontWeight: 'bold',
        marginBottom: 2
    },
    iconContainer: {
        height: 25,
        width: 25,
        backgroundColor: colors.secondaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },
    contactContainer: {
        marginVertical: 20,
        gap: 20
    },
    contactText: {
        fontSize: responsiveFontSize(2.1),
        color: colors.white,
        fontWeight: 'bold'
    },
    socialsContainer: {
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default Contact;
