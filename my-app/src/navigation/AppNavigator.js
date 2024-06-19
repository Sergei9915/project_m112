import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screen/WelcomeScreen";
import HomeScreen from "../screen/home/HomeScreen";
import AboutScreen from "../screen/AboutScreen";
import ContactScreen from "../screen/ContactScreen";
import PromotionScreen from "../screen/PromotionScreen";
import PhoneDetail from "../screen/PhoneDetailScreen";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const options = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === "Home") {
        iconName = focused ? "home" : "home";
      } else if (route.name === "Contact") {
        iconName = focused ? "contacts" : "contacts";
      } else if (route.name === "Promotion") {
        iconName = focused ? "gift" : "gift";
      } else if (route.name === "About") {
        iconName = focused ? "info" : "info";
      }
      return <AntDesign name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "#ff4500",
    tabBarInactiveTintColor: "gray",
  });

  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen
        options={{ title: "Головна сторінка" }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ title: "Акція" }}
        name="Promotion"
        component={PromotionScreen}
      />
      <Tab.Screen
        options={{ title: "Контакти" }}
        name="Contact"
        component={ContactScreen}
      />
      <Tab.Screen
        options={{ title: "Про магазин" }}
        name="About"
        component={AboutScreen}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="PhoneDetail" component={PhoneDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
