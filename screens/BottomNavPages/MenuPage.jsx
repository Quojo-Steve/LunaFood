// MenuPage.js
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  TextInput,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import foodData from "../../data"; // Your food data
import FoodDetailsModal from "../FoodDetailsModal"; // Import the modal component

const MenuPage = () => {
  const [hasNotification, setHasNotification] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedFood, setSelectedFood] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const filters = [
    "All",
    "Featured",
    "Top of Week",
    "New Arrivals",
    "Popular",
    "Trending",
    "Seasonal",
  ];

  // Filtered food data based on the selected filter
  const filteredFoodData =
    activeFilter === "All"
      ? foodData
      : foodData.filter((food) => food.category.includes(activeFilter));

  // Function to open modal with selected food item
  const openModal = (food) => {
    setSelectedFood(food);
    setModalVisible(true);
  };

  // Function to close the modal
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
              Menu
            </Text>
            <View style={{ position: "relative" }}>
              <FontAwesome name="bell-o" size={30} color="black" />
              {hasNotification && <View style={styles.notificationDot} />}
            </View>
          </View>

          <Text className="text-gray-400 text-lg">Our Food</Text>
          <Text className="text-[#eb6f19] font-bold text-3xl">
            Special For You
          </Text>

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

          {/* Scrollable filter area */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterContainer}
          >
            {filters.map((filter) => (
              <TouchableOpacity
                key={filter}
                onPress={() => setActiveFilter(filter)}
                style={styles.filterButton}
              >
                <Text
                  style={[
                    styles.filterText,
                    activeFilter === filter && styles.activeFilterText,
                  ]}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Scrollable food items area */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 10,
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              paddingBottom: 310,
            }}
          >
            {filteredFoodData.map((food) => (
              <TouchableOpacity
                className="mr-4 w-[45%] my-4"
                key={food.id}
                onPress={() => openModal(food)} // Open modal on food item press
              >
                <Image
                  source={food.image} // Use the image URL from foodData
                  className="w-full h-44 rounded-xl mb-2"
                  resizeMode="cover"
                />
                <View>
                  <Text
                    className="font-semibold text-lg"
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {food.name}
                  </Text>
                  <Text className="text-[#eb6f19] text-sm font-bold">
                    ${food.price.toFixed(2)}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </SafeAreaView>

        {/* Food Details Modal */}
        <FoodDetailsModal
          visible={modalVisible}
          food={selectedFood}
          onClose={closeModal}
        />
      </View>
    </View>
  );
};

export default MenuPage;

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
  filterContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 20,
    paddingHorizontal: 5,
    height: 50,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  filterText: {
    fontSize: 16,
    color: "#999",
  },
  activeFilterText: {
    color: "#eb6f19",
    fontWeight: "bold",
    fontSize: 20,
    textDecorationLine: "underline",
  },
});
