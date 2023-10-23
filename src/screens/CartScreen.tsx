// LIBs
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";

// COMPONENTs
import HeaderBar from "../components/HeaderBar";
import CartItem from "../components/CartItem";
import EmptyListAnimation from "../components/EmptyListAnimation";

// STORE
import { useStore } from "../store/store";

// THEMEs
import { COLORS, SPACING } from "../theme/theme";
import PaymentFooter from "../components/PaymentFooter";

const CartScreen = ({ navigation, route }: any) => {
  const tabBarHeight = useBottomTabBarHeight();

  const CartList = useStore((state: any) => state.CartList);
  const CartPrice = useStore((state: any) => state.CartPrice);
  const incrementCartItemQuantity = useStore(
    (state: any) => state.incrementCartItemQuantity
  );
  const decrementCartItemQuantity = useStore(
    (state: any) => state.decrementCartItemQuantity
  );
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const buttonPressHandler = () => {
    navigation.push("Payment", {
      amount: CartPrice,
    });
  }

  const incrementCartItemQuantityHandler = (id: string, size: string) => {
    incrementCartItemQuantity(id, size);
    calculateCartPrice();
  }

  const decrementCartItemQuantityHandler = (id: string, size: string) => {
    decrementCartItemQuantity(id, size);
    calculateCartPrice();
  }

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar 
        hidden 
        backgroundColor={COLORS.primaryBlackHex} 
        style="light" 
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View 
          style={[
            styles.ScrollViewInnerView, 
            { 
              marginBottom: tabBarHeight 
            }
          ]}
        >
          <View style={styles.ItemContainer}>
            <HeaderBar title="Cart" />
            { CartList.length === 0 ? (
                <EmptyListAnimation 
                  title="Cart is Empty"
                />
              ) : (
                <View style={styles.ListItemContainer}>
                  {
                    CartList.map((data: any) => (
                      <TouchableOpacity 
                        onPress={() => {
                          navigation.push("Details", {
                            index: data.index,
                            id: data.id,
                            type: data.type,
                          });
                        }} 
                        key={data.id}
                      >
                        <CartItem 
                          id={data.id}
                          name={data.name}
                          imagelink_square={data.imagelink_square}
                          special_ingredient={data.special_ingredient}
                          roasted={data.roasted}
                          prices={data.prices}
                          type={data.type}
                          incrementCartItemQuantityHandler={incrementCartItemQuantityHandler}
                          decrementCartItemQuantityHandler={decrementCartItemQuantityHandler}
                        />
                      </TouchableOpacity>
                    ))
                  }
                </View>
              )
            }
          </View>

          { CartList.length !== 0 ? (
              <PaymentFooter 
                buttonPressHandler={buttonPressHandler}
                buttonTitle="Pay" 
                price={{ price: CartPrice, currency: "$" }} 
              />
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
    gap: SPACING.space_20,
  },
});

export default CartScreen;
