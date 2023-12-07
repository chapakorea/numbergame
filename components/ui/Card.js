import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppColors from '../../constants/AppColors';

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
      backgroundColor: AppColors.primary600,
      borderRadius: 8,
      elevation: 8, //android
    }
  });
  