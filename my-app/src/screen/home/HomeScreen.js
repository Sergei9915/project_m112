import React, { useCallback, useState } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import ProductList from "../../components/product/ProductList";
import Header from "../../components/Header";
import DATA from "../../data/data";
import { nextData } from "../../data/data";

const HomeScreen = () => {
  const [data, setData] = useState([...DATA]);
  const [searchItem, setSearchItem] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(0);
  const [additionalLoading, setAdditionalLoading] = useState(false);

  const renderItems = useCallback(({ item }) => <ProductList item={item} />);

  const filterItem = data.filter((item) => {
    return item.title.toLowerCase().includes(searchItem.toLowerCase());
  });

  const refreshFilter = data.filter((item) => {
    return item.isNew ? item.isNew : null;
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setPage(1);
      setRefreshing(false);
      setData(refreshFilter);
    }, 3000);
  }, []);

  const onEndReached = useCallback(() => {
    if (page > 1) {
      return;
    }
    setPage((prevState) => prevState + 2);
    setAdditionalLoading(true);
    setTimeout(() => {
      setData((prevState) => [...prevState, ...nextData]);
      setAdditionalLoading(false);
    }, 1500);
  });

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <Header onChangeText={setSearchItem} />
      <FlatList
        data={filterItem}
        renderItem={renderItems}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.2}
        ListFooterComponent={() =>
          additionalLoading ? <ActivityIndicator /> : null
        }
      />
    </View>
  );
};

export default HomeScreen;
