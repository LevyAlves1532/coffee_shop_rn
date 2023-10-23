// LIBs
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// COMPONENTs
import HeaderBar from "../components/HeaderBar";
import EmptyListAnimation from "../components/EmptyListAnimation";
import PopUpAnimation from "../components/PopUpAnimation";
import OrderHistoryCard from "../components/OrderHistoryCard";

// STORE
import { useStore } from "../store/store";

// THEMEs
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";

const OrderHistoryScreen = ({ navigation }: any) => {
  const tabBarHeight = useBottomTabBarHeight();

  const OrderHistoryList = useStore((state: any) => state.OrderHistoryList);
  const [ showAnimation, setShowAnimation ] = useState(false);

  const navigationHandler = ({ index, id, type }: any) => {
    navigation.push("Details", {
      index,
      id,
      type,
    });
  }

  const buttonPressHandler = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 2000)
  }

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar 
        hidden 
        backgroundColor={COLORS.primaryBlackHex} 
        style="light" 
      />
      { showAnimation ? (
          <PopUpAnimation 
            style={styles.LottieAnimation} 
            source={require("../lottie/successful.json")} 
          />
        ) : (
          <></>
        )
      }
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View 
          style={[
            styles.ScrollViewInnerView,
            {
              marginBottom: tabBarHeight,
            }
          ]}
        >
          <View style={styles.ItemContainer}>
            <HeaderBar title="Order History" />

            { OrderHistoryList.length === 0 ? (
                <EmptyListAnimation 
                  title="No Order History"
                />
              ) : (
                <View style={styles.ListItemContainer}>
                  {
                    OrderHistoryList.map((data: any, index: any) => (
                      <OrderHistoryCard 
                        OrderDate={data.OrderDate}
                        CartListPrice={data.CartListPrice}
                        CartList={data.CartList}
                        navigationHandler={navigationHandler}
                        key={index.toString()} 
                      />
                    ))
                  }
                </View>
              )
            }
          </View>
          { OrderHistoryList.length > 0 ? (
              <TouchableOpacity 
                style={styles.DownloadButton}
                onPress={() => {
                  buttonPressHandler();
                }}
              >
                <Text style={styles.ButtonText}>Download</Text>
              </TouchableOpacity>
            ) : (
              <></>
            )
          }
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  LottieAnimation: {
    height: 250,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: "space-between",
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_30,
  },
  DownloadButton: {
    margin: SPACING.space_20,
    backgroundColor: COLORS.primaryOrangeHex,
    alignItems: "center",
    justifyContent: "center",
    height: SPACING.space_36 * 2,
    borderRadius: BORDERRADIUS.radius_20,
  },
  ButtonText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
});

export default OrderHistoryScreen;
