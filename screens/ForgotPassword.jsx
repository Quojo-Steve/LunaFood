import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import ForgotPasswordModalEmail from "./ForgotPasswordModalEmail";
import ForgotPasswordModalPhone from "./ForgotPasswordModalPhone";

const ForgotPassword = () => {
  const [isModelOpen, setisModelOpen] = useState(false);
  const [isModelOpen2, setisModelOpen2] = useState(false);
  const navigation = useNavigation();

  return (
    <View
      style={{ flex: 1, backgroundColor: "#fff" }}
      onPress={Keyboard.dismiss}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={{ flex: 1 }}>
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
          <Text className="text-2xl font-bold mb-2">Forgot Password</Text>
          <Text className="font-semibold text-sm text-gray-400 mb-4">
            Select which contact details should we use to reset your password
          </Text>

          {/* Options for email and phone */}
          <View>
            <TouchableOpacity
              className="flex items-center flex-row bg-slate-200 rounded-lg p-4 mb-4"
              onPress={() => setisModelOpen(true)}
            >
              <View className="bg-slate-300 p-2 h-12 w-12 flex items-center justify-center rounded-full mr-4">
                <Entypo name="mail" size={30} color="#eb6f19" />
              </View>
              <View>
                <Text className="font-bold">Email</Text>
                <Text className="text-gray-400">Send to your email</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex items-center flex-row bg-slate-200 rounded-lg p-4 mb-4"
              onPress={() => setisModelOpen2(true)}
            >
              <View className="bg-slate-300 p-2 h-12 w-12 flex items-center justify-center rounded-full mr-4">
                <FontAwesome name="phone" size={30} color="#eb6f19" />
              </View>
              <View>
                <Text className="font-bold">Phone Number</Text>
                <Text className="text-gray-400">Send to your phone number</Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        {/* ForgotPasswordModal */}
        <ForgotPasswordModalEmail
          visible={isModelOpen}
          onCancel={() => setisModelOpen(false)}
        />

        <ForgotPasswordModalPhone
          visible={isModelOpen2}
          onCancel={() => setisModelOpen2(false)}
        />
      </View>
    </View>
  );
};

export default ForgotPassword;

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
