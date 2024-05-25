import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import CustomModal from "./Modal";
import CustomPress from "./Pressable";

const Header = ({ onChangeText }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputVisible, setInputVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleInput = () => {
    setInputVisible(!inputVisible);
  };

  const isInput = inputVisible && (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      placeholder="Пошук..."
      placeholderTextColor={"orange"}
    />
  );

  return (
    <View style={styles.container}>
      {isInput}

      <View style={styles.btnContainer}>
        <CustomPress onPress={toggleModal}>
          <Feather name="heart" size={24} color="#ff4500" />
        </CustomPress>

        <CustomPress onPress={toggleInput}>
          <Feather name="search" size={24} color="#ff4500" />
        </CustomPress>
      </View>

      <CustomModal onPress={toggleModal} visible={modalVisible}>
        <Text style={styles.text}>Close Modal</Text>
      </CustomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginHorizontal: 5,
  },

  btnContainer: {
    flexDirection: "row",
    gap: 10,
    marginLeft: 5,
  },

  input: {
    flex: 1,
    borderRadius: 5,
    borderColor: "orange",
    height: 40,
    marginVertical: 12,
    padding: 10,
    borderWidth: 2,
  },

  text: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Header;
