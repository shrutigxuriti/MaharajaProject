import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import colors from '../../colors';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { ButtonsProps } from '../utils/interfaces';

const Buttons = ({ label, onPress, disabled, variant, width }: ButtonsProps) => {
    const getButtonStyle = () => {
        if (variant === 'primary') {
            return [styles.primaryButton, { width }];
        }
    };
    return (
        <TouchableOpacity
            style={[styles.button, getButtonStyle()]}
            onPress={onPress}
            disabled={variant === 'disabled' || variant === 'reduceOpacity' || disabled}
        >
            <View style={[styles.buttonContent]}>
                <Text style={[styles.buttonText]}>
                    {label}
                </Text>

            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        textAlignVertical: 'top',
        fontSize: responsiveFontSize(1.8),
        color: colors.primaryColor,
        fontWeight: 'bold',
    },
    primaryButton: {
        backgroundColor: colors.secondaryColor,
        borderRadius: 5
    }
});

export default Buttons;
