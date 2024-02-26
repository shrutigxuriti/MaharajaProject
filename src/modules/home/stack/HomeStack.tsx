import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../pages/HomePage';
import CustomTabHeader from '../../../components/CustomTabHeader';
import colors from '../../../../colors';
import Wishlist from '../../wishlist/pages/Wishlist';
import WishlistStack from '../../wishlist/stack/WishlistStack';
import Notification from '../../notification/Notification';
import SchemeStack from '../pages/options/schemes/stack/SchemeStack';
import RedeemStack from '../pages/options/redemption/stack/RedeemStack';
import PerformanceStack from '../pages/options/performance/stack/PerformanceStack';
import WhatNew from '../pages/options/new/WhatNew';
import Contact from '../pages/options/contact/Contact';
import ProductsStack from '../pages/options/products/stack/ProductsStack';
import Refer from '../pages/options/Refer/Refer';

const HomeStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: colors.primaryColor,
            },
            header: (props) => <CustomTabHeader {...props} />,
            headerShown: false
        }}>
            <Stack.Screen
                name="Home"
                component={HomePage}
                options={() => ({
                    headerShown: true,
                })}
            />
            <Stack.Screen
                name="Wishlist"
                component={WishlistStack}
                options={() => ({
                    headerShown: true,
                })}
            />
            <Stack.Screen
                name="Notifications"
                component={Notification}
                options={() => ({
                    headerShown: true,
                })}
            />
            <Stack.Screen
                name="Scheme"
                component={SchemeStack}
                options={() => ({
                    headerShown: true,
                })}
            />
            <Stack.Screen
                name="Redeem"
                component={RedeemStack}
                options={() => ({
                    headerShown: true,
                })}
            />
            <Stack.Screen
                name="Performance"
                component={PerformanceStack}
                options={() => ({
                    headerShown: true,
                })}
            />
            <Stack.Screen
                name="What's New"
                component={WhatNew}
                options={() => ({
                    headerShown: true,
                })}
            />
            <Stack.Screen
                name="Contact Us"
                component={Contact}
                options={() => ({
                    headerShown: true,
                })}
            />
            <Stack.Screen
                name="Products"
                component={ProductsStack}
                options={() => ({
                    headerShown: true,
                })}
            />
            <Stack.Screen
                name="Refer & Earn"
                component={Refer}
                options={() => ({
                    headerShown: true,
                })}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;
