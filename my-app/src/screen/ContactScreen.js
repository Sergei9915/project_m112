import {
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { FontAwesome, Fontisto, Ionicons } from "@expo/vector-icons";

const tel = "tel:+380981120770";
const email = "mailto:admin@m112.com.ua";

const handlePress = async (url) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
};

const handleBtn = (url) => handlePress(url);

const ContactScreen = () => {
  return (
    <View style={styles.containerHead}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>
        Контактна інформація
      </Text>

      <Pressable style={styles.container} onPress={() => handleBtn(tel)}>
        <FontAwesome name="phone-square" size={35} />
        <View style={styles.containerText}>
          <Text>+38 (098) 112-07-70</Text>
          <Text>+38 (099) 112-07-70 </Text>
          <Text>+38 (073) 112-07-70 </Text>
        </View>
      </Pressable>
      <Pressable style={styles.container} onPress={() => handleBtn(email)}>
        <Fontisto name="email" size={35} />
        <View style={styles.containerText}>
          <Text>info@m112.com.ua</Text>
          <Text>admin@m112.com.ua</Text>
        </View>
      </Pressable>
      <View style={styles.container}>
        <Fontisto name="map-marker-alt" size={35} />
        <View style={styles.containerText}>
          <Text>Українa, м. Дніпро</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Ionicons name="alarm-outline" size={35} />
        <View style={styles.containerText}>
          <Text>Пн-Пт: 9:00 - 18:00</Text>
          <Text>Сб:10:00 - 16:00</Text>
          <Text>Нд: Вихідний</Text>
        </View>
      </View>
      <Image
        style={styles.img}
        resizeMode="stretch"
        source={require("../../assets/M112.png")}
      />
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  containerHead: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    gap: 30,
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  containerText: {
    gap: 2,
    marginLeft: 7,
  },
  img: {
    marginTop: 70,
    width: 399,
    height: 186,
  },
});
