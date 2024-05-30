import { Modal, Pressable, View } from "react-native";
import { StyleSheet } from "react-native";

const CustomModal = ({ onPress, visible, children }) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={onPress}
      transparent={true}
      animationType="slide"
    >
      <View style={styles.centeredView}>
        <Pressable onPress={onPress}>
          <View style={styles.modalView}>{children}</View>
        </Pressable>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 350,
    backgroundColor: "rgba(222,133,67, 0.9)",
    borderRadius: 20,
  },
  modalView: {
    borderRadius: 15,
    padding: 25,
    backgroundColor: "orange",
  },
});
