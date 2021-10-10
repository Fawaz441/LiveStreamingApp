import React from "react";
import { TouchableWithoutFeedback,Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { centers, FONTS, GRADIENTS, SHADOWS } from "../constants";


export const BlueButton = ({ text, action }) => (
    <TouchableWithoutFeedback onPress={action}>
        <LinearGradient colors={GRADIENTS.blue} style={{ ...centers, width: 315, height: 60, borderRadius: 99, ...SHADOWS.blue }}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <Text style={{ color: '#fff', ...FONTS.poppinsBold, fontSize: 18 }}>
                {text}
            </Text>
        </LinearGradient>
    </TouchableWithoutFeedback>
)