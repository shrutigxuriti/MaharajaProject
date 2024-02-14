import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../pages/HomePage';
import CustomTabHeader from '../../../components/CustomTabHeader';
import colors from '../../../../colors';
import Wishlist from '../../wishlist/pages/Wishlist';
import WishlistStack from '../../wishlist/stack/WishlistStack';
import Notification from '../../notification/Notification';

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
        </Stack.Navigator>
    );
};

export default HomeStack;
