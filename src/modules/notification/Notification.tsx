import { View, StyleSheet, Text, Image } from 'react-native';
import colors from '../../../colors';
import { NavigationProps } from '../../utils/interfaces';
import { responsiveFontSize } from 'react-native-responsive-dimensions';


const Notification = ({ navigation }: NavigationProps) => {
    return (
        <View style={styles.mainWrapper}>
            <Text style={styles.Heading}>Notifications</Text>
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

export default Notification;
