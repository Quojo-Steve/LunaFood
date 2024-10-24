import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  TextInput,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Carousel from "../../components/Carousel";
import foodData from "../../data";
import FoodDetailsModal from "../FoodDetailsModal";

const HomePage = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const hasNotification = true; // Change this flag based on whether there's a notification
  // const [isRefreshed, setIsRefreshed] = useState(false);
  const openModal = (food) => {
    setSelectedFood(food);
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
    setSelectedFood(null);
  };

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

          <ScrollView
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 170 }} // Add bottom padding
            showsVerticalScrollIndicator={false}
            className="mt-2"
          >
            {/* Delivery zone area */}
            <View style={styles.deliveryContainer}>
              <View style={styles.deliveryHeader}>
                <Text style={styles.deliveryTitle}>Delivery to Home</Text>
                <MaterialIcons name="navigate-next" size={30} color="white" />
              </View>
              <Text style={styles.deliveryAddress}>
                Utama Street no.14, Dubai
              </Text>
              <View style={styles.circleSmall}></View>
              <TouchableOpacity style={styles.distanceButton}>
                <Text style={styles.distanceText}>2.4 km</Text>
              </TouchableOpacity>
            </View>

            {/* Discount banner */}
            <Carousel />
            {/* TODO: make it alternate between large image and small ones */}
            <Text className="font-bold mb-2 text-lg">Top of Week</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
                marginBottom: 20,
              }} // Adds padding around the items
            >
              {foodData.map((food) => (
                <TouchableOpacity
                  onPress={() => openModal(food)}
                  key={food.id}
                  className="mr-4 w-32"
                >
                  <Image
                    source={food.image}
                    className="w-32 h-32 rounded-xl mb-2"
                    resizeMode="cover"
                  />
                  <View>
                    <Text
                      className="font-semibold"
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {food.name}
                    </Text>
                    <Text className="text-[#eb6f19] text-xs font-semibold">
                      GHC {food.price}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <Text className="font-bold mb-2 text-lg">Sea food</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
                marginBottom: 20,
              }} // Adds padding around the items
            >
              {foodData.map((food) => (
                <TouchableOpacity
                  onPress={() => openModal(food)}
                  key={food.id}
                  className="mr-4 w-52"
                >
                  <Image
                    source={food.image}
                    className="w-full h-52 rounded-xl mb-2"
                    resizeMode="cover"
                  />
                  <View>
                    <Text
                      className="font-bold text-lg"
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {food.name}
                    </Text>
                    <Text className="text-[#eb6f19] text-base font-semibold">
                      GHC {food.price}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </ScrollView>
        </SafeAreaView>

        <FoodDetailsModal
          visible={modalVisible}
          food={selectedFood}
          onClose={closeModal}
        />
      </View>
    </View>
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
    backgroundColor: "#eb6f19",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  circleSmall: {
    position: "absolute",
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#872c03",
    opacity: 0.3,
    bottom: 10,
    right: 20,
    zIndex: 9,
  },
  deliveryContainer: {
    marginVertical: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: "#eb6f19",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  deliveryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deliveryTitle: {
    color: "white",
    fontWeight: "800",
    fontSize: 18,
  },
  deliveryAddress: {
    color: "white",
    marginTop: 8,
    fontSize: 14,
  },
  distanceButton: {
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginTop: 10,
    alignItems: "center",
    zIndex: 10,
  },
  distanceText: {
    color: "#eb6f19",
    fontWeight: "700",
  },
});
