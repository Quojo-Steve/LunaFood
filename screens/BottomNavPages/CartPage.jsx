import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Keyboard,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import DeliveryZone from "../../components/DeliveryZone";

const CartPage = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: "#fff" }}
      onPress={Keyboard.dismiss}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={{ flex: 1 }}>
        <SafeAreaView
          style={{
            marginHorizontal: 20,
            marginTop: 30,
          }}
        >
          <View className="flex items-center flex-row justify-between">
            <Text className="text-center w-[90%] text-2xl font-bold mb-2">
              My Cart
            </Text>
          </View>
          <DeliveryZone />
          <Text className="font-bold text-xl">Your Order (3)</Text>

          <ScrollView
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 285 }} // Add bottom padding
            showsVerticalScrollIndicator={false}
            className="mt-2"
          >
            <View className="flex flex-row justify-between border-b border-b-gray-200 pb-2 mb-6">
              <Image
                source={require("../../assets/images/kosua.jpeg")}
                className="w-28 h-24 rounded-xl mr-4"
              />
              <View>
                <Text
                  className="font-semibold text-base mb-4"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Jollof Rice and Chicken with Salad
                </Text>
                <View className="flex flex-row w-full items-center">
                  {/* Minus Button */}
                  <TouchableOpacity className="bg-gray-300 h-8 w-8 rounded-full flex items-center justify-center">
                    <Text className="text-gray-600 text-xl font-bold">-</Text>
                  </TouchableOpacity>

                  {/* Quantity */}
                  <Text className="text-lg mx-3">1</Text>

                  {/* Plus Button */}
                  <TouchableOpacity className="bg-[#eb6f19] h-8 w-8 rounded-full flex items-center justify-center">
                    <Text className="text-white text-xl">+</Text>
                  </TouchableOpacity>

                  {/* Price */}
                  <Text className="ml-6 text-lg text-[#eb6f19] font-bold">
                    GHC 20.90
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex flex-row justify-between border-b border-b-gray-200 pb-2 mb-6">
              <Image
                source={require("../../assets/images/kosua.jpeg")}
                className="w-28 h-24 rounded-xl mr-4"
              />
              <View>
                <Text
                  className="font-semibold text-base mb-4"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Jollof Rice and Chicken with Salad
                </Text>
                <View className="flex flex-row w-full items-center">
                  {/* Minus Button */}
                  <TouchableOpacity className="bg-gray-300 h-8 w-8 rounded-full flex items-center justify-center">
                    <Text className="text-gray-600 text-xl font-bold">-</Text>
                  </TouchableOpacity>

                  {/* Quantity */}
                  <Text className="text-lg mx-3">1</Text>

                  {/* Plus Button */}
                  <TouchableOpacity className="bg-[#eb6f19] h-8 w-8 rounded-full flex items-center justify-center">
                    <Text className="text-white text-xl">+</Text>
                  </TouchableOpacity>

                  {/* Price */}
                  <Text className="ml-6 text-lg text-[#eb6f19] font-bold">
                    GHC 20.90
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex flex-row justify-between border-b border-b-gray-200 pb-2 mb-6">
              <Image
                source={require("../../assets/images/kosua.jpeg")}
                className="w-28 h-24 rounded-xl mr-4"
              />
              <View>
                <Text
                  className="font-semibold text-base mb-4"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Jollof Rice and Chicken with Salad
                </Text>
                <View className="flex flex-row w-full items-center">
                  {/* Minus Button */}
                  <TouchableOpacity className="bg-gray-300 h-8 w-8 rounded-full flex items-center justify-center">
                    <Text className="text-gray-600 text-xl font-bold">-</Text>
                  </TouchableOpacity>

                  {/* Quantity */}
                  <Text className="text-lg mx-3">1</Text>

                  {/* Plus Button */}
                  <TouchableOpacity className="bg-[#eb6f19] h-8 w-8 rounded-full flex items-center justify-center">
                    <Text className="text-white text-xl">+</Text>
                  </TouchableOpacity>

                  {/* Price */}
                  <Text className="ml-6 text-lg text-[#eb6f19] font-bold">
                    GHC 20.90
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex flex-row justify-between border-b border-b-gray-200 pb-2 mb-6">
              <Image
                source={require("../../assets/images/kosua.jpeg")}
                className="w-28 h-24 rounded-xl mr-4"
              />
              <View>
                <Text
                  className="font-semibold text-base mb-4"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Jollof Rice and Chicken with Salad
                </Text>
                <View className="flex flex-row w-full items-center">
                  {/* Minus Button */}
                  <TouchableOpacity className="bg-gray-300 h-8 w-8 rounded-full flex items-center justify-center">
                    <Text className="text-gray-600 text-xl font-bold">-</Text>
                  </TouchableOpacity>

                  {/* Quantity */}
                  <Text className="text-lg mx-3">1</Text>

                  {/* Plus Button */}
                  <TouchableOpacity className="bg-[#eb6f19] h-8 w-8 rounded-full flex items-center justify-center">
                    <Text className="text-white text-xl">+</Text>
                  </TouchableOpacity>

                  {/* Price */}
                  <Text className="ml-6 text-lg text-[#eb6f19] font-bold">
                    GHC 20.90
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex flex-row justify-between border-b border-b-gray-200 pb-2 mb-6">
              <Image
                source={require("../../assets/images/kosua.jpeg")}
                className="w-28 h-24 rounded-xl mr-4"
              />
              <View>
                <Text
                  className="font-semibold text-base mb-4"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Jollof Rice and Chicken with Salad
                </Text>
                <View className="flex flex-row w-full items-center">
                  {/* Minus Button */}
                  <TouchableOpacity className="bg-gray-300 h-8 w-8 rounded-full flex items-center justify-center">
                    <Text className="text-gray-600 text-xl font-bold">-</Text>
                  </TouchableOpacity>

                  {/* Quantity */}
                  <Text className="text-lg mx-3">1</Text>

                  {/* Plus Button */}
                  <TouchableOpacity className="bg-[#eb6f19] h-8 w-8 rounded-full flex items-center justify-center">
                    <Text className="text-white text-xl">+</Text>
                  </TouchableOpacity>

                  {/* Price */}
                  <Text className="ml-6 text-lg text-[#eb6f19] font-bold">
                    GHC 20.90
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex flex-row justify-between border-b border-b-gray-200 pb-2 mb-6">
              <Image
                source={require("../../assets/images/kosua.jpeg")}
                className="w-28 h-24 rounded-xl mr-4"
              />
              <View>
                <Text
                  className="font-semibold text-base mb-4"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Jollof Rice and Chicken with Salad
                </Text>
                <View className="flex flex-row w-full items-center">
                  {/* Minus Button */}
                  <TouchableOpacity className="bg-gray-300 h-8 w-8 rounded-full flex items-center justify-center">
                    <Text className="text-gray-600 text-xl font-bold">-</Text>
                  </TouchableOpacity>

                  {/* Quantity */}
                  <Text className="text-lg mx-3">1</Text>

                  {/* Plus Button */}
                  <TouchableOpacity className="bg-[#eb6f19] h-8 w-8 rounded-full flex items-center justify-center">
                    <Text className="text-white text-xl">+</Text>
                  </TouchableOpacity>

                  {/* Price */}
                  <Text className="ml-6 text-lg text-[#eb6f19] font-bold">
                    GHC 20.90
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex flex-row justify-between border-b border-b-gray-200 pb-2 mb-6">
              <Image
                source={require("../../assets/images/kosua.jpeg")}
                className="w-28 h-24 rounded-xl mr-4"
              />
              <View>
                <Text
                  className="font-semibold text-base mb-4"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Jollof Rice and Chicken with Salad
                </Text>
                <View className="flex flex-row w-full items-center">
                  {/* Minus Button */}
                  <TouchableOpacity className="bg-gray-300 h-8 w-8 rounded-full flex items-center justify-center">
                    <Text className="text-gray-600 text-xl font-bold">-</Text>
                  </TouchableOpacity>

                  {/* Quantity */}
                  <Text className="text-lg mx-3">1</Text>

                  {/* Plus Button */}
                  <TouchableOpacity className="bg-[#eb6f19] h-8 w-8 rounded-full flex items-center justify-center">
                    <Text className="text-white text-xl">+</Text>
                  </TouchableOpacity>

                  {/* Price */}
                  <Text className="ml-6 text-lg text-[#eb6f19] font-bold">
                    GHC 20.90
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity className="bg-[#eb6f19] p-4 rounded-xl w-full">
              <Text className="text-white text-center font-bold text-base">
                Place Order
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default CartPage;

const styles = StyleSheet.create({});
