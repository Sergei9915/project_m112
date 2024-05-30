import { Image, Text, View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import PROMO from "../data/promotionData";

const { width } = Dimensions.get("window");

const renderItems = () => {
  return PROMO.map((item) => (
    <View style={styles.slide1} key={item.id}>
      <Image resizeMode="stretch" style={styles.img} source={item.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  ));
};

const PromotionScreen = () => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        showsPagination={true}
        autoplay={true}
        dot={<View style={styles.dot}></View>}
        activeDot={<View style={styles.activeDot}></View>}
        paginationStyle={{ gap: 7 }}
      >
        {renderItems()}
      </Swiper>
    </View>
  );
};

export default PromotionScreen;

const styles = StyleSheet.create({
  wrapper: {},

  container: { flex: 1 },

  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  dot: {
    backgroundColor: "rgba(0,0,0,.2)",
    width: 8,
    height: 8,
    borderRadius: 8,
  },

  activeDot: {
    backgroundColor: "#ff4500",
    width: 8,
    height: 8,
    borderRadius: 8,
  },

  img: {
    flex: 0.6,
    width,
  },

  text: {
    color: "#ff4500",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
  },
});
