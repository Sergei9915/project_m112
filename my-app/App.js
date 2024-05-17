import AppNavigator from "./src/navigation/AppNavigator";
import { SafeAreaView, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} />
      <AppNavigator />
    </SafeAreaView>
  );
}
