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

  return (
    <View style={styles.container}>
      {toggleInput && (
        <TextInput
          style={styles.input}
          placeholder="Пошук..."
          onChangeText={onChangeText}
        />
      )}

      <CustomPress onPress={toggleModal}>
        <Feather name="heart" size={24} color="black" />
      </CustomPress>

      <CustomModal onPress={toggleModal} visible={modalVisible}>
        <Text style={styles.text}>Close Modal</Text>
      </CustomModal>

      <CustomPress onPress={toggleInput}>
        <Feather name="search" size={24} color="black" />
      </CustomPress>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    margin: 10,
    gap: 5,
  },

  input: {
    flex: 1,
    borderRadius: 6,
    height: 40,
    padding: 10,
    borderWidth: 2,
    opacity: 1,
  },

  inputHidden: {
    opacity: 0,
  },

  text: {
    fontSize: 15,
    padding: 15,
    backgroundColor: "orange",
  },
});

export default Header;
