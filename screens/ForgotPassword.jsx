import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      style={{ flex: 1, backgroundColor: "#fff" }}
      onPress={Keyboard.dismiss}
    >
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

        <View>
          <View className="flex items-center flex-row bg-slate-200 rounded-lg p-4 mb-4">
            <View className="bg-slate-300 p-2 h-12 w-12 flex items-center justify-center rounded-full mr-4">
              <Entypo name="mail" size={30} color="#eb6f19" />
            </View>
            <View>
              <Text className="font-bold">Email</Text>
              <Text className="text-gray-400">Send to your email</Text>
            </View>
          </View>

          <View className="flex items-center flex-row bg-slate-200 rounded-lg p-4 mb-4">
            <View className="bg-slate-300 p-2 h-12 w-12 flex items-center justify-center rounded-full mr-4">
              <FontAwesome name="phone" size={30} color="black" />
            </View>
            <View>
              <Text className="font-bold">Phone Number</Text>
              <Text className="text-gray-400">Send to your phone number</Text>
            </View>
          </View>
        </View>

        <View style={{ height: 50 }}>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                color: "white",
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
