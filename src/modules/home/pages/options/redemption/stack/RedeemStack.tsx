import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Redeem from '../pages/Redeem';
import UPITransfer from '../pages/UPITransfer';
import BankTransfer from '../pages/BankTransfer';
import EGiftCards from '../pages/EGiftCards';
import Trackredemption from '../pages/Trackredemption';
import RewardHistory from '../pages/RewardHistory';

const RedeemStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
                name="Redeem"
                component={Redeem}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Stack.Screen
                name="E-Gift Cards"
                component={EGiftCards}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Stack.Screen
                name="Bank Transfer"
                component={BankTransfer}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Stack.Screen
                name="UPI Transfer"
                component={UPITransfer}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Stack.Screen
                name="Track Redemption"
                component={Trackredemption}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Stack.Screen
                name="Reward History"
                component={RewardHistory}
                options={() => ({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
};

export default RedeemStack;
