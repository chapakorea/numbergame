import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppColors from "../../constants/AppColors";

export default function Title({ children }) {
  return <Text style={styles.title}> {children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    color: AppColors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: AppColors.accent500,
    padding: 12,
  },
});
