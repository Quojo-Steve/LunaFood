import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const DeliveryZone = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.deliveryContainer}
      onPress={() => navigation.navigate("location")}
    >
      <View style={styles.deliveryHeader}>
        <Text style={styles.deliveryTitle}>Delivery to Home</Text>
        <MaterialIcons name="navigate-next" size={30} color="white" />
      </View>
      <Text style={styles.deliveryAddress}>Utama Street no.14, Dubai</Text>
      <View style={styles.circleSmall}></View>
      <TouchableOpacity style={styles.distanceButton}>
        <Text style={styles.distanceText}>2.4 km</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default DeliveryZone;

const styles = StyleSheet.create({
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
});
