import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Welcome = () => {
  return (
    <View className="bg-white flex-1 items-center justify-center h-screen">
      <Image source={require("../assets/images/confetti.gif")} />
      <Text>Welcome</Text>
      <View style={{ height: 50 }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("welcome")}
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
    </View>
  );
};

export default Welcome;

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
