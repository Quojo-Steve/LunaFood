import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Confetti = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{ flex: 1, backgroundColor: "#fff" }}
      onPress={Keyboard.dismiss}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={{ marginHorizontal: 20, marginTop: 50 }}>
        <View className="w-full flex items-center justify-center">
          <Image
            source={require("../assets/images/confetti.gif")}
            className=" w-full"
          />
        </View>
        {/* Title and description */}
        <Text className="text-2xl font-bold text-center mb-2">
          Congratulation!
        </Text>
        <Text className="font-semibold text-sm text-gray-400 mb-4 text-center">
          your account is complete please enjoy the best menu from us. password
        </Text>

        <View style={{ height: 50 }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("homePage")}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                color: "white",
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Confetti;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#872c03",
    justifyContent: "center",
    alignItems: "center",
  },
});
