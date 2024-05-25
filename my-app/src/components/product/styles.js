import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 20,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 6,
    marginBottom: 5,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.5,

    elevation: 2,
  },
  img: {
    width: 100,
    height: 100,
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

  priceNew: {
    fontSize: 13,
    fontWeight: "bold",
    color: "red",
    marginRight: 10,
  },

  price: {
    fontSize: 13,
    fontWeight: "bold",
  },
  oldPrice: {
    fontSize: 13,
    textDecorationLine: "line-through",
  },

  new: {
    position: "absolute",
    top: -5,
    left: 85,
  },

  containerPrice: {
    flexDirection: "row",
  },

  containerBuy: {
    justifyContent: "space-between",
  },
});
