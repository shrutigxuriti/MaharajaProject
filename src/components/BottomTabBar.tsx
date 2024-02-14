import React, { useEffect, useState } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';
import BottomTabLogo from './BottomTabLogo';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../colors';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const BottomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
    const { routes = [], index: activeIndex } = state;
    const getTabIcon = (routeName: string) => {
        switch (routeName) {
            case 'Home':
                return 'home-outline';
            case 'Scan':
                return null;
            case 'Logout':
                return 'log-out-outline';
            default:
                return 'circle';
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const icon = getTabIcon(route.name);

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1 }}
                            key={route.key}
                        >
                            <View style={{ alignItems: 'center' }}>
                                    {route.name === 'Scan' && (
                                        <BottomTabLogo />
                                    )}
                                    {route.name !== 'Scan' && (
                                        <Icon name={icon} size={24} color={isFocused ? colors.secondaryColor : colors.white} />
                                    )}
                                </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: colors.primaryColor,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        alignItems: 'center'
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: 'white',
        elevation: 15
    }
});

export default BottomTabBar;
