import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors';

export default function Card({children}) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}


const styles = StyleSheet.create({
    card: {
      alignItems: "center",
      padding: 16,  
      marginTop: 40,
      marginHorizontal: 24,
      backgroundColor: Colors.primary600,
      borderRadius: 8,
      elevation: 8, //android
    }
  });
  