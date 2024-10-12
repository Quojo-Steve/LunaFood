import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  StatusBar,
  TextInput,
  Image,
} from "react-native";

const SignupPage = ({ navigation }) => {
  return (
    <View
      style={{ flex: 1, backgroundColor: "#fff" }}
      onPress={Keyboard.dismiss}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <SafeAreaView
        style={{ marginHorizontal: 20, marginTop: 30 }}
        className="h-full"
      >
        <View className="w-full flex justify-center items-center">
          <Image
            source={require("../assets/images/luna_2.png")}
            className="w-28 h-14"
          />
        </View>
        <Text className="text-2xl font-bold">Sign Up 😀</Text>
        <Text className="font-medium mb-5 text-xs text-gray-400">
          Create account and choose your favorite menu
        </Text>
        <Text className="font-bold text-lg">Name</Text>
        <TextInput
          placeholder="Your name"
          className="bg-gray-200 px-4 rounded-lg h-14 mb-3"
        />
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
          className="bg-gray-200 px-4 rounded-lg h-14 mb-6"
          secureTextEntry
        />
        <View style={{ height: 50 }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("otpPage")}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                color: "white",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex justify-center items-center flex-row mt-6">
          <Text className="font-medium text-gray-400">Have an account?</Text>
          <Text
            className="text-[#eb6f19] font-bold ml-1"
            onPress={() => navigation.navigate("loginPage")}
          >
            Sign In
          </Text>
        </View>
        <View className="flex justify-center items-center absolute bottom-28 w-full">
          <Text className="text-gray-400">
            By clicking Register, you agree to our
          </Text>
          <Text className="font-bold text-[#eb6f19]">
            Terms and Data Policy.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignupPage;

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
