import { View, StyleSheet, Text, Image, Touchable, TouchableOpacity } from 'react-native';
import colors from '../../../../../../colors';
import { NavigationProps } from '../../../../../utils/interfaces';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Contact = ({ navigation }: NavigationProps) => {
    return (
        <View style={styles.mainWrapper}>
            <Text style={styles.heading}>Contact Us</Text>
            <Image source={require('../../../../../assets/hello.png')} style={{width: '100%', marginVertical: 20}} resizeMode='contain'/>
            <TouchableOpacity style={styles.row}>
                <MaterialIcons name={'call'} size={20} color={colors.secondaryColor} />
                <Text style={styles.text}>+91 9898989898</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
                <FontAwesome name={'whatsapp'} size={20} color={colors.secondaryColor} />
                <Text style={styles.text}>+91 9898989898</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
                <MaterialIcons name={'email'} size={20} color={colors.secondaryColor} />
                <Text style={styles.text}>tester@gmail.com</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'column', alignItems: 'center', marginTop: 20}}>
                <MaterialIcons name={'location-on'} size={20} color={colors.secondaryColor} />
                <Text style={[styles.text, {marginTop: 10}]}>3rd Floor, 68 4th cross, Bannerghatta Main Rd, opp. adigas, Panduranga Nagar, Bengaluru, Karnataka 560076</Text>
            </View>
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
    heading: {
        fontSize: responsiveFontSize(3),
        color: colors.black,
        fontWeight: 'bold',
        marginBottom: 20
    },
    text: {
        color: colors.black,
        fontSize: responsiveFontSize(1.7),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        marginBottom: 10
    }
});

export default Contact;
