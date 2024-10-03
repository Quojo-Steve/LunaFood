import {
  ActivityIndicator,
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import ToastManager, { Toast } from "toastify-react-native";
// import axios from "axios";

export default function ForgotPasswordModal({ visible, onCancel }) {
  const [formStep, setformStep] = useState(1);
  const [email, setEmail] = useState(null);
  const [loading, setloading] = useState(false);

  const form1 = () => {
    try {
      if (!email) {
        setformStep(1);
        setloading(false);
        return Toast.error("Fill all required fields!");
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setformStep(1);
        setloading(false);
        return Toast.error("Enter valid email");
      }
      setformStep(2);
    } catch (error) {
      setloading(false);
      setformStep(1);
      console.log(error.response.data);
      Toast.error(error?.response?.data?.message || "Something went wrong...");
    }
  };

  const resetPassword = async () => {
    try {
      // const response = await axios.put(`${Url}/auth/forgotPassword`, {
      //   email,
      // });
      setloading(false);
      setformStep(3);
    } catch (error) {
      setloading(false);
      setformStep(1);
      console.log(error.response.data);
      Toast.error(error?.response?.data?.message || "Something went wrong...");
    }
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onCancel}
    >
      <ToastManager width={"100%"} />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Password Reset</Text>
          {formStep === 1 && (
            <View>
              <Text style={styles.instructions}>Enter your email address</Text>
              <View style={styles.inputContainer}>
                <Image
                  source={require("../assets/images/email.png")}
                  resizeMode="contain"
                  style={styles.icon}
                />
                <TextInput
                  placeholder="Email"
                  style={styles.textInput}
                  onChangeText={(text) => setEmail(text)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                />
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.cancelButton]}
                  onPress={() => {
                    setformStep(1);
                    onCancel();
                  }}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.nextButton]}
                  onPress={form1}
                  disabled={loading}
                >
                  {loading ? (
                    <ActivityIndicator color={"#fff"} />
                  ) : (
                    <Text style={styles.nextButtonText}>Next</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          )}
          {formStep === 2 && (
            <View>
              <Text style={styles.instructions}>
                You're about to reset your password, are you sure you want to
                proceed?
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.cancelButton]}
                  onPress={() => {
                    setformStep(1);
                    onCancel();
                  }}
                >
                  <Text style={styles.cancelButtonText}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.nextButton]}
                  onPress={resetPassword}
                  disabled={loading}
                >
                  {loading ? (
                    <ActivityIndicator color={"#fff"} />
                  ) : (
                    <Text style={styles.nextButtonText}>Yes</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          )}
          {formStep === 3 && (
            <View>
              <Text style={styles.finalMessage}>
                Check email for new credentials
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.doneButton]}
                  onPress={() => {
                    setformStep(1);
                    onCancel();
                  }}
                >
                  <Text style={styles.doneButtonText}>Done</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000080",
  },
  modalContent: {
    width: "90%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  instructions: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: "#F2F5F7",
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "#7D7B7B",
  },
  textInput: {
    flex: 1,
    padding: 5,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "gray",
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: "#872c03",
    marginLeft: 10,
  },
  doneButton: {
    backgroundColor: "#872c03",
  },
  cancelButtonText: {
    color: "#555555",
    fontWeight: "bold",
  },
  nextButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  doneButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  finalMessage: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
  },
});
