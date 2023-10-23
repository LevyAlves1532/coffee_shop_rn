// LIBs
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// THEMEs
import { COLORS, SPACING } from "../theme/theme";

// ICONs
import { Feather } from "@expo/vector-icons";

interface IGradientBGIconProps {
  name: any;
  color: string;
  size: number;
}

const GradientBGIcon: React.FC<IGradientBGIconProps> = ({ name, color, size }) => {
  return (
    <View style={styles.Container}>
      <LinearGradient 
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0 }}
        colors={[
          COLORS.primaryGreyHex, 
          COLORS.primaryBlackHex
        ]}
        style={styles.LinearGradientBG}
      >
        <Feather name={name} color={color} size={size} />
      </LinearGradient>
    </View>
  )
};

const styles = StyleSheet.create({
  Container: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondaryDarkGreyHex,
    overflow: "hidden",
  },
  LinearGradientBG: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GradientBGIcon;
