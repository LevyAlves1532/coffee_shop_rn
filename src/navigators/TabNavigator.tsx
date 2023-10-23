// LIBs
import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";

// SCREENs
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import OrderHistoryScreen from "../screens/OrderHistoryScreen";
import CustomIcon from "../components/CustomIcon";

// THEME
import { COLORS } from "../theme/theme";

// ICONs
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ 
        tabBarHideOnKeyboard: true,
        headerShown: false, 
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView  
            intensity={15} 
            style={styles.BlurViewStyles} 
          />
        )
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather 
              name="home" 
              size={25} 
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} 
            />
          )
        }}
      ></Tab.Screen>
      <Tab.Screen 
        name="Cart" 
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather 
              name="shopping-cart" 
              size={25} 
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} 
            />
          )
        }}
      ></Tab.Screen>
      <Tab.Screen 
        name="Favorite" 
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather 
              name="heart" 
              size={25} 
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} 
            />
          )
        }}
      ></Tab.Screen>
      <Tab.Screen 
        name="History" 
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather 
              name="bell" 
              size={25} 
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} 
            />
          )
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: "absolute",
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: "transparent",
  },
  BlurViewStyles: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default TabNavigator;
