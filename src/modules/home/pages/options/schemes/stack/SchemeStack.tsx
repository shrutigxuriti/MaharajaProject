import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scheme from '../pages/Schemes';

const SchemeStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
                name="Scheme"
                component={Scheme}
                options={() => ({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
};

export default SchemeStack;
