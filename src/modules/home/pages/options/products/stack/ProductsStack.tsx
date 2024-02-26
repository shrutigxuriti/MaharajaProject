import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from '../pages/Products';

const ProductsStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
                name="Products"
                component={Products}
                options={() => ({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
};

export default ProductsStack;
