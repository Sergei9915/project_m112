import React, { useCallback, useState, useEffect } from "react";
import { FlatList, View, ActivityIndicator, Pressable } from "react-native";
import ProductList from "../../components/product/ProductList";
import Header from "../../components/Header";
import DATA from "../../data/data";
import { nextData } from "../../data/data";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [data, setData] = useState([...DATA]);
  const [searchItem, setSearchItem] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(0);
  const [additionalLoading, setAdditionalLoading] = useState(false);
  const navigation = useNavigation();

  const renderItems = useCallback(({ item }) => {
    return (
      <Pressable
        onPress={() => navigation.navigate("PhoneDetail", { item: item })}
      >
        <ProductList item={item} />
      </Pressable>
    );
  }, []);

  const filterItem = data.filter((item) => {
    return item.title.toLowerCase().includes(searchItem.toLowerCase());
  });

  const refreshFilter = data.filter((item) => {
    return item.isNew ? item.isNew : null;
  });

  useEffect(() => {
    if (page > 1) {
      setAdditionalLoading(true);
      setTimeout(() => {
        setData((prevState) => [...prevState, ...nextData]);
        setAdditionalLoading(false);
      }, 1500);
    }
  }, [page]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setPage(1);
      setRefreshing(false);
      setData(refreshFilter);
    }, 3000);
  }, [refreshFilter]);

  const onEndReached = useCallback(() => {
    if (page > 1) {
      return;
    }
    setPage((prevState) => prevState + 2);
  }, [page]);

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
