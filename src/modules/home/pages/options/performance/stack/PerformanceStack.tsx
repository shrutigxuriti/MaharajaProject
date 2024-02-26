import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Performance from '../pages/Performance';

const PerformanceStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
                name="Performance"
                component={Performance}
                options={() => ({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
};

export default PerformanceStack;
