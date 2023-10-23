// LIBs
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// COMPONENTs
import OrderItemCard from "./OrderItemCard";

// THEMEs
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";

interface IOrderHistoryCardProps {
  OrderDate: string;
  CartListPrice: string;
  CartList: any;
  navigationHandler: any;
}

const OrderHistoryCard: React.FC<IOrderHistoryCardProps> = ({
  OrderDate,
  CartListPrice,
  CartList,
  navigationHandler,
}) => {
  return (
    <View style={styles.CardContainer}>
      <View style={styles.CardHeader}>
        <View>
          <Text style={styles.HeaderTitle}>Order Time</Text>
          <Text style={styles.HeaderSubTitle}>{OrderDate}</Text>
        </View>
        <View style={styles.PriceContainer}>
          <Text style={styles.HeaderTitle}>Total Amount</Text>
          <Text style={styles.HeaderPrice}>$ {CartListPrice}</Text>
        </View>
      </View>
      <View style={styles.ListContainer}>
        {
          CartList.map((data: any, index: any) => (
            <TouchableOpacity 
              onPress={() => {
                navigationHandler({ 
                  index: index, 
                  id: data.id, 
                  type: data.type 
                });
              }}
              key={index.toString() + data.id}
            >
              <OrderItemCard 
                type={data.type}
                name={data.name}
                imagelink_square={data.imagelink_square}
                special_ingredient={data.special_ingredient}
                prices={data.prices}
                ItemPrice={data.ItemPrice}
              />
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  CardContainer: {
    gap: SPACING.space_10,
  },
  CardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: SPACING.space_20,
    alignItems: "center",
  },
  HeaderTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  HeaderSubTitle: {
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  PriceContainer: {
    alignItems: "flex-end",
  },
  HeaderPrice: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
  ListContainer: {
    gap: SPACING.space_20,
  },
});

export default OrderHistoryCard;
