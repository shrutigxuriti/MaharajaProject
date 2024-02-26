import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import colors from '../../../../../../colors';;
import { NavigationProps } from '../../../../../utils/interfaces';
import { responsiveFontSize } from 'react-native-responsive-dimensions';


const WhatNew = ({ navigation }: NavigationProps) => {
    const data = [
        {
            heading: 'Heading 1',
            detail: 'Deatils'
        },
        {
            heading: 'Heading 2',
            detail: 'Deatils'
        },
        {
            heading: 'Heading 3',
            detail: 'Deatils'
        },
    ]

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.heading}>{item.heading}</Text>
            <Text style={styles.detail}>{item.detail}</Text>
        </View>
    );
    return (
        <View style={styles.mainWrapper}>
            <Text style={{color: colors.black, fontSize: responsiveFontSize(3), fontWeight: 'bold', marginBottom: 20}}>
                What's New?
            </Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        padding: 25,
        backgroundColor: colors.white,
    },
    detail: {
        color: colors.black,
        fontSize: responsiveFontSize(1.7)
    },
    heading: {
        color: colors.black,
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold'
    },
    item: {
        width: '100%',
        borderBottomColor: colors.secondaryColor,
        borderBottomWidth: 1,
        paddingVertical: 10
    }
});

export default WhatNew;
