import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  StatusBar,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ChangePassword = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{ flex: 1, backgroundColor: "#fff" }}
      onPress={Keyboard.dismiss}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={{ marginHorizontal: 20, marginTop: 50 }}>
        <TouchableOpacity className="w-7 mb-4">
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>

        {/* Title and description */}
        <Text className="text-2xl font-bold mb-2">Change Password</Text>
        <Text className="font-semibold text-sm text-gray-400 mb-4">
          Enter the code sent to your email or phone number then enter your new
          password
        </Text>

        <TextInput
          placeholder="Code sent"
          className="bg-gray-200 px-4 rounded-lg h-14 mb-6"
        />
        <TextInput
          placeholder="Your new password"
          passwordRules="true"
          className="bg-gray-200 px-4 rounded-lg h-14 mb-6"
          secureTextEntry
        />
        <TextInput
          placeholder="Repeat password"
          passwordRules="true"
          className="bg-gray-200 px-4 rounded-lg h-14 mb-6"
          secureTextEntry
        />

        <View style={{ height: 50 }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("confetti")}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                color: "white",
              }}
            >
              Reset Password
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ChangePassword;

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
