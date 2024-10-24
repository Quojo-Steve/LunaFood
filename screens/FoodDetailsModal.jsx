import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Optional from "../components/Optional";

const FoodDetailsModal = ({ visible, food, onClose }) => {
  if (!food) return null; // If no food item is selected, return null
  const [isFavorite, setIsFavorite] = useState(false);
  const [choice, setChoice] = useState([]);

  const AddToFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Close button */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <AntDesign
              name="closecircle"
              style={styles.closeButtonText}
              color="#eb6f19"
            />
          </TouchableOpacity>

          {/* Scrollable content */}
          <ScrollView
            contentContainerStyle={styles.scrollableContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Display food details */}
            <Image
              source={food.image}
              style={styles.foodImage}
              resizeMode="cover"
            />
            <View className="flex items-center flex-row justify-between w-full">
              <Text style={styles.foodName}>{food.name}</Text>
              {isFavorite ? (
                <AntDesign
                  name="heart"
                  size={24}
                  color="#eb6f19"
                  onPress={AddToFavorite}
                />
              ) : (
                <AntDesign
                  name="hearto"
                  size={24}
                  color="#eb6f19"
                  onPress={AddToFavorite}
                />
              )}
            </View>
            <Text style={styles.foodCategories}>
              {food.category.map((cat, index) => (
                <Text
                  className="text-gray-300"
                  key={index}
                  style={styles.categoryText}
                >
                  {cat}
                  {index < food.category.length - 1 && <Text>, </Text>}
                </Text>
              ))}
            </Text>

            <View className="flex flex-row w-full items-center">
              {/* Minus Button */}
              <TouchableOpacity className="bg-gray-300 h-8 w-8 rounded-full flex items-center justify-center">
                <Text className="text-gray-600 text-xl font-bold">-</Text>
              </TouchableOpacity>

              {/* Quantity */}
              <Text className="text-lg mx-8">1</Text>

              {/* Plus Button */}
              <TouchableOpacity className="bg-[#eb6f19] h-8 w-8 rounded-full flex items-center justify-center">
                <Text className="text-white text-xl">+</Text>
              </TouchableOpacity>

              {/* Price */}
              <Text className="ml-6 text-lg text-[#eb6f19] font-bold">
                GHC{food.price.toFixed(2)}
              </Text>
            </View>
            <View style={styles.divider}>
              <View style={styles.line} className="bg-gray-200" />
            </View>
            {/* Optionals part */}
            <Optional
              title="Sauce"
              options={[
                { id: 1, label: "Teriyaki", value: "Teriyaki", price: 2.5 },
                { id: 2, label: "Ketchup", value: "Ketchup", price: 0.0 },
                { id: 3, label: "Mayonnaise", value: "Mayonnaise", price: 4.0 },
              ]}
              checkedValues={choice}
              onChange={setChoice}
              style={{ marginBottom: 15 }}
            />
            <Optional
              title="Add a Topping?"
              options={[
                { id: 1, label: "Teriyaki", value: "Teriyaki1", price: 2.5 },
                { id: 2, label: "Ketchup", value: "Ketchup1", price: 0.0 },
                {
                  id: 3,
                  label: "Mayonnaise",
                  value: "Mayonnaise3",
                  price: 4.0,
                },
              ]}
              checkedValues={choice}
              onChange={setChoice}
              style={{ marginBottom: 15 }}
            />
          </ScrollView>

          <TouchableOpacity className="bg-[#eb6f19] p-4 rounded-xl">
            <Text className="text-white text-center font-bold text-base">
              Add to cart (GHC 25.89)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
    justifyContent: "flex-end", // Align modal at the bottom
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "100%",
    height: "90%", // Modal covers 90% of the screen
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10, // Ensures the button is above other content
  },
  closeButtonText: {
    fontSize: 35,
  },
  scrollableContent: {
    paddingBottom: 20, // Ensure padding at the bottom for scroll
    alignItems: "center",
  },
  foodImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  foodName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  foodDescription: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  foodCategories: {
    width: "100%",
    fontSize: 8,
    marginVertical: 7,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "500",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
  },
});

export default FoodDetailsModal;
