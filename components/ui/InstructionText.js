import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function InstructionText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: "white",
    fontSize: 24,
  },
});
