import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/BottomNavPages/HomePage";
import Fontisto from "@expo/vector-icons/Fontisto";
import MenuPage from "../screens/BottomNavPages/MenuPage";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CartPage from "../screens/BottomNavPages/CartPage";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import ProfilePage from "../screens/BottomNavPages/ProfilePage";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const Tabs = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="capture"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 20,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Fontisto
                name="home"
                size={24}
                color={focused ? "#eb6f19" : "#7D7B7B"}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  marginTop: 7,
                  color: focused ? "#eb6f19" : "#7D7B7B",
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="menuPage"
        component={MenuPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <MaterialIcons
                name="restaurant-menu"
                size={24}
                color={focused ? "#eb6f19" : "#7D7B7B"}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  marginTop: 7,
                  color: focused ? "#eb6f19" : "#7D7B7B",
                }}
              >
                Menu
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="cartPage"
        component={CartPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <FontAwesome6
                name="cart-shopping"
                size={24}
                color={focused ? "#eb6f19" : "#7D7B7B"}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  marginTop: 7,
                  color: focused ? "#eb6f19" : "#7D7B7B",
                }}
              >
                Cart
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="profilePage"
        // listeners={{
        //   tabPress: (e) => {
        //     e.preventDefault();
        //     navigation.navigate("login");
        //   },
        // }}
        component={ProfilePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <FontAwesome
                name="user"
                size={24}
                color={focused ? "#eb6f19" : "#7D7B7B"}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  marginTop: 7,
                  color: focused ? "#eb6f19" : "#7D7B7B",
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#b9b8b8",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
