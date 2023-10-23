// LIBs
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

// THEMEs
import { COLORS, FONTFAMILY, FONTSIZE } from "../theme/theme";

interface IEmptyListAnimationProps {
  title: string;
}

const EmptyListAnimation: React.FC<IEmptyListAnimationProps> = ({ title }) => {
  return (
    <View style={styles.EmptyCartContainer}>
      <LottieView 
        style={styles.LottieStyle}
        source={require("../lottie/coffeecup.json")} 
        autoPlay
        loop
      />
      <Text style={styles.LottieText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  EmptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 150,
  },
  LottieStyle: {
    height: 300,
    alignSelf: "center",
  },
  LottieText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
    textAlign: "center",
  },
});

export default EmptyListAnimation;
