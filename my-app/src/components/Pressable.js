import { Pressable } from "react-native";

const CustomPress = ({ children, onPress }) => {
  return <Pressable onPress={onPress}>{children}</Pressable>;
};

export default CustomPress;
