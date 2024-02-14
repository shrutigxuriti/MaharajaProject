import { View, StyleSheet, Text, Image } from 'react-native';
import colors from '../../../colors';
import { NavigationProps } from '../../utils/interfaces';


const Notification = ({ navigation }: NavigationProps) => {
    return (
        <View style={styles.mainWrapper}>
            <Text>Notifications</Text>
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
});

export default Notification;
