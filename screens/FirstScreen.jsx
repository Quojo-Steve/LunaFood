import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const FirstScreen = () => {
  return (
    <View className="bg-[#398f45] flex items-center justify-center h-screen">
      <Image source={require("../assets/logo.png")} className="w-20 h-20" />
      <Text className="text-white font-bold text-5xl">Luna</Text>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({});
