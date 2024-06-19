import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import PROMO from "../data/promotionData";

const screenWidth = Dimensions.get("window").width;

const renderItems = ({ item }) => {
  return (
    <View>
      <Image source={item.image} resizeMode="stretch" style={styles.img} />
      <Text numberOfLines={2} style={styles.text}>
        {item.text}
      </Text>
    </View>
  );
};

const PromotionScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handelScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / screenWidth;

    setActiveIndex(index);
  };

  const renderDotIndicators = () => {
    return PROMO.map((dot, index) => {
      if (activeIndex === index) {
        return <View style={styles.activeDot}></View>;
      } else {
        return <View key={dot.id} style={styles.inactiveDot}></View>;
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.swiper}>
        <FlatList
          data={PROMO}
          renderItem={renderItems}
          keyExtractor={(item) => item.id}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={handelScroll}
        />
        <View style={styles.containerDot}>{renderDotIndicators()}</View>
      </View>
    </View>
  );
};

export default PromotionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  swiper: {
    marginTop: 150,
  },

  img: {
    height: 300,
    width: screenWidth,
  },

  containerDot: {
    flexDirection: "row",
    justifyContent: "center",
  },

  activeDot: {
    backgroundColor: "#ff4500",
    height: 8,
    width: 8,
    borderRadius: 8,
    marginHorizontal: 4,
  },

  inactiveDot: {
    backgroundColor: "rgba(0,0,0,.2)",
    height: 8,
    width: 8,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  text: {
    textAlign: "center",
    color: "#ff4500",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    width: screenWidth,
  },
});
