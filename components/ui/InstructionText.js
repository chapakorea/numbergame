import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: "white",
    fontSize: 24,
  },
});
