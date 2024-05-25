import { Modal, Pressable, View } from "react-native";
import { StyleSheet } from "react-native";

const CustomModal = ({ onPress, visible, children }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onPress}
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
    margin: 20,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
