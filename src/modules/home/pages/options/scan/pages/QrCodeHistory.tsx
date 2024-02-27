import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import colors from '../../../../../../../colors';
import { NavigationProps } from '../../../../../../utils/interfaces';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const QrCodeHistory = ({ navigation }: NavigationProps) => {
    const data = [
        {
            date: "16-01-2022",
            desc: "258185782968289",
            status: "Success"
        },
        {
            date: "20-01-2022",
            desc: "258185782968289",
            status: "Success"
        },
        {
            date: "30-03-2022",
            desc: "258185782968289",
            status: "Failure"
        },
        {
            date: "30-03-2022",
            desc: "258185782968289",
            status: "Failure"
        },
    ];

    const renderListItem = ({ item }) => {
        const statusColor = item.status === 'Success' ? colors.black : colors.lightGrey;
        const statusBackgroundColor = item.status === 'Success' ? colors.secondaryColor : colors.lightLightGrey;
        return (
            <>
                <View style={styles.item}>
                    <Text style={[styles.date, { color: statusColor }]}>{item.date}</Text>
                    <Text style={[styles.desc, { color: statusColor }]}>{item.desc}</Text>
                    <Text style={[styles.status, { color: statusColor, backgroundColor: statusBackgroundColor }]}>{item.status}</Text>
                </View>
            </>

        );
    };


    return (
        <View style={styles.mainWrapper}>
            {/* <Text style={styles.heading}>Reward History</Text> */}
            <FlatList
                data={data}
                renderItem={renderListItem}
                keyExtractor={(item, index) => index.toString()}
                style={styles.flatList}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    flatList: {
        width: '100%',
        paddingTop: 25,
    },
    flatListContent: {
        flexGrow: 1,
        alignItems: 'center',
    },
    heading: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(3),
        marginBottom: 20,
        marginTop: 20,
    },
    item: {
        marginBottom: 10,
        paddingBottom: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        width: '100%',
        gap: 10,
        borderBottomWidth: 0.5,
        borderColor: colors.lightGrey,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    date: {
        fontSize: responsiveFontSize(1.5),
        fontWeight: 'bold',
        marginBottom: 5,
        // flex: 1
    },
    desc: {
        fontSize: responsiveFontSize(1.5),
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center'
    },
    status: {
        fontSize: responsiveFontSize(1.5),
        fontWeight: 'bold',
        backgroundColor: colors.lightLightGrey,
        padding: 5,
        width: responsiveWidth(15),
        alignItems: 'center',
        textAlign: 'center',
        borderBottomRightRadius: 5,
    },
});

export default QrCodeHistory;
