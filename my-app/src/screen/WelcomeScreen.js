import { Image, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../../assets/M112.png")} />

      <Text style={styles.h1}>
        Інтернет-магазин М112: Запчастини для мобільних телефонів та планшетів
      </Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("TabNavigator")}
      >
        <Text style={styles.text}>Поїхали!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#3c444c",
    marginVertical: 80,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  img: {
    width: 399,
    height: 186,
  },
  btn: {
    backgroundColor: "#ff4500",
    borderRadius: 18,
    paddingVertical: 18,
    width: "80%",
    alignItems: "center",
  },
});

export default WelcomeScreen;
