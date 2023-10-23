// LIBs
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";

// COMPONENTs
import HeaderBar from "../components/HeaderBar";
import FavoritesItemCard from "../components/FavoritesItemCard";
import EmptyListAnimation from "../components/EmptyListAnimation";

// STORE
import { useStore } from "../store/store";

// THEMEs
import { COLORS, SPACING } from "../theme/theme";

const FavoritesScreen = ({ navigation }: any) => {
  const tabBarHeight = useBottomTabBarHeight();

  const FavoritesList = useStore((state: any) => state.FavoritesList);
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList
  );

  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
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
            <HeaderBar title="Favourites" />
            { FavoritesList.length === 0 ? (
                <EmptyListAnimation 
                  title="No Favourites"
                />
              ) : (
                <View style={styles.ListItemContainer}>
                  {
                    FavoritesList.map((data: any) => (
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
                        <FavoritesItemCard 
                          id={data.id}
                          imagelink_portrait={data.imagelink_square}
                          name={data.name}
                          special_ingredient={data.special_ingredient}
                          type={data.type}
                          ingredients={data.ingredients}
                          average_rating={data.average_rating}
                          ratings_count={data.ratings_count}
                          roasted={data.roasted}
                          description={data.description}
                          favourite={data.favourite}
                          ToggleFavouriteItem={ToggleFavourite}
                        />
                      </TouchableOpacity>
                    ))
                  }
                </View>
              )
            }
          </View>
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

export default FavoritesScreen;
