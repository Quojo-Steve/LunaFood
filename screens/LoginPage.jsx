import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  Platform,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const LoginPage = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback
      style={{ flex: 1, backgroundColor: "#fff" }}
      onPress={Keyboard.dismiss}
    >
      <SafeAreaView style={{ marginHorizontal: 20, marginTop: 50 }}>
        <Text className="text-2xl font-bold">Welcome Back 👋🏾</Text>
        <Text className="font-medium mb-5 text-xs text-gray-400">
          Sign in to your account
        </Text>
        <Text className="font-bold text-lg">Email</Text>
        <TextInput
          placeholder="Your email"
          className="bg-gray-200 px-4 rounded-lg h-14 mb-3"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text className="font-bold text-lg">Password</Text>
        <TextInput
          placeholder="Your password"
          passwordRules="true"
          className="bg-gray-200 px-4 rounded-lg h-14 mb-6"
          secureTextEntry
        />
        <Text
          className="text-[#eb6f19] font-bold mb-6"
          onPress={() => navigation.navigate("forgotPassword")}
        >
          Forgot Password?
        </Text>
        <View style={{ height: 50 }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("loginPage")}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                color: "white",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex justify-center items-center flex-row mt-6">
          <Text className="font-medium text-gray-400">
            Don't have an account?
          </Text>
          <Text
            className="text-[#eb6f19] font-bold ml-1"
            onPress={() => navigation.navigate("signupPage")}
          >
            Sign Up
          </Text>
        </View>

        {/* Divider Line with Text */}
        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>Or with</Text>
          <View style={styles.line} />
        </View>

        {/* Sign in with Google */}
        <View className="flex items-center justify-center rounded-lg flex-row border-gray-300 p-4 border mb-4">
          <AntDesign name="google" size={24} color="#eb6f19" />
          <Text className="font-bold ml-4">Sign in with Google</Text>
        </View>

        {/* Sign in with Apple (displayed only on iOS) */}
        {Platform.OS === "ios" && (
          <View className="flex items-center justify-center rounded-lg flex-row border-gray-300 p-4 border">
            <AntDesign name="apple1" size={24} color="black" />
            <Text className="font-bold ml-4">Sign in with Apple</Text>
          </View>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#872c03",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "gray",
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "gray",
  },
});
