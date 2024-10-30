import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

const LocationComponent = () => {
  const navigation = useNavigation();
  const [region, setRegion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
      setLoading(false);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={styles.safeArea}>
        {/* Header with Back Arrow */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Location</Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.addButtonText}>Add Address</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.mapContainer}>
          {loading ? (
            <ActivityIndicator size="large" color="#eb6f19" />
          ) : errorMsg ? (
            <Text style={styles.errorText}>{errorMsg}</Text>
          ) : (
            region && (
              <MapView style={styles.map} region={region} showsUserLocation>
                <Marker coordinate={region} title="You are here!" />
              </MapView>
            )
          )}
        </View>

        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.divider}>
                <View style={styles.line} className="bg-gray-800" />
              </View>
              <Text style={styles.modalTitle}>Detail Address</Text>
              <View style={styles.addressContainer}>
                <AntDesign name="enviromento" size={30} color="#4CAF50" />
                <View style={styles.addressDetails}>
                  <Text style={styles.addressTitle}>Utama Street No.20</Text>
                  <Text style={styles.addressText}>
                    Dumbo Street No.20, Dumbo, New York 10001, United States of
                    America
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.changeButton}>
                <Text style={styles.changeButtonText}>Change</Text>
              </TouchableOpacity>

              <Text style={styles.saveAddressAsText}>Save Address As</Text>
              <View style={styles.saveAsOptions}>
                <TouchableOpacity style={styles.optionButton}>
                  <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                  <Text>Office</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                  <Text>Others</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.confirmButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.confirmButtonText}>Confirmation</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  safeArea: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    color: "#333",
  },
  addButton: {
    backgroundColor: "#eb6f19",
    padding: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  mapContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  errorText: {
    textAlign: "center",
    color: "red",
    fontSize: 18,
    marginTop: 20,
  },
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
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  addressDetails: {
    marginLeft: 10,
  },
  addressTitle: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
  },
  addressText: {
    color: "#ccc",
    fontSize: 14,
  },
  changeButton: {
    backgroundColor: "#444",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  changeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  saveAddressAsText: {
    color: "#aaa",
    fontSize: 14,
    marginBottom: 10,
  },
  saveAsOptions: {
    flexDirection: "row",
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: "#333",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  confirmButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  confirmButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    width: 80,
  },
  line: {
    flex: 1,
    height: 4,
  },
});

export default LocationComponent;
