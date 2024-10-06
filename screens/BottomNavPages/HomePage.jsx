import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const HomePage = () => {
  const hasNotification = true; // Change this flag based on whether there's a notification

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1, backgroundColor: "#fff" }}
      onPress={Keyboard.dismiss}
    >
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ marginHorizontal: 20, marginTop: 50 }}>
          <View className="flex items-center flex-row justify-between">
            <Text className="text-center w-[90%] text-2xl font-bold mb-2">
              Home
            </Text>
            <View style={{ position: "relative" }}>
              <FontAwesome name="bell-o" size={30} color="black" />
              {hasNotification && <View style={styles.notificationDot} />}
            </View>
          </View>

          {/* Search area */}
          <View
            style={styles.searchContainer}
            className="bg-slate-100 border-gray-500 border"
          >
            <FontAwesome
              name="search"
              size={20}
              color="#999"
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search on Luna Foods"
              style={styles.searchInput}
              autoCapitalize="none"
            />
          </View>

          {/* Delivery zone area */}
          <View className="bg-[#eb6f19] mt-4 flex justify-center rounded-xl py-3 px-6">
            <View className="flex flex-row justify-between">
              <Text className="text-white font-extrabold">
                Delivery to Home
              </Text>
              <MaterialIcons name="navigate-next" size={30} color="white" />
            </View>
            <Text className="text-white">Utama Street no.14, Dubai</Text>
            <TouchableOpacity className="bg-white w-20 items-center p-2 rounded-lg mt-2">
              <Text className="text-[#eb6f19]">2.4 km</Text>
            </TouchableOpacity>
          </View>

          {/* Scrollable part */}

          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            {/* Discount banner */}
          </ScrollView>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  notificationDot: {
    position: "absolute",
    right: 4,
    top: 2,
    height: 12,
    width: 12,
    borderRadius: 50,
    backgroundColor: "#872c03",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});
