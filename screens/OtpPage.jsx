import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const OtpPage = () => {
  const navigation = useNavigation();

  // States to hold OTP values
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Refs to handle focus on inputs
  const inputRefs = useRef([]);

  const handleChangeText = (value, index) => {
    if (value.length > 1) return; // Only allow one character per input

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < otp.length - 1) {
      // Move to the next input when a character is entered
      setActiveIndex(index + 1);
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === "Backspace" && index > 0 && otp[index] === "") {
      // Move to the previous input if backspace is pressed and the current input is empty
      setActiveIndex(index - 1);
      inputRefs.current[index - 1].focus();
    }
  };

  const handleFocus = (index) => {
    setActiveIndex(index);
  };

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1, backgroundColor: "#fff" }}
      onPress={Keyboard.dismiss}
    >
      <SafeAreaView style={{ marginHorizontal: 20, marginTop: 50 }}>
        {/* Back Arrow */}
        <TouchableOpacity className="w-7">
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>

        {/* Title and description */}
        <Text className="text-2xl font-bold text-center mb-2">
          Verification Email
        </Text>
        <Text className="font-medium text-sm text-gray-400 text-center">
          Please enter the code we just sent to your email
        </Text>
        <Text className="font-bold text-center mb-10">
          quojosteve@gmail.com
        </Text>

        {/* OTP Input Area */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              value={digit}
              onChangeText={(value) => handleChangeText(value, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              onFocus={() => handleFocus(index)}
              style={[
                styles.otpInput,
                {
                  borderColor: activeIndex === index ? "#eb6f19" : "#ccc",
                },
              ]}
              maxLength={1}
              keyboardType="numeric"
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </View>

        {/* Resend option */}
        <View className="flex justify-center items-center flex-row my-6">
          <Text className="font-medium text-gray-400">
            If you didn't receive a code?
          </Text>
          <Text
            className="text-[#eb6f19] font-bold ml-1"
            // onPress={() => navigation.navigate("loginPage")}
          >
            Resend
          </Text>
        </View>

        {/* Continue button */}
        <View style={{ height: 50 }}>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                color: "white",
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default OtpPage;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#872c03",
    justifyContent: "center",
    alignItems: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#f0f0f0",
  },
});
