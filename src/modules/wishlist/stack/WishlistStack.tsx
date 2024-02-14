import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomTabHeader from '../../../components/CustomTabHeader';
import Wishlist from '../pages/Wishlist';

const WishlistStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
                name="Wishlist"
                component={Wishlist}
                options={() => ({  
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
};

export default WishlistStack;
