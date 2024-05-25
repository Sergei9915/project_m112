import { useCallback, useState } from "react";
import { FlatList, View } from "react-native";
import ProductList from "../../components/product/ProductList";
import Header from "../../components/Header";
import DATA from "../../data/data";

const Home = () => {
  const [searchItem, setSearchItem] = useState("");

  const renderItems = useCallback(({ item }) => <ProductList item={item} />);

  const filterItem = DATA.filter((item) => {
    return item.title.toLowerCase().includes(searchItem.toLowerCase());
  });

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <Header onChangeText={setSearchItem} />
      <FlatList data={filterItem} renderItem={renderItems} />
    </View>
  );
};

export default Home;
