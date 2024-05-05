import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

// import Home from "./src/screen/home/Home"; (error)

const DATA = {
  title: "Дисплей Apple iPhone 14 Pro Max з тачскріном",
  price: "17 710.00грн.",
  oldPrice: "20 000грн",
  isNew: true,
  characteristic:
    "оригінал REF - відновлений дисплей (заміна скла), колір: чорний",
};

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.container}>
        <View>
          <Image
            source={require("./assets/iPhone14ProMax.jpg")}
            style={styles.img}
          />
          <Foundation
            style={styles.new}
            name="burst-new"
            size={24}
            color="red"
          />
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.title}>{DATA.title}</Text>
          <View style={styles.containerPrice}>
            <Text style={styles.price}>{DATA.price}</Text>
            <Text style={styles.oldPrice}>{DATA.oldPrice}</Text>
          </View>
          <Text numberOfLines={1}>{DATA.characteristic}</Text>
        </View>
        <View style={styles.containerBuy}>
          <Feather name="heart" size={24} color="black" />
          <Feather name="shopping-cart" size={24} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    marginHorizontal: 2,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 2.5,

    // elevation: 2,
  },
  img: {
    width: 90,
    height: 90,
  },
  containerInfo: {
    flex: 2,
    justifyContent: "space-between",
    padding: 5,
  },

  title: {
    fontSize: 17,
    fontWeight: "bold",
  },

  price: {
    fontSize: 13,
    fontWeight: "bold",
    color: "red",
    marginRight: 10,
  },

  oldPrice: {
    fontSize: 13,
    textDecorationLine: "line-through",
  },

  new: {
    position: "absolute",
    top: 0,
    left: 76,
  },

  containerPrice: {
    flexDirection: "row",
  },

  containerBuy: {
    justifyContent: "space-between",
  },
});
