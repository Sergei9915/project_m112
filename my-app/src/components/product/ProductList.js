import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const ProductList = ({ item }) => {
  const { title, price, oldPrice, isNew, characteristic, image } = item;

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
        <Feather name="shopping-cart" size={24} color="black" />
      </View>
    </View>
  );
};

export default ProductList;
