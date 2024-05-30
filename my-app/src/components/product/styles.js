import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderWidth: 2,
    borderColor: "#ff4500",
    borderRadius: 8,
    marginBottom: 6,
    marginHorizontal: 3,
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
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  priceNew: {
    fontSize: 14,
    fontWeight: "bold",
    color: "red",
    marginRight: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
  },
  oldPrice: {
    fontSize: 14,
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
