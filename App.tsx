// LIBs
import React, { useCallback } from "react";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// NAVIGATORs
import TabNavigator from "./src/navigators/TabNavigator";

// SCREENs
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreens from "./src/screens/DetailsScreen";
import PaymentScreen from "./src/screens/PaymentScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  const [ fontsLoaded, fontError ] = useFonts({
    "app_icons": require("./src/assets/fonts/app_icons.ttf"),
    "Poppins-Black": require("./src/assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./src/assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("./src/assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./src/assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("./src/assets/fonts/Poppins-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="TabNavigator" 
          component={TabNavigator} 
          options={{ animation: "slide_from_bottom" }}
        ></Stack.Screen>
        <Stack.Screen 
          name="Details" 
          component={DetailsScreens} 
          options={{ animation: "slide_from_bottom" }}
        ></Stack.Screen>
        <Stack.Screen 
          name="Payment" 
          component={PaymentScreen} 
          options={{ animation: "slide_from_bottom" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
