import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scan from '../pages/Scan';


const ScanStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
                name="Scan QR Code"
                component={Scan}
                options={() => ({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
};

export default ScanStack;
