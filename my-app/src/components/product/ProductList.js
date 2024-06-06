import { Text, View, Image, Alert, Pressable, Share } from "react-native";
import { styles } from "./styles";
import { Feather, FontAwesome, Foundation } from "@expo/vector-icons";
import CustomPress from "../Pressable";

const ProductList = ({ item }) => {
  const { title, price, oldPrice, isNew, characteristic, image } = item;

  const buttonAlert = () =>
    Alert.alert("Купуємо?", "", [
      {
        text: "Відміна",
        onPress: () => {},
      },
      {
        text: "Так",
        onPress: () => {},
      },
    ]);

  const onShare = async (title, price) => {
    try {
      const result = await Share.share({
        message: `${title} ${price}`,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onShareBtn = (title, price) => onShare(title, price);

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={image} />
        {isNew ? (
          <Foundation
            style={styles.new}
            name="burst-new"
            size={24}
            color="red"
          />
        ) : null}
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.containerPrice}>
          {oldPrice ? (
            <>
              <Text style={styles.priceNew}>{price}</Text>
              <Text style={styles.oldPrice}>{oldPrice}</Text>
            </>
          ) : (
            <Text style={styles.price}>{price}</Text>
          )}
        </View>
        <Text numberOfLines={1}>{characteristic}</Text>
      </View>
      <View style={styles.containerBuy}>
        <Feather name="heart" size={24} color="black" />
        <Pressable onPress={() => onShareBtn(title, price)}>
          <FontAwesome name="share" size={24} />
        </Pressable>
        <CustomPress onPress={buttonAlert}>
          <Feather name="shopping-cart" size={24} color="black" />
        </CustomPress>
      </View>
    </View>
  );
};

export default ProductList;
