import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Optional = ({ options, checkedValues, onChange, style, title }) => {
  let updatedCheckedValues = [...checkedValues];

  return (
    <View className="w-full">
      <Text className="text-2xl w-full font-bold mb-2">{title}</Text>
      <View className="w-full" style={style}>
        {/* TODO: Correct issue with deselecting an item */}
        {options.map((option) => {
          let active = updatedCheckedValues.includes(option.value);
          return (
            <TouchableOpacity
              key={option.id}
              className="border border-gray-400 flex "
              style={active ? [styles.activeCheckBox] : styles.checkBox}
              onPress={() => {
                if (active) {
                  updatedCheckedValues = updatedCheckedValues.filter(
                    (checkedValues) => checkedValues !== option.value
                  );
                  return onChange(updatedCheckedValues);
                }
                updatedCheckedValues.push(option.value);
                onChange(updatedCheckedValues);
              }}
            >
              <View className="flex items-center flex-row">
                <MaterialIcons
                  name={active ? "check-box" : "check-box-outline-blank"}
                  size={24}
                  color={active ? "#eb6f19" : "#64748b"}
                />
                <Text
                  className={
                    active
                      ? "text-base ml-4 text-slate-600"
                      : "text-base ml-4 text-slate-800"
                  }
                >
                  {option.label}
                </Text>
              </View>
              <Text
                className={
                  active
                    ? "text-base ml-4 text-slate-600 text-end"
                    : "text-base ml-4 text-slate-800 text-end"
                }
              >
                GHC {option.price}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Optional;

const styles = StyleSheet.create({
  checkBox: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "f3f4f6",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    borderRadius: 15,
  },
  activeCheckBox: {
    backgroundColor: "#eb6f19" + "11",
    height: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
});
