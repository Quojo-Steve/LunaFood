import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Location = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <SafeAreaView style={{ marginHorizontal: 20, marginTop: 50 }}>
        {/* Back Arrow */}
        <View className="flex flex-row items-center">
          <TouchableOpacity className="w-7">
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <Text className="text-center w-full font-bold text-xl">Location</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#872c03",
    justifyContent: "center",
    alignItems: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#f0f0f0",
  },
});
