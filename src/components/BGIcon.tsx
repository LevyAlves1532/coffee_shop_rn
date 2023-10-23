// LIBs
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// THEMEs
import { BORDERRADIUS, SPACING } from "../theme/theme";

// ICONs
import { Feather } from "@expo/vector-icons";

interface IBGIconProps {
  name: any;
  color: string;
  size: number;
  BGColor: string;
}

const BGIcon: React.FC<IBGIconProps> = ({ name, color, size, BGColor }) => {
  return (
    <View style={[styles.IconBG, { backgroundColor: BGColor }]}>
      <Feather name={name} color={color} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  IconBG: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: BORDERRADIUS.radius_8,
  },
});

export default BGIcon;
