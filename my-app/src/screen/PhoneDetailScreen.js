import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";

const PhoneDetail = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <SafeAreaView style={{ marginHorizontal: 16, flexDirection: "row" }}>
        <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-circle-left" size={28} color="#ff4500" />
        </Pressable>
        <Feather name="heart" size={24} color="#ff4500" />
      </SafeAreaView>
      <View
        style={{
          backgroundColor: "#ff4500",
          paddingHorizontal: 16,
          flex: 1,
          marginTop: 240,
          alignItems: "center",
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
        }}
      >
        <View
          style={{
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
          }}
        >
          <Image
            source={item.image}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
              borderRadius: 16,
              borderColor: "#000",
              borderWidth: 2,
            }}
          />
        </View>

        <Text style={{ marginTop: 170, fontSize: 25, fontWeight: "bold" }}>
          {item.title}
        </Text>
        <Text style={{ fontSize: 18, marginVertical: 20 }}>
          {item.characteristic}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            alignSelf: "flex-start",
          }}
        >
          Ціна: {item.price}
        </Text>
        <Pressable
          style={{
            marginTop: 150,
            borderRadius: 15,
            paddingHorizontal: 100,
            paddingVertical: 20,
            backgroundColor: "#fff",
          }}
        >
          <Text style={{ color: "#ff4500", fontSize: 20, fontWeight: "700" }}>
            Придбати
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PhoneDetail;
