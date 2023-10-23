// LIBs
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// COMPONENTs
import GradientBGIcon from "./GradientBGIcon";
import ProfilePic from "./ProfilePic";

// THEME
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";

interface IHeaderBarProps {
  title?: string;
}

const HeaderBar: React.FC<IHeaderBarProps> = ({ title }) => {
  return (
    <View style={styles.HeaderContainer}>
      <GradientBGIcon 
        name="menu" 
        color={COLORS.primaryLightGreyHex} 
        size={FONTSIZE.size_16} 
      />
      <Text style={styles.HeaderText}>{title}</Text>
      <ProfilePic />
    </View>
  )
};

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_28,
    color: COLORS.primaryWhiteHex,
  }
});

export default HeaderBar;
