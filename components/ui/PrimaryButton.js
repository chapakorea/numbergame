import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import AppColors from "../../constants/AppColors";

function PrimaryButton ({children, onPress}) {
  return (
    <View style={styles.buttonOuterConatiner}>
      <Pressable
        style={({pressed}) => pressed ? [styles.buttonInnerConatiner, styles.pressed] : styles.buttonInnerConatiner }
        onPress={onPress}
        android_ripple={{ color: AppColors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterConatiner: {
    margin: 4,
    //overflow: 'hidden'
  },
  buttonInnerConatiner: {
    borderRadius: 28,
    backGroundColor: AppColors.primary400,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  pressed:{
    opacity: 0.75
  }
});
