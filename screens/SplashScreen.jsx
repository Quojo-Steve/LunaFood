import { Image, View, ActivityIndicator } from "react-native";

const SplashScreen = () => {
  return (
    <View className="bg-white flex-1 items-center justify-center h-screen">
      <Image
        source={require("../assets/logo.png")}
        className="w-[350px] h-[350px] object-cover mb-6"
      />
      <ActivityIndicator />
    </View>
  );
};

export default SplashScreen;
