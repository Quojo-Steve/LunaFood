import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";

const LoginPage = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ margin: 20 }}>
        <Text className="text-2xl font-bold">Welcome Back 👋🏾</Text>
        <Text className="font-medium mb-5 text-xs text-gray-400">
          Sign in to your account
        </Text>
        <Text className="font-bold text-lg">Email</Text>
        <TextInput
          placeholder="Your email"
          className="bg-gray-200 px-4 rounded-lg h-14"
        ></TextInput>
        <Text className="font-bold text-lg">Password</Text>
        <TextInput></TextInput>
        <Text>Forgot Password?</Text>
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
                borderRadius: 10,
              }}
            >
              GET STARTED
            </Text>
          </TouchableOpacity>
        </View>
        <Text>Don't have an account?</Text>
        <Text>Sign Up</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#872c03",
    justifyContent: "center",
    alignItems: "center",
  },
});
