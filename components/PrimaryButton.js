import { View, Text, Pressable } from "react-native";
import React from "react";

function PrimaryButton(params) {
  function pressHandler() {
    console.log('Pressed!');
    
  }
}

const PrimaryButton = (props) => {
  return (
    <Pressable onPress={pressHandler}>
      <View>
        <Text>{props.children}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;
